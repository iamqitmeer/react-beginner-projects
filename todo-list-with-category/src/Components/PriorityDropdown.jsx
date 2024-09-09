import React from "react";
import { Select, SelectItem } from "@nextui-org/react";

function PriorityDropdown({ onClick }) {
  const priorityLevels = [
    { id: 1, name: "Low", color: "#00FF00" }, // Green
    { id: 2, name: "Medium", color: "#FFFF00" }, // Yellow
    { id: 3, name: "High", color: "#FF0000" }, // Red
  ];

  let handleSelectedPriorityLevel = (e) => {
    onClick(priorityLevels[e.target.value - 1].name)
  };

  return (
    <Select
      placeholder="Select Priority Level"
      defaultSelectedKeys={priorityLevels[0].name}
      className="w-full"
      onChange={(e) => handleSelectedPriorityLevel(e)}
    >
      {priorityLevels.map((priority) => (
        <SelectItem key={priority.id}>{priority.name}</SelectItem>
      ))}
    </Select>
  );
}

export default PriorityDropdown;
