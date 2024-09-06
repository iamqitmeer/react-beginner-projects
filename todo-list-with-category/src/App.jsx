import React from "react";
import CategoryModal from "./Components/CategoryModal";
import InputFunc from "./Components/Input";
import CategoryDropdown from "./Components/CategoryDropdown";
import PriorityDropdown from "./Components/PriorityDropdown";
import { Button } from "@nextui-org/button";
import TaskList from "./Components/TaskList";

export default function App() {
  return (
    <>
      <div className="flex items-center justify-center w-full h-screen">
        <div className="py-12 px-6 bg-gray-300 rounded-xl w-[450px]">
          <h1 className="text-3xl mb-6 font-bold">Add Task</h1>
          <div>
            <div className="w-full">
              <p className="text-[12px] font-medium mb-1">Task</p>
              <InputFunc />
            </div>

            <div className="w-full">
              <p className="text-[12px] font-medium mb-1">Category</p>
              <CategoryDropdown />
            </div>

            <div className="w-full">
              <p className="text-[12px] font-medium mb-1">Priority</p>
              <PriorityDropdown />
            </div>

            <Button className="w-full my-4" color="primary" variant="shadow">
              Shadow
            </Button>
          </div>
        </div>
        <div>
          <h1>Tasks</h1>
          <div>
            <div>
              <p>Filter by Category</p>
            </div>
            <div>
              <TaskList />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
