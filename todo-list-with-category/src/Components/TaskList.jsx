import React from "react";
import { Checkbox } from "@nextui-org/react";

function TaskList() {
  return (
    <div className="flex items-center justify-center">
        
      <Checkbox defaultSelected lineThrough>
        Option
      </Checkbox>

      
    </div>
  );
}

export default TaskList;
