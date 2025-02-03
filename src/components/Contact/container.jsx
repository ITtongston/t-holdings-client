import React from "react";
import Hero from "./atoms/Hero";
import FormCon from "./atoms/FormCon";

export default function ContactCon() {
  return (
    <div className="w-full h-[fixed] flex flex-col justify-start items-start overflow-hidden ">
      <Hero />
      <FormCon />
    </div>
  );
}
