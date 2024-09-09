import React, { useState } from "react";
import { Select, SelectItem } from "@nextui-org/react";

function CategoryDropdown({ onClick }) {
  const [selectedCategory, setSelectedCategory] = useState(null);

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

  const handleChange = (e) => {
    setSelectedCategory(categories[e.target.value - 1].name);
    onClick(categories[e.target.value - 1].name)
  };


  return (
    <Select
      placeholder="Select Category"
      onChange={handleChange}
      className="w-full"
    >
      {categories.map((category) => (
        <SelectItem
          key={category.id}
          value={category.name}
          className="text-[12px]"
        >
          {category.name}
        </SelectItem>
      ))}
    </Select>
  );
}

export default CategoryDropdown;
