import React from "react";
import MailingList from "@/components/Main/atoms/MailingList";
import Hero from "../atoms/Insights/Hero";
import Highlights from "../atoms/Insights/Highlights";

export default function InsightsCon() {
  return (
    <div className="w-full h-[fixed] flex flex-col justify-start items-start overflow-hidden ">
      <Hero />
      <Highlights />
      <MailingList />
    </div>
  );
}
