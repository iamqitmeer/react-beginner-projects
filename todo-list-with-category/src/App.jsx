import React from "react";
import CategoryModal from "./Components/CategoryModal";
import InputFunc from "./Components/Input";
import CategoryDropdown from "./Components/CategoryDropdown";
import PriorityDropdown from "./Components/PriorityDropdown";
import { Button } from "@nextui-org/button";
import TaskList from "./Components/TaskList";
import FilterbyCategory from "./Components/FilterbyCategory";
import AddTask from "./Components/AddTask";

export default function App() {
  return (
    <>
      <div className="flex items-center justify-center w-full h-screen">
        <AddTask />
        <div className="w-[550px]  overflow-y-scroll h-[470px] bg-green-200 m-4 p-8 rounded-xl shadow shadow-green-400">
          <h1 className="text-3xl mb-6 font-bold">Tasks</h1>
          <div>
            <div className="w-full my-5">
              <p className="text-[15px] ml-1 font-medium mb-1">
                Filter by Category
              </p>
              <FilterbyCategory />
            </div>
            <div className="flex flex-col gap-4">
              <TaskList />
              <TaskList />
              <TaskList />
              <TaskList />
              <TaskList />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
