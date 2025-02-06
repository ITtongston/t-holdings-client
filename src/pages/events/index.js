import EventsCon from "@/components/Innovations/containers/EventsCon";
import Footer from "@/components/Navigations/Footer";
import Navbar from "@/components/Navigations/nav1";
import React from "react";

const index = () => {
  return (
    <div className="w-full h-[fixed]  bg-background-light ">
      {/* render container with atoms  */}
      <Navbar />
      <EventsCon />
      <Footer />
    </div>
  );
};

export default index;
