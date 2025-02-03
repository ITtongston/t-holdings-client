import React from "react";
import Button from "@/shared/buttons/button";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

export default function BrochureCheckout() {
  return (
    <div className="w-full h-[fixed]  justify-center items-center p-2  flex flex-col gap-y-6 mb-[7rem] ">
      <span className="text-black font-bold text-3xl  font-heading  md:text-4xl  text-center  ">
        Checkout Our Brochures
      </span>
      <section className="  flex  flex-col gap-y-4 justify-start items0start   md:flex-row gap-x-6 ">
        <a href="/" download>
          <Button
            text={` IT Services Brochure`}
            icon={faDownload}
            className={` bg-background-light    rounded-xl   hover:bg-background-gold  
             
             w-[300px] h-[60px] border border-background-footer_black text-sm hover:border-none  `}
          />
        </a>

        <a href="/" download>
          <Button
            text={`  Data & Research  Services Brochure`}
            icon={faDownload}
            className={` bg-background-light    rounded-xl  hover:bg-background-gold 
            hover:border-none 
             w-[300px] h-[60px] border border-background-footer_black text-sm `}
          />
        </a>

        <a href="/" download>
          <Button
            text={`  Admin Services  Brochure`}
            icon={faDownload}
            className={` bg-background-light    rounded-xl  hover:bg-background-gold 
            hover:border-none 
             w-[300px] h-[60px] border border-background-footer_black text-sm  `}
          />
        </a>
      </section>
    </div>
  );
}
