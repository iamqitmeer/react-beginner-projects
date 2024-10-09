import React from "react";

function ExpenseList({ list }) {
  return (
    <div className="w-full rounded-xl p-4 bg-gray-200 flex items-center justify-between my-4">
      <div>
        <h1 className="text-lg font-semibold">{list.category}</h1>
        <p>{list.date}</p>
      </div>
      <h1 className="text-xl font-bold">${list.income}</h1>
    </div>
  );
}

export default ExpenseList;
