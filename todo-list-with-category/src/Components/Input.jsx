import React from "react";
import { Input } from "@nextui-org/react";

export default function InputFunc({ value }) {
  let handleChange = (e) => {
    value(e.target.value);
  };

  return (
    <Input
      type="text"
      placeholder="Enter a new task"
      onChange={(e) => handleChange(e)}
      className="w-full"
    />
  );
}
