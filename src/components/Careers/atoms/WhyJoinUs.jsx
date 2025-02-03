import React from "react";

export default function WhyJoinUs() {
  return (
    <div className="w-full h-[600px] p-2 bg-background-gold flex justify-center items-center flex-col gap-y-8">
      <h1 className="text-black font-bold text-xl  font-heading  md:text-3xl  text-center ">
        Why Work With Us
      </h1>
      <section className="youtube-video-section w-full h-[400px] flex justify-center items-center  md:w-[90%]">
        <iframe
          src="https://www.youtube.com/embed/xWBw4tfw2fQ?si=MHhU-iwIK02E0reT"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          className="w-full h-[400px]     md:w-[90%]"
        ></iframe>
      </section>
    </div>
  );
}
