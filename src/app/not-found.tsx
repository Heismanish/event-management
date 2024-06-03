import Link from "next/link";
import React from "react";

const Error = () => {
  return (
    <div className="flex min-h-screen justify-center items-center">
      <Link
        href={"/"}
        className="p-2 rounded-lg bg-secondary border hover:border-black hover:bg-secondary/30 duration-500 transition"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default Error;
