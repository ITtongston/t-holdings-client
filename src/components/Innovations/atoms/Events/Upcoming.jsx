import React from "react";
import EventTabs from "./EventTab";

export default function Upcoming() {
  return (
    <div className="flex flex-col gap-y-[1rem] justify-center items-start w-full h-[fixed] px-4   ">
      <span className="font-bold font-heading  text-3xl md:text-4xl text-black  md:w-[70%]  md:ml-[3rem] ">
        UPCOMING
      </span>
      <EventTabs />
    </div>
  );
}
