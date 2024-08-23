import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  let [blogTitle, setBlogTitle] = useState([]);
  let [blogContent, setBlogContent] = useState([]);

  function handleClick() {
    let cloneArrTitle = [...blogTitle];
    cloneArrTitle.push(title);
    setBlogTitle(cloneArrTitle);

    let cloneArrContent = [...blogContent];
    cloneArrContent.push(content);
    setBlogContent(cloneArrContent);
  }

  console.log(title);
  console.log(content);

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-50">
      <div className="w-full max-w-[700px] p-6 bg-white rounded-lg shadow-lg">
        <div>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Blog Title"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="content"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              Content
            </label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              id="content"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write your blog post here"
              rows="6"
              required
            ></textarea>
          </div>
          <button
            onClick={handleClick}
            type="button"
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </div>
      </div>

{/* {blogTitle.map((title) => console.log(title);)} */}

    </div>
  );
};

export default App;
