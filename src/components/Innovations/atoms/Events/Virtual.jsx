import EventsCard from "@/shared/cards/EventsCard";
import React from "react";

export default function Virtual() {
  const card_data = [
    {
      image: "/assets/images/backgrounds/TEES 2024 header (1).jpg",
      title: "Welcome to TEES 2025",
      description: "Attend TEES 2024 as a delegate and look forward to ...",
      dumbtn: "Virtual",
      router_btn: (
        <a href="" target="_blank">
          {" "}
          Register
        </a>
      ),
      date: "Nov 30th 2025",
      time: "9:00",
      location: "Zoom, Linkedin",
    },
  ];
  return (
    <div className="w-full h-[fixed] ">
      <EventsCard cards={card_data} className={``} mainClass={`invisible`} />
    </div>
  );
}
