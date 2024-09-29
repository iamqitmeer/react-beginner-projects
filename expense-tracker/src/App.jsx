import { DatePicker, Input, Select, SelectItem } from "@nextui-org/react";
import { useEffect, useState } from "react";

export default function App() {
  let [expenseIncome, setExpenseIncome] = useState("");
  let [expenseCategory, setExpenseCategory] = useState("Food"); // Default value set
  let [expenseDate, setExpenseDate] = useState(null);
  let [totalExpense, setTotalExpense] = useState(0);

  let [expenseList, setExpenseList] = useState([]);

  useEffect(() => {
    expenseList.reduce((acc, curr) => {
      return setTotalExpense(acc + curr.income);
    }, 0);
  }, [expenseList]);

  function handleAddExpenseBtn() {
    if (!expenseIncome || !expenseCategory || !expenseDate) {
      alert("Please fill all fields");
      return;
    }

    let expense = {
      income: expenseIncome,
      category: expenseCategory,
      date: expenseDate.toString(), // Converting date to a readable string format
    };

    setExpenseList([...expenseList, expense]);

    // Resetting the form
    setExpenseIncome("");
    setExpenseCategory("Food");
    setExpenseDate(null);
  }

  return (
    <div>
      <div>
        {/* Input for expense income */}
        <Input
          value={expenseIncome}
          onChange={(e) => setExpenseIncome(e.target.value)}
          type="number"
          label="Amount"
        />

        {/* DatePicker for expense date */}
        <DatePicker
          value={expenseDate}
          onChange={(date) => {
            console.log(date); // Check what date is being returned
            setExpenseDate(date);
          }}
          label="Birth date"
        />

        {/* Select for expense category */}
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

        <button className="bg-zinc-950 hover:bg-zinc-800" onClick={handleAddExpenseBtn}>Add Expense</button>
      </div>

      <h1>Recent Expenses</h1>

      <div>
        {expenseList.length > 0 &&
          expenseList.map((list, index) => {
            return (
              <div
                className="w-full rounded-xl p-4 bg-gray-200 flex items-center justify-between my-4"
                key={index}
              >
                <div>
                  <h1 className="text-lg font-semibold">{list.category}</h1>
                  <p>{list.date}</p>
                </div>
                <h1 className="text-lg font-semibold">${list.income}</h1>
              </div>
            );
          })}
      </div>
      <h1>Total Summary</h1>

      <div>

Total Expense - {totalExpense}

      </div>
    </div>
  );
}
