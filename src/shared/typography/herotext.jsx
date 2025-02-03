import React from "react";

export default function HeroText({ children }) {
  return (
    <div className="flex flex-row gap-x-2 justify-center items-center p-2  w-full h-[fixed] px-4  md:px-[5rem]">
      <section className="lined-divider     bg-gradient-to-b  from-background-danger to-background-gold h-[300px] w-[7px] rounded-full"></section>
      <section className="flex flex-col gap-y-4 justify-center items-start w-full h-[fixed] p-2 ">
        {children}
      </section>
    </div>
  );
}
