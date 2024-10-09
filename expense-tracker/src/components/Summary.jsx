import React from "react";

function Summary({totalExpense}) {
  return (
    <div className="w-[50%] h-full p-12 flex flex-col gap-4 mt-12">
      <h1 className="font-bold text-4xl">Total Summary</h1>
      <div className="w-full rounded-xl p-4 bg-gray-200 flex items-center justify-between ">
        <div>
          <h1 className="text-lg font-semibold">Total Expense</h1>
        </div>
        <h1 className="text-xl font-bold">${totalExpense}</h1>
      </div>
      <div className="w-full rounded-xl p-4 bg-gray-200 flex items-center justify-between ">
        <div>
          <h1 className="text-lg font-semibold">Average Expense</h1>
        </div>
        <h1 className="text-xl font-bold">${totalExpense}</h1>
      </div>
      <div className="w-full rounded-xl p-4 bg-gray-200 flex items-center justify-between ">
        <div>
          <h1 className="text-lg font-semibold">Total Expense</h1>
        </div>
        <h1 className="text-xl font-bold">${totalExpense}</h1>
      </div>
    </div>
  );
}

export default Summary;
