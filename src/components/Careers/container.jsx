import React from "react";
import Hero from "./atoms/Hero";
import WhyJoinUs from "./atoms/WhyJoinUs";
import Positions from "./atoms/Positions";
import InIt from "./atoms/InIt";
import ConnectedBusiness from "./atoms/ConnectedBusiness";
import OpenRoles from "./atoms/OpenRoles";
import ApplicationProcess from "./atoms/ApplicationProcess";
import MailingList from "../Main/atoms/MailingList";

export default function CareersCon() {
  return (
    <div className="w-full h-[fixed] flex flex-col justify-start items-start overflow-hidden ">
      <Hero />
      <WhyJoinUs />
      <Positions />
      <InIt />
      <ConnectedBusiness />
      {/* <OpenRoles /> */}
      <ApplicationProcess />
      <MailingList />
    </div>
  );
}
