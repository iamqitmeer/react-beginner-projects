import React, { useContext } from "react";
import { Checkbox } from "@nextui-org/react";
import { ListContext } from "../context/ListContext";

function TaskList() {

  return (
    <div className="flex items-center justify-between py-4 px-6 rounded-lg bg-white">
      <div>
        <Checkbox defaultSelected lineThrough>
          Option
        </Checkbox>
      </div>

      <div className="flex gap-2">
        <i className="ri-delete-bin-6-fill text-2xl font-medium cursor-pointer bg-green-300 hover:bg-green-400 rounded-lg py-2 px-3"></i>
        <i className="ri-file-edit-fill text-2xl font-medium cursor-pointer bg-green-300 hover:bg-green-400 rounded-lg py-2 px-3"></i>
      </div>
    </div>
  );
}

export default TaskList;
