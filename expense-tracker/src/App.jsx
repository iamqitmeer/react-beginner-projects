import { useEffect, useState } from "react";
import ExpenseList from "./components/ExpenseList";
import Summary from "./components/Summary";
import ExpenseInputs from "./components/ExpenseInputs";

export default function App() {
  let [totalExpense, setTotalExpense] = useState(0);
  let [expenseList, setExpenseList] = useState([]);

  useEffect(() => {
    expenseList.reduce((acc, curr) => {
      return setTotalExpense(acc + curr.income);
    }, 0);
  }, [expenseList]);

  function handleAddExpenseBtn(
    expenseIncome,
    expenseCategory,
    expenseDate,
    setExpenseCategory,
    setExpenseDate,
    setExpenseIncome
  ) {
    if (!expenseIncome || !expenseCategory || !expenseDate) {
      alert("Please fill all fields");
      return;
    }

    let expense = {
      income: Number.parseInt(expenseIncome),
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
      <div className="w-full h-[500px] flex items-center border flex-wrap">
        <ExpenseInputs onClick={handleAddExpenseBtn} />

        <Summary totalExpense={totalExpense} />
      </div>

      <div className="h-full p-12 flex flex-col gap-4 mt-12">
        <h1 className="font-bold text-4xl">Total Summary</h1>

        <div>
          {expenseList.length > 0 &&
            expenseList.map((list, index) => {
              return <ExpenseList list={list} key={index} />;
            })}
        </div>
      </div>
    </div>
  );
}
