import Image from "next/image";
import React from "react";

export default function ConnectedBusiness() {
  return (
    <div
      className="w-full left-0 right-0  h-[600px] bg-background-light flex flex-col gap-y-5 justify-center items-center self-center  "
      style={{
        background: `url("/assets/images/career/carreerbg5.png")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        overflow: "hidden",
      }}
    >
      {" "}
      <section className="title-container w-full flex justify-center items-center text-center pt-5 ">
        {" "}
        <h1 className="text-white font-bold text-3xl  font-heading  md:text-4xl  text-center ">
          Our Interconnected Businesses
        </h1>
      </section>
      <section className="image-connected-section w-full h-[fixed] flex justify-center items-center self-center">
        <Image
          priority
          alt="interconnected-business"
          width={500}
          height={500}
          src={`/assets/images/career/armstongston.png`}
          className="object-cover    "
        />
      </section>
    </div>
  );
}
