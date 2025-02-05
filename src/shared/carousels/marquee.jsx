import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

export default function Marquees({
  headingData,
  marquees,
  speed = 40, // Default speed if not provided
  className,
  imageClass,
  className2,
}) {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-y-8">
      {/* Render marquees */}
      <div
        className={`flex flex-col gap-y-12 w-full px-4  pb-5  md:px-[4rem] lg:px-[7rem] justify-center items-center  gap-x-8  ${className2}`}
      >
        {marquees.map((marquee, index) => (
          <Marquee
            key={index}
            className="w-full   md:w-[70%] mx-auto h-[fixed] flex flex-row gap-x-8 justify-center items-center  "
            direction={marquee.direction || "left"} // Default to "left" if not provided
            speed={marquee.speed || speed} // Use passed speed or default speed
            pauseOnHover
          >
            {marquee.images.map((image, imgIndex) => (
              <div
                key={imgIndex}
                className="w-full  mx-auto    md:w-[70%] h-[fixed]  object-contain  items-center p-2"
              >
                <div
                  className={`w-full  mx-auto   md:w-[70%] flex justify-center items-center gap-x-[5rem]  ${className}`}
                >
                  <Image
                    src={image}
                    alt={`image-${imgIndex}`}
                    width={150}
                    height={100}
                    className={`max-w-[180px] h-[100px] object-contain ${imageClass}`}
                  />
                </div>
              </div>
            ))}
          </Marquee>
        ))}
      </div>
    </div>
  );
}
