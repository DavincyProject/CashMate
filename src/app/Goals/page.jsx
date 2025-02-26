import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import AddGoals from "@/components/goals/AddGoals";

const Page = () => {
  return (
    <main>
      <div className="flex justify-between items-center">
        <h1 className="text-base md:text-2xl font-bold">Financial Goals</h1>
        <Dialog>
          <DialogTrigger className="bg-[#1F2937] text-white py-1 px-2 rounded-md hover:bg-[#111827]">
            + Add Goal
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="font-bold">Create New Goal</DialogTitle>
              {/* Menggunakan div sebagai pengganti DialogDescription */}
              <div className="text-sm text-muted-foreground">
                <div className="my-3">
                  <AddGoals />
                </div>
              </div>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </main>
  );
};

export default Page;
