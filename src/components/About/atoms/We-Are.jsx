import React from "react";
import Image from "next/image";

export default function WeAre() {
  const content = [
    {
      heading: "Who We Are",
      body: (
        <>
          <span className="text-black text-base font-body text-justify md:text-lg">
            We build valuable, profitable and influential people, governments,
            businesses & non-profits.
            <br />
            Tongston is a multi-award winning group focused on entrepreneurial
            education, enterprise, finance and media leveraging on technology
            for people, government and institutions to drive global sustainable
            socio-economic development.
          </span>
        </>
      ),
    },
  ];
  return (
    <div className="w-full h-[fixed]  mb-[80px] flex flex-col gap-y-5 justify-start  items-start ">
      <div className=" w-full grid grid-cols-1 gap-y-6 justify-center items-center  md:grid-cols-2 gap-x-[2rem]">
        <section className="content-container container flex flx-col gap-y-4 justify-start items-center md:ml-[4rem] ">
          {content.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-7-4 justify-start items-start p-1 px-6 gap-y-7 "
            >
              <span className="text-black font-heading font-bold text-back   text-3xl  md:text-4xl">
                {item.heading}
              </span>
              <h2 className="text-lg  md:text-xl text-balance">{item.body}</h2>
            </div>
          ))}
        </section>

        <section className="ceo-image-section  flex justify-center items-center  w-full h-[fixed] ">
          <Image
            priority
            src="/assets/images/teams/team1.png"
            alt="Bello-Tongo"
            width={600}
            height={600}
            className="rounded-full w-[300px] h-[300px]  md:w-[400px] md:h-[400px] object-cover"
          />
        </section>
      </div>
    </div>
  );
}
