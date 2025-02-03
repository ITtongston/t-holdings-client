import React from "react";
import Image from "next/image";
import Button from "@/shared/buttons/button";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

export default function ApplicationProcess() {
  return (
    <div
      className="w-full  h-[500px]  md:h-[600px] flex flex-col gap-y-8  justify-center items-center self-center "
      style={{
        background: `url("/assets/images/career/AppimgBg.png")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {" "}
      <section className="title-container w-full flex justify-center items-center text-center pt-5 ">
        {" "}
        <h1 className="text-black font-bold text-xl  font-heading  md:text-3xl  text-center ">
          Application Process
        </h1>
      </section>
      <section className="image-connected-section w-full h-[fixed] flex justify-center items-center self-center">
        <Image
          priority
          alt="application-process"
          width={700}
          height={700}
          src={`/assets/images/career/AppImg.png`}
          className="object-cover   w-auto h-auto px-4"
        />
      </section>
      <section className="download-section w-full h-[fixed] flex justify-center items-center self-center">
        <a href="" download>
          {" "}
          <Button
            text={`Documentation`}
            icon={faDownload}
            className={` bg-background-gold rounded-lg  text-black w-[200px] hover:bg-background-light hover:border hover:border-background-footer_black `}
          />
        </a>
      </section>
    </div>
  );
}
