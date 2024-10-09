import {
  Button,
  DatePicker,
  Input,
  Select,
  SelectItem,
} from "@nextui-org/react";
import React, { useState } from "react";

function ExpenseInputs({ onClick }) {
  let [expenseIncome, setExpenseIncome] = useState("");
  let [expenseCategory, setExpenseCategory] = useState("Food"); // Default value set
  let [expenseDate, setExpenseDate] = useState(null);

  function handleAddExpenseBtn() {
    onClick(
      expenseIncome,
      expenseCategory,
      expenseDate,
      setExpenseCategory,
      setExpenseDate,
      setExpenseIncome
    );
  }

  return (
    <div className="w-[50%] h-full p-12 flex flex-col gap-4 mt-12 ">
      <h1 className="font-bold text-4xl">Add Expenses</h1>
      <Input
        value={expenseIncome}
        onChange={(e) => setExpenseIncome(e.target.value)}
        type="number"
        label="Amount"
        placeholder="e.g. $100"
      />

      <DatePicker
        value={expenseDate}
        onChange={(date) => {
          setExpenseDate(date);
        }}
        label="Birth date"
      />

      <Select
        label="Favorite category"
        placeholder="Select a category"
        value={expenseCategory}
        onChange={(e) => setExpenseCategory(e.target.value)}
      >
        {["Food", "Entertainment", "Transport", "Utilities", "Other"].map(
          (category) => (
            <SelectItem key={category} value={category}>
              {category}
            </SelectItem>
          )
        )}
      </Select>

      <Button
        variant="shadow"
        color="default"
        className="bg-zinc-900 text-white text-lg py-6 font-semibold hover:bg-zinc-950 "
        onClick={handleAddExpenseBtn}
      >
        Add Expense
      </Button>
    </div>
  );
}

export default ExpenseInputs;
