import React from "react";
import Div from "@/shared/containers/div";
import Hero from "./atoms/Hero";
import HomeTypist from "./atoms/HomeTypist";
import BusinessFlips from "./atoms/BusinessFlips";
import Explore from "./atoms/Explore";
import ClientsPartners from "./atoms/Clients&Partners";
import MailingList from "./atoms/MailingList";
import Connect from "./atoms/Connect";

export default function container() {
  return (
    <div className="w-full h-[fixed] flex flex-col justify-start items-start overflow-hidden ">
      <Hero />
      <HomeTypist />
      <BusinessFlips />
      <Explore />
      <ClientsPartners />
      <MailingList />
      <Connect />
    </div>
  );
}
