import React from "react";
import { Input } from "@nextui-org/react";

export default function InputFunc() {
  return (
    <Input
      isClearable
      type="text"
      placeholder="Enter a new task"
      onClear={() => console.log("input cleared")}
      className="w-full"
    />
  );
}
