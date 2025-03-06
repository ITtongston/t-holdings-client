import HoldCon from "@/components/Business/containers/holdcon";
import Footer from "@/components/Navigations/Footer";
import Navbar from "@/components/Navigations/nav1";
import React from "react";

const index = () => {
  return (
    <div className="w-full h-[fixed]  bg-background-light fade ">
      {/* render container with atoms  */}
      <Navbar />
      <HoldCon />
      <Footer />
    </div>
  );
};

export default index;
