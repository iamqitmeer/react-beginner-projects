import React from "react";
import { Select, SelectItem } from "@nextui-org/react";

function CategoryDropdown() {

  const categories = [
    {
      id: 1,
      name: "Work",
    },
    {
      id: 2,
      name: "Personal",
    },
    {
      id: 3,
      name: "Shopping",
    },
  ];

  return (
    <Select
      placeholder="Select an animal"
      selectionMode="multiple"
      className="w-full"
    >
      {categories.map((category) => (
        <SelectItem className="text-[12px]" key={category.id}>
          {category.name}
        </SelectItem>
      ))}
    </Select>
  );
}
export default CategoryDropdown;
