"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const AddGoals = () => {
  const [date, setDate] = useState();

  return (
    <div>
      <form className="space-y-4">
        <div className="flex flex-col items-start gap-2">
          <Label htmlFor="goal_name">Goal Name</Label>
          <Input
            type="goal_name"
            id="goal_name"
            placeholder="Enter goal name"
            className="mt-1"
          />
        </div>

        <div className="flex flex-col items-start gap-2">
          <Label htmlFor="target">Target Amount</Label>
          <Input
            type="target"
            id="target"
            placeholder="Enter target amount"
            className="mt-1"
          />
        </div>

        <div className="flex flex-col items-start gap-2">
          <Label htmlFor="category">Category</Label>
          <Select>
            <SelectTrigger className="w-full mt-1">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="testing 1">Testing 1</SelectItem>
              <SelectItem value="testing 2">Testing 2</SelectItem>
              <SelectItem value="testing 3">Testing 3</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col items-start gap-2">
          <Label htmlFor="category">Target Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  " justify-start text-left font-normal w-full",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="flex flex-col items-start gap-2">
          <Label htmlFor="amount">Monthly Contribution</Label>
          <Input
            type="amount"
            id="amount"
            placeholder="Enter monthly amount"
            className="mt-1"
          />
        </div>

        <div className="flex gap-2">
          <Button className="w-full">Create Goal</Button>
          <Button className="w-full bg-red-500 hover:bg-red-400">Cancel</Button>
        </div>
      </form>
    </div>
  );
};

export default AddGoals;
