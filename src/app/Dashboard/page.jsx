import React from "react";
import {
  Wallet,
  MoveUpRight,
  MoveDownRight,
  TrendingUp,
  TrendingDown,
} from "lucide-react";

import SavingGoals from "@/components/homepage/SavingGoals";
import RecentTransaction from "@/components/homepage/RecentTransaction";

const page = () => {
  return (
    <div className="w-full min-h-screen p-4">
      <h1 className="text-sm md:text-4xl font-bold mb-5">Hello, User!</h1>

      <div className="flex flex-wrap w-full gap-4">
        {/* Card 1 */}
        <div className="w-full md:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)] bg-white border border-gray-200 shadow-md rounded-lg p-4">
          <div className="flex justify-between items-center mb-4">
            <Wallet className="h-6 w-6" />
            <p className="text-gray-600">Total Balance</p>
          </div>
          <h1 className="text-2xl font-bold mb-4">Rp. 12.500.000</h1>
          <div className="flex gap-2 items-center">
            <MoveUpRight className="h-5 w-5 text-green-500" />
            <h6 className="text-sm">test</h6>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-full md:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)] bg-white border border-gray-200 shadow-md rounded-lg p-4">
          <div className="flex justify-between items-center mb-4">
            <TrendingUp className="h-6 w-6" />
            <p className="text-gray-600">Income</p>
          </div>
          <h1 className="text-2xl font-bold mb-4">Rp. 12.500.000</h1>
          <div className="flex gap-2 items-center">
            <MoveDownRight className="h-5 w-5 text-red-500" />
            <h6 className="text-sm ">test</h6>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-full md:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)] bg-white border border-gray-200 shadow-md rounded-lg p-4">
          <div className="flex justify-between items-center mb-4">
            <TrendingDown className="h-6 w-6" />
            <p className="text-gray-600">Expenses</p>
          </div>
          <h1 className="text-2xl font-bold mb-4">Rp. 12.500.000</h1>
          <div className="flex gap-2 items-center">
            <MoveUpRight className="h-5 w-5 text-green-500" />
            <h6 className="text-sm ">test</h6>
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-4">
        <SavingGoals />
        <RecentTransaction />
      </div>

      <div className="mt-6">Monthly Overview</div>
    </div>
  );
};

export default page;
