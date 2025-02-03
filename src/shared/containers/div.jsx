import React from "react";

export default function Div({ children }) {
  return (
    <div className="flex flex-col gap-y-[100px]  w-full h-[fixed]  justify-start items-start overflow-hidden ">
      {children}
    </div>
  );
}
