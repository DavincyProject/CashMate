import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const SavingGoals = () => {
  return (
    <section className="flex-1">
      <Card>
        <CardHeader>
          <CardTitle>Saving Goals</CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <div className="flex justify-between items-center">
              <h1 className="font-bold">New Laptop</h1>
              <h4 className="font-semibold">53%</h4>
            </div>
            <p>Due December 2024</p>
            <Progress value={53} />
            <div className="flex justify-between items-center">
              <h1 className="font-bold">Rp 8.000.000</h1>
              <h4 className="text-gray-500 font-semibold">Rp 15.000.000</h4>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default SavingGoals;
