import { PlusIcon } from "lucide-react";
import React, { ReactNode } from "react";

const AddEventBtn = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className="flex flex-col justify-center items-center  bg-secondary  p-2"
      style={{ borderRadius: 1000000 }}
      aria-description="Create new event"
    >
      <PlusIcon className="h-8 w-8 font-bold text-tangerine" />
    </div>
  );
};

export default AddEventBtn;
