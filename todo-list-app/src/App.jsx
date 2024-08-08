import { useState } from "react";
import "./App.css";

function App() {
  let [list, setList] = useState([]);
  let [input, setInput] = useState("");
  let [flag, setFlag] = useState(true);
  let [isEdited, setIsEdited] = useState(null);
  let [currentIndex, setCurrentIndex] = useState();
  let [isChecked, setIsChecked] = useState(false);

  let addTodo = () => {
    if (input) {
      let newArr = [...list];
      newArr.push(input);
      setList(newArr);

      setInput("");
    } else {
      alert("Enter Your Todo");
    }
  };

  let deleteTodo = (index) => {
    let newArr = [...list];
    newArr.splice(index, 1);
    setList(newArr);
  };

  let editTodo = (index) => {
    setIsEdited(index);
    setFlag(false);
    let newArr = [...list];
    setInput(newArr[index]);
    // input = newArr[index]
    //     setList(newArr);

    setCurrentIndex(index);
  };

  let updateTodo = () => {
    let newArr = [...list];
    console.log(input);
    newArr[currentIndex] = input;
    setList(newArr);
    setInput("");
    setFlag(true);
    setIsEdited(null);
  };

  let handleCheckbox = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background">
      <div className="w-full max-w-md p-6 bg-card rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Todo List</h1>
        <div className="flex items-center mb-4">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="border-blue-600 outline-none flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1 mr-2"
            placeholder="Add a new todo"
            type="text"
            defaultValue=""
          />
          {flag ? (
            <button
              onClick={addTodo}
              className="inline-flex items-center text-white justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-blue-600-foreground hover:bg-blue-700 h-10 px-4 py-2 mr-2"
            >
              Add Todo
            </button>
          ) : (
            <button
              onClick={updateTodo}
              className="inline-flex items-center text-white justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-blue-600-foreground hover:bg-blue-700 h-10 px-4 py-2 mr-2"
            >
              Update Todo
            </button>
          )}
          {list[0] && (
            <button
              onClick={() => setList([])}
              className="inline-flex items-center text-white justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-red-600 text-blue-600-foreground hover:bg-red-700 h-10 px-4 py-2 mr-2"
            >
              Delete All
            </button>
          )}
        </div>
        <div className="space-y-2">
          {list.map((data, index) => {
            return (
              <div
                key={index}
                className={
                  isEdited == index
                    ? "bg-red-200 flex items-center justify-between p-2 rounded-md transition-colors hover:bg-muted"
                    : "bg-blue-200 flex items-center justify-between p-2 rounded-md transition-colors hover:bg-muted"
                }
              >
                <div className="flex items-center">
                  <input
                    value={isChecked}
                    type="checkbox"
                    onClick={handleCheckbox}
                    className="peer h-6 w-4 shrink-0 rounded-sm border border-blue-600 m-2"
                  />
                  <span key={index} className={isChecked ? "text-base line-through" : "text-base"}>{data}</span>
                </div>
                <div className="flex items-center">
                  <button
                    className="inline-flex items-center text-white justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-blue-600-foreground hover:bg-blue-700 h-10 px-4 py-2 mr-2"
                    onClick={() => editTodo(index)}
                  >
                    Edit
                  </button>
                  <button
                    className="inline-flex items-center text-white justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-red-600 text-red-600-foreground hover:bg-red-700 h-10 px-4 py-2 mr-2"
                    onClick={() => deleteTodo(index)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
