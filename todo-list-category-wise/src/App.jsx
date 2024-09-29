import { useState } from "react";

function App() {
  let [todoValue, setTodoValue] = useState("");
  let [priorityValue, setPriorityValue] = useState("");
  let [todoList, setTodoList] = useState([]);
  let [categoryList, setCategoryList] = useState([]);
  let [categoryValue, setCategoryValue] = useState("");
  let [categorySelectedValue, setSelectedCategoryValue] = useState("");

  function handleClick() {
    let createObj = {
      title: todoValue,
      priorityLevel: priorityValue,
      category: categorySelectedValue,
    };

    console.log(createObj);

    let cloneArr = [...todoList];
    cloneArr.push(createObj);
    setTodoList(cloneArr);

    setTodoValue("");
  }

  let handleDeleteBtn = (index) => {
    let cloneArr = [...todoList];
    cloneArr.splice(index, 1);
    setTodoList(cloneArr);
  };
  let handleEditBtn = (index) => {
    console.log(index);
  };

  let handleAddCategoryBtn = () => {
    let cloneArr = [...categoryList];
    cloneArr.push(categoryValue);
    setCategoryList(cloneArr);

    setCategoryValue("");
  };

  return (
    <>
      <div>
        <input
          value={todoValue}
          onChange={(e) => setTodoValue(e.target.value)}
          type="text"
          placeholder="Enter Todo Item Here."
        />
        <span>Priority Level: </span>
        <select
          onChange={(e) => setPriorityValue(e.target.value)}
          value={priorityValue}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <span>Category: </span>
        <select
          onChange={(e) => setSelectedCategoryValue(e.target.value)}
          value={categorySelectedValue}
        >
          {categoryList.map((ctgory) => {
            return <option value={ctgory}>{ctgory}</option>;
          })}
        </select>
        <button onClick={handleClick}>Add</button>
        <ul>
          {todoList.map((item, index) => {
            return (
              <li key={index}>
                {item.title}
                <span>{item.priorityLevel}</span>
                <span>{item.category}</span>
                <button onClick={() => handleDeleteBtn(index)}>Delete</button>
                <button onClick={() => handleEditBtn(index)}>Edit</button>
              </li>
            );
          })}
        </ul>
      </div>

      <div>
        <input
          value={categoryValue}
          onChange={(e) => setCategoryValue(e.target.value)}
          type="text"
          placeholder="Enter Category"
        />
        <button onClick={handleAddCategoryBtn}>Add Category</button>
      </div>
    </>
  );
}

export default App;
