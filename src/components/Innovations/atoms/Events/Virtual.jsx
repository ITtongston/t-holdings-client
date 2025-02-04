import EventsCard from "@/shared/cards/EventsCard";
import React from "react";

export default function Virtual() {
  const card_data = [
    {
      image: "/assets/images/backgrounds/TEES 2024 header (1).jpg",
      title: "Welcome to TES2026",
      description: "Learn Showcase Network",
      dumbtn: "Virtual",
      router_btn: "Register",

      date: "",
      time: "",
      location: "",
    },
  ];
  return (
    <div className="w-full h-[fixed] ">
      <EventsCard cards={card_data} className={``} mainClass={`invisible`} />
    </div>
  );
}
