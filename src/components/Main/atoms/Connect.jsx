import React from "react";
import SocialSwitch from "./ConnectSwitch";

export default function Connect() {
  return (
    <div
      className="w-full h-[550px] flex flex-col gap-y-8 justify-center items-center relative  "
      style={{
        backgroundImage: 'url("/assets/images/backgrounds/productBg.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        overflow: "hidden",
      }}
    >
      <div className="overlay absolute top-0 left-0 w-full h-[550px]  bg-black  bg-opacity-60  flex flex-col gap-y-5 justify-center items-center ">
        <section className="connect-text">
          <span className="text-white font-bold text-3xl  font-heading  md:text-4xl  text-center ">
            Connect with Us
          </span>
        </section>
        <SocialSwitch />
      </div>
    </div>
  );
}
