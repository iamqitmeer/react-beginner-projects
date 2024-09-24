import { DatePicker, Input, Select, SelectItem } from "@nextui-org/react";
import { useState } from "react";

export default function App() {
  let [expenseIncome, setExpenseIncome] = useState("");
  let [expenseCategory, setExpenseCategory] = useState("");
  let [expenseDate, setExpenseDate] = useState();

  let [expenseList, setExpenseList] = useState([]);

  function handleAddExpenseBtn() {
    if (!expenseIncome || !expenseCategory || !expenseDate) {
      alert("Plz Fill All Fields");
    }

    let expense = {
      income: expenseIncome,
      category: expenseCategory,
      date: expenseDate,
    };

    setExpenseList([...expenseList, expense]);

    expenseIncome("");
    setExpenseCategory("Food");
    setExpenseDate("");
  }

  return (
    <div>
      <div>
        <Input
          value={expenseIncome}
          onChange={(e) => {
            setExpenseIncome(e.target.value)            
          }}
          type="number"
          label="Amount"
        />

        <DatePicker
          value={expenseDate}
          onChange={(e) => console.log(e.target.value)}
          label="Birth date"
        />
        <Select
          label="Favorite Animal"
          placeholder="Select an animal"
          value={expenseCategory}
          onChange={(e) => setExpenseCategory(e.target.value)}
        >
          {["Food", "Entertainment", "Transport", "Utilities", "Other"].map(
            (category) => (
              <SelectItem>{category}</SelectItem>
            )
          )}
        </Select>
        {/* <select
          value={expenseCategory}
          onChange={(e) => setExpenseCategory(e.target.value)}
          name=""
          id=""
        >
          <option value="Food">Food</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Transport">Transport</option>
          <option value="Utilities">Utilities</option>
          <option value="Other">Other</option>
        </select> */}
        <button onClick={handleAddExpenseBtn}>Add Expense</button>
      </div>
      <div>
        {expenseList.length &&
          expenseList.map((list, index) => {
            return (
              <div key={index}>
                <h1>
                  {list.income} {list.date}
                </h1>
                <p>{list.category}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}
