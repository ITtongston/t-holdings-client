import React from "react";
import BizCards from "./bizcards";

export default function BusinessFlips() {
  return (
    <div className="w-full h-[fixed] bg-background-gold  py-4   flex flex-col gap-y-5 justify-center items-center  mb-[80px] p-2 ">
      <div className="container flex flex-col gap-y-3 justify-center items-center w-full h-[fixed] mt-8 ">
        <span className="text-black font-bold text-3xl  font-heading  md:text-4xl  text-center ">
          Our Business
        </span>
        <p className="text-black font-body font-normal   text-lg  md:text-xl ">
          Spans across 5 segments
        </p>
      </div>
      <BizCards />
    </div>
  );
}
