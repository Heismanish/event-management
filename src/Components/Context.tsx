"use client";
import { EventType } from "@/types/dummData";
import React, { ReactNode, SetStateAction } from "react";
import { createContext, useContext, useState } from "react";

interface ContextValue {
  list: EventType[];
  setList: React.Dispatch<React.SetStateAction<EventType[]>>;
}
export const ListContext = createContext<ContextValue | undefined>(undefined);

const Context = ({ children }: { children: ReactNode }) => {
  const [list, setList] = useState<EventType[]>([
    {
      id: 1,
      name: "Mogambo",
      deadline: "2024-07-20",
      description: "estors and industry experts.224-06-20",
    },
    {
      id: 3,
      name: "Startup Pitch Day",
      description:
        "An event where startups pitch their ideas to potential investors and industry experts.",
      deadline: "2024-06-20",
    },
  ]);

  return (
    <ListContext.Provider value={{ list, setList }}>
      {children}
    </ListContext.Provider>
  );
};
export function useListContext() {
  const ctx = useContext(ListContext);
  if (ctx === undefined) {
    throw new Error("Context is empty");
  }
  return ctx;
}
export default Context;
