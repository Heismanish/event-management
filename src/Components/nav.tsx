import Link from "next/link";
import React from "react";
import ButtonWrapper from "./AddEventBtn";

const Nav = ({}) => {
  return (
    <div className=" flex gap-6 w-full text-secondarytext font-[500] justify-center p-2">
      <Link href={"/"} className="">
        <ButtonWrapper>Create Event</ButtonWrapper>
      </Link>
      <Link href={"/events"}>
        <ButtonWrapper>Events</ButtonWrapper>
      </Link>
    </div>
  );
};

export default Nav;
