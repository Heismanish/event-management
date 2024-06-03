"use client";
import { useListContext } from "@/Components/Context";
import { EventType } from "@/types/dummData";
import React, { useEffect, useState } from "react";

interface EventProps {
  params: {
    id: string;
  };
}

const Event: React.FC<EventProps> = ({ params: { id } }) => {
  const { list } = useListContext();
  const [event, setEvent] = useState<EventType | undefined>();

  useEffect(() => {
    const foundEvent = list.find(
      (event: EventType) => event.id === parseInt(id)
    );
    console.log(foundEvent);
    setEvent(foundEvent);
  }, [id, list]);

  if (!event) {
    return <div className="p-4">Event not found</div>;
  }

  return (
    <div className="mx-auto flex flex-col items-start p-4 w-screen h-screen max-w-[720px]">
      <header className="flex justify-between w-full items-center">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-tangerine to-[#d73901]  text-transparent bg-clip-text  ">
          {event.name}
        </h1>
        <p>
          <span className="text-gray-700 font-bold">Deadline:</span>
          <span className="font-semibold text-sm text-secondarytext">
            {" " + event.deadline}
          </span>
        </p>
      </header>
      <p className="mt-2 text-lg">{event.description}</p>
    </div>
  );
};

export default Event;
