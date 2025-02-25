import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";

const RecentTransaction = () => {
  return (
    <div className="flex-1">
      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-[#F8FAFA] p-2 rounded-md flex items-center justify-between">
            <div className="flex gap-3 items-center">
              <div className="bg-[#E4F3EC] p-2 rounded-full">
                <TrendingUp className="text-green-500" />
              </div>

              <div>
                <h1 className="font-bold">Salary</h1>
                <p className="text-gray-500">2/22/2025</p>
              </div>
            </div>

            <h1 className="text-green-500">+Rp 5.000.000</h1>
          </div>
        </CardContent>

        <CardContent>
          <div className="flex items-center justify-between bg-[#F8FAFA] p-2 rounded-md">
            <div className="flex gap-3 items-center">
              <div className="bg-[#E4F3EC] p-2 rounded-full">
                <TrendingDown className="text-red-500" />
              </div>

              <div>
                <h1 className="font-bold">Internet Bill</h1>
                <p className="text-gray-500">2/19/2025</p>
              </div>
            </div>
            <h1 className="text-red-500">-Rp 350.000</h1>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RecentTransaction;
