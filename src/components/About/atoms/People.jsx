import React from "react";
import TeamsTabs from "./TeamsTabs";

export default function People() {
  return (
    <div className="flex flex-col gap-y-10 justify-center items-center  bg-background-light  w-full  h-[fixed]">
      <section className="heading-section  w-full h-[fixed] flex justify-center items-center">
        <span className="text-black font-bold text-3xl  font-heading  md:text-4xl  text-center ">
          Our People
        </span>
      </section>
      <section className="tabs-section-teams w-full  h-[fixed] bg-background-light">
        <TeamsTabs />
      </section>
    </div>
  );
}
