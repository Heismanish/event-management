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
      id: 123455,
      name: "Tech Conference 2024",
      description:
        "A conference bringing together tech enthusiasts from around the world to discuss the latest trends in technology.",
      deadline: "2024-07-01",
    },
    {
      id: 587542,
      name: "Art Expo 2024",
      description:
        "An exhibition showcasing contemporary art from emerging artists.",
      deadline: "2024-08-15",
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
