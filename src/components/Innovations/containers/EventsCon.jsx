import MailingList from "@/components/Main/atoms/MailingList";
import React from "react";
import EHero from "../atoms/Events/Hero";
import Upcoming from "../atoms/Events/Upcoming";
import PastEvent from "../atoms/Events/PastEvent";

export default function EventsCon() {
  return (
    <div className="w-full h-[fixed] flex flex-col justify-start items-start overflow-hidden ">
      <EHero />
      <Upcoming />
      <PastEvent />
      <MailingList />
    </div>
  );
}
