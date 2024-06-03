import React, { ReactNode } from "react";

const ButtonWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <button
      type="submit"
      className=" mx-auto inline-flex h-12 items-center  justify-center rounded-lg bg-gray-900 px-6 font-medium text-white text-lg focus:ring-4 hover:bg-gray-700"
    >
      {children}
    </button>
  );
};

export default ButtonWrapper;
