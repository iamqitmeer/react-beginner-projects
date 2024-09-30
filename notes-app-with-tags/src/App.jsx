import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Input,
  Textarea,
  Chip,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
export default function App() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  let [title, setTitle] = useState("");
  let [content, setContent] = useState("");
  let [strTags, setStrTags] = useState("");
  let [id, setId] = useState(0);

  let [tags, setTags] = useState(() => {
    let getTagsFromStorage = localStorage.getItem("tags");

    if (getTagsFromStorage) {
      return JSON.parse(getTagsFromStorage);
    } else {
      return [];
    }
  });

  // Edit Notes Work

  let [isEdited, setIsEdited] = useState(false);
  let [currentIndex, setCurrentIndex] = useState(null);

  let [notes, setNotes] = useState(() => {
    let getItemFromStorage = localStorage.getItem("notes");

    if (getItemFromStorage) {
      return JSON.parse(getItemFromStorage);
    } else {
      return [];
    }
  });

  let addNotes = () => {
    let seperatedComa = strTags.trim().split(",");
    let newTagsArr = [...tags];

    seperatedComa.forEach((tag) => {
      newTagsArr.push(tag.trim());
    });

    setTags(newTagsArr);

    let obj = {
      title: title.trim(),
      content: content.trim(),
      tags: seperatedComa,
      id: id + 1,
    };

    let newArr = [...notes];
    newArr.push(obj);
    setNotes(newArr);

    setTitle("");
    setContent("");
    setStrTags("");
  };

  let deleteNote = (index) => {
    let newArr = [...notes];
    newArr.splice(index, 1);
    setNotes(newArr);
  };

  let editNote = (index) => {
    setIsEdited(true);
    setCurrentIndex(index);

    let currNotes = notes[index];

    let str = currNotes.tags.trim().join();

    // // console.log(currNotes);
    setTitle(currNotes.title.trim());
    setContent(currNotes.content.trim());
    setStrTags(str.trim());
  };

  let updateNotes = () => {
    let seperatedComa = strTags.split(",");
    // console.log(seperatedComa);
    let obj = {
      title: title,
      content: content,
      tags: seperatedComa,
      id: id + 1,
    };

    let newArr = [...notes];
    newArr[currentIndex] = obj;
    setNotes(newArr);

    setTitle("");
    setContent("");
    setStrTags("");

    setIsEdited(false);
    setCurrentIndex(null);
  };

  let handleTagFilter = (tag) => {
    // console.log(tag);

    let newArr = [...notes];
    let emptyArr = newArr.filter((note) => {
      return note.tags.map((keyword) => {
        return console.log(keyword.includes(tag));
        
      });
    });
// console.log(emptyArr);

  };

  localStorage.setItem("notes", JSON.stringify(notes));
  localStorage.setItem("tags", JSON.stringify(tags));

  return (
    <div className="w-full h-screen">
      <Navbar className="bg-transparent">
        <NavbarBrand>
          <p className="font-bold">NOTES</p>
        </NavbarBrand>
        <NavbarContent
          className="hidden sm:flex gap-4"
          justify="center"
        ></NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <Button
              onPress={onOpen}
              as={Link}
              color="secondary"
              href="#"
              variant="shadow"
            >
              <span>
                <i className="ri-add-circle-line mr-1 text-md"></i> Add Notes
              </span>
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      <Modal
        className="bg-violet-900 text-white"
        backdrop="opaque"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            },
            exit: {
              y: -20,
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: "easeIn",
              },
            },
          },
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Add Your Notes Here{" "}
              </ModalHeader>
              <ModalBody>
                <Input
                  labelPlacement="outside"
                  placeholder="Note Title Here."
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full "
                />

                <Textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  // label="Note Content"
                  labelPlacement="outside"
                  placeholder="Enter Note Content Here."
                  className="w-full "
                />

                <Input
                  labelPlacement="outside"
                  placeholder="Tags - ',' Comma Seperated"
                  type="text"
                  value={strTags}
                  onChange={(e) => setStrTags(e.target.value)}
                  // label="Note Title"
                  className="w-full"
                />
              </ModalBody>
              <ModalFooter>
                {isEdited ? (
                  <Button
                    className="w-full"
                    color="warning"
                    onClick={updateNotes}
                    onPress={onClose}
                  >
                    Update Notes
                  </Button>
                ) : (
                  <Button
                    className="w-full"
                    color="default"
                    onClick={addNotes}
                    onPress={onClose}
                  >
                    Add Notes
                  </Button>
                )}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      <div className="w-full flex gap-1 flex-wrap p-9">
        {tags.map((tag) => {
          return (
            <Chip
              key={tag}
              onClick={() => handleTagFilter(tag)}
              color="secondary"
              className="cursor-pointer p-2"
            >
              {tag}
            </Chip>
          );
        })}
      </div>

      <div className="w-full flex gap-6 flex-wrap min-h-96 p-9">
        {notes.map((note, index) => {
          return (
            <div
              className="bg-violet-300 shadow-2xl hover:shadow-3xl p-8 rounded-2xl w-96 transition-all duration-300"
              key={index}
            >
              <h1 className="text-3xl font-bold mb-4 text-indigo-900">
                {note.title}
              </h1>
              <div>
                <p className="text-base text-gray-700 mb-4 leading-relaxed">
                  {note.content}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {note.tags.map((tag, index) => {
                  return (
                    <span
                      key={index}
                      className="bg-violet-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm"
                    >
                      {tag}
                    </span>
                  );
                })}
              </div>

              <div className="my-4 flex items-center gap-3">
                <Button
                  color="secondary"
                  onClick={() => editNote(index)}
                  onPress={onOpen}
                  className="hover:bg-violet-600 transition-colors duration-300"
                >
                  Edit
                </Button>
                <Button
                  color="danger"
                  onClick={() => deleteNote(index)}
                  className="hover:bg-red-600 transition-colors duration-300"
                >
                  Delete
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
