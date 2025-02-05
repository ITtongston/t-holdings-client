import React from "react";

export default function Hero() {
  return (
    <div className="w-full h-[300px]  bg-background-light flex flex-col gap-y-5 justify-center items-center self-center">
      <section className="texts-container flex flex-col gap-y-6 justify-center items-center  p-2">
        <h1 className="text-black font-bold text-3xl  font-heading  md:text-4xl  text-center ">
          Let's Get in Touch
        </h1>
        <p className="text-black font-body font-normal  text-center   text-lg  md:text-xl ">
          We're glad you are here! Share your details with us to get started
        </p>
      </section>
    </div>
  );
}
