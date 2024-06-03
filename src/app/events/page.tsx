"use client";
import ButtonWrapper from "@/Components/AddEventBtn";
import { useListContext } from "@/Components/Context";
import SearchBar from "@/Components/SearchBar";
import { dummy } from "@/lib/dummyData";
import { ArrowRight, Clock, WatchIcon } from "lucide-react";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";

const Events = () => {
  let { list } = useListContext();
  const [search, setSearch] = useState<string>("");
  const [filteredEvent, setFilteredEvent] = useState(list);
  const [deadlineFilteredEvent, setDeadlineFilteredEvent] =
    useState<string>("");

  useEffect(() => {
    const debounceSearch = setTimeout(() => {
      // setFilteredEvent(
      //   list.filter((event) =>
      //     event.name.toLowerCase().includes(search.toLowerCase())
      //   )
      // );

      let filteredList = list.filter((event) =>
        event.name.toLowerCase().includes(search.toLowerCase())
      );

      if (deadlineFilteredEvent) {
        filteredList = filteredList.filter((event) => {
          const eventDate = new Date(event.deadline);
          const deadlineDate = new Date(deadlineFilteredEvent);
          return eventDate <= deadlineDate;
        });
      }

      setFilteredEvent(filteredList);
    }, 600);

    return () => clearTimeout(debounceSearch);
  }, [search, list, deadlineFilteredEvent]);

  return (
    <div className=" flex flex-col items-center gap-3  font-[500] text-2xl">
      <h1 className="text-4xl font-bold pt-2 bg-gradient-to-r from-tangerine to-[#d73901] bg-clip-text text-transparent  ">
        Events
      </h1>
      <SearchBar
        setSearch={setSearch}
        search={search}
        setDeadlineFilteredEvent={setDeadlineFilteredEvent}
        deadlineFilteredEvent={deadlineFilteredEvent}
      />
      <Link href={"/"} className="">
        <ButtonWrapper>Create Event</ButtonWrapper>
      </Link>
      {/* <button
        onClick={handleFilterByDeadline}
        className="bg-tangerine text-white px-4 py-2 rounded-md hover:bg-[#df5330] transition-all duration-500"
      >
        {isFilteredByDeadline ? "Show All Events" : "Filter by Deadline"}
      </button> */}
      <main className="mx-6 flex flex-col gap-3  w-screen max-w-screen-md py-10 px-2 ">
        {filteredEvent.map((data) => (
          <div
            className="flex items-center justify-between gap-2 border-1 border-secondary shadow-md  bg-secondary  p-2 rounded-md py-6"
            key={data.id}
          >
            <div className="flex flex-col gap-2">
              <h1 className="text-lg font-semibold text-primary ">
                {data.name}
              </h1>
              <p className="text-secondarytext text-sm text-ellipsis ">
                {data.description}
              </p>
              <p className=" text-sm text-gray-800 flex items-center gap-2">
                <Clock className="h-4 w-4 font-bold inline" />
                {/* <span className="text-gray-900 font-bold"> </span>{" "}  */}
                {data.deadline}
              </p>
            </div>
            <Link href={`/events/${data.id}`} className="min-w-fit">
              <button className="bg-tangerine min-w-fit flex gap-1 justify-center items-center text-white text-sm font-semibold px-3 py-2  rounded-md hover:bg-[#df5330] transition-all duration-500 ">
                Go to{"  "}
                <ArrowRight className="h-4 w-4 " width={4} height={4} />
              </button>
            </Link>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Events;
