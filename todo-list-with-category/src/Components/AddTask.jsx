import React, { useContext, useState } from "react";
import InputFunc from "./Input";
import CategoryDropdown from "./CategoryDropdown";
import PriorityDropdown from "./PriorityDropdown";
import { Button } from "@nextui-org/react";
import { ListContext } from "../context/ListContext";

function AddTask() {
  let [taskValue, setTaskValue] = useState("");
  let [taskPriorityLevel, setTaskPriorityLevel] = useState("");
  let [taskCategory, setTaskCategory] = useState("");

  let { list, setList } = useContext(ListContext);
  console.log(list);

  let handleAddTodo = () => {
    console.log(taskValue);
    console.log(taskCategory);
    console.log(taskPriorityLevel);

    // list.priorityLevel = taskPriorityLevel;
    // list.category = taskCategory;
    // list.todoValue = taskValue;

    setList((prevList) => {
    //   let newObj = { ...prevList };
      prevList.priorityLevel = taskPriorityLevel;
      prevList.todoValue = taskValue;
      prevList.category = taskCategory;
      prevList.id = 1;
      prevList.isEdited = false;
      prevList.isMarkAsDone = false;
    });

    console.log(list);

    

};

  let priorityData = (value) => {
    setTaskPriorityLevel(value);
  };

  let category = (value) => {
    setTaskCategory(value);
  };

  let taskTitle = (value) => {
    setTaskValue(value);
    console.log(value);
  };

  return (
    <div className="py-12 px-6 bg-gray-300 rounded-xl w-[450px]">
      <h1 className="text-3xl mb-6 font-bold">Add Task</h1>
      <div className="flex items-center justify-center flex-col gap-4 ">
        <div className="w-full">
          <p className="text-[15px] ml-1 font-medium mb-1">Task</p>
          <InputFunc value={taskTitle} />
        </div>

        <div className="w-full">
          <p className="text-[15px] ml-1 font-medium mb-1">Category</p>
          <CategoryDropdown onClick={category} />
        </div>

        <div className="w-full">
          <p className="text-[15px] ml-1 font-medium mb-1">Priority</p>
          <PriorityDropdown onClick={priorityData} />
        </div>

        <Button
          onClick={handleAddTodo}
          className="w-full my-4"
          color="primary"
          variant="shadow"
        >
          Add Todo
        </Button>
      </div>
    </div>
  );
}

export default AddTask;
