import { useEffect, useState } from "react";
import ExpenseList from "./components/ExpenseList";
import Summary from "./components/Summary";
import ExpenseInputs from "./components/ExpenseInputs";

export default function App() {
  const [totalExpense, setTotalExpense] = useState(0);
  const [averageExpense, setAverageExpense] = useState(0);
  const [expenseCount, setExpenseCount] = useState(0);
  const [expenseList, setExpenseList] = useState([]);

  // Load expenses from Local Storage only on the initial mount
  useEffect(() => {
    const savedExpenses = localStorage.getItem("expenseList");
    if (savedExpenses) {
      try {
        const parsedExpenses = JSON.parse(savedExpenses);
        setExpenseList(parsedExpenses);
      } catch (error) {
        console.error("Failed to parse expenses from Local Storage", error);
      }
    }
  }, []); // Empty dependency array to run only once on mount

  // Calculate total, average, and count whenever expenseList changes
  useEffect(() => {
    const count = expenseList.length;
    setExpenseCount(count);

    if (count > 0) {
      const total = expenseList.reduce((acc, curr) => acc + curr.income, 0);
      setTotalExpense(total);

      const average = total / count;
      setAverageExpense(average);
    } else {
      setTotalExpense(0);
      setAverageExpense(0);
    }

    // Save updated expenseList to Local Storage
    localStorage.setItem("expenseList", JSON.stringify(expenseList));
  }, [expenseList]); // Runs whenever expenseList updates

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

    const expense = {
      income: Number.parseInt(expenseIncome, 10),
      category: expenseCategory,
      date: expenseDate.toString(),
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
        <Summary totalExpense={totalExpense} averageExpense={averageExpense} expenseCount={expenseCount} />
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
