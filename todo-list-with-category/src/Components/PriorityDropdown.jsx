import React from "react";
import { Select, SelectItem } from "@nextui-org/react";

function PriorityDropdown() {
  const priorityLevels = [
    { id: 1, name: "Low", color: "#00FF00" }, // Green
    { id: 2, name: "Medium", color: "#FFFF00" }, // Yellow
    { id: 3, name: "High", color: "#FF0000" }, // Red
  ];

  return (
    <Select
      isRequired
      placeholder="Select an animal"
      defaultSelectedKeys={["cat"]}
      className="w-full"
    >
      {priorityLevels.map((priority) => (
        <SelectItem key={priority.id}>{priority.name}</SelectItem>
      ))}
    </Select>
  );
}

export default PriorityDropdown;
