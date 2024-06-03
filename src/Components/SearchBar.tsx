import React, { ChangeEvent, FormEvent } from "react";

interface SearchBarProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  deadlineFilteredEvent: string;
  setDeadlineFilteredEvent: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar = ({
  search,
  setSearch,
  deadlineFilteredEvent,
  setDeadlineFilteredEvent,
}: SearchBarProps) => {
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    console.log(value);
    setSearch(value);
  }

  function handleDeadlineChange(e: ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    console.log(value);
    setDeadlineFilteredEvent(value);
  }
  return (
    <div className="mx-auto mt-6 w-screen max-w-screen-md py-4 px-2 leading-6 flex gap-2 items-center">
      <form className="relative mx-auto flex w-full max-w-2xl items-center justify-between rounded-md border shadow-lg">
        <svg
          className="absolute left-2 block h-5 w-5 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle cx="11" cy="11" r="8" className=""></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65" className=""></line>
        </svg>
        <input
          type="text"
          name="search"
          value={search}
          onChange={handleChange}
          className="h-14 w-full rounded-md text-base py-2 pr-20  pl-12 outline-none focus:ring-2"
          placeholder="Search Event"
        />
        {/* <button

          type="submit"
          className="absolute right-0 mr-1 inline-flex h-12 items-center justify-center rounded-lg bg-gray-900 px-6 font-medium text-white text-lg focus:ring-4 hover:bg-gray-700"
        >
          Search
        </button> */}
      </form>
      <div className="inline-block">
        <input
          type="date"
          id="deadline"
          name="deadline"
          placeholder=""
          value={deadlineFilteredEvent}
          onChange={handleDeadlineChange}
          className="w-10 p-2 shadow-md  rounded-md"
        ></input>
      </div>
    </div>
  );
};

export default SearchBar;
