import { PlusIcon } from "lucide-react";
import React, { ReactNode } from "react";

const AddEventBtn = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className=" bg-secondary rounded-full p-2"
      aria-description="Create new event"
    >
      <PlusIcon className="h-8 w-8 font-bold text-tangerine" />
    </div>
  );
};

export default AddEventBtn;
