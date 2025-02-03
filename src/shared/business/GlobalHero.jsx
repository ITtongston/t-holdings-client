import React from "react";
import Image from "next/image";

export default function GlobalHero({
  heroColor,
  items = [],
  className,
  textColor,
  visibleClass,
  imageClass,
}) {
  return (
    <div
      className={`w-full      h-[fixed]        md:h-[450px]  flex flex-col justify-center  items-start   `}
    >
      {items.map((contents, index) => (
        <div
          key={index}
          className={` ${className} w-full h-[fixed]  grid grid-cols-1  md:grid-cols-2 `}
        >
          <div
            className="contents-container  w-full h-[450px] flex flex-col gap-y-5 justify-center items-start  px-4  order-2  md:order-none"
            style={{
              backgroundColor: heroColor,
            }}
          >
            <section
              className={`lined-text w-[200px] border-t-2 border-t-background-danger  ml-4    ${visibleClass}`}
            >
              <p className="text-red font-heading font-bold text-lg  md:text-xl ">
                Industry Focus
              </p>
            </section>
            <section
              className="contents-section-text flex flex-col gap-y-5 justify-start  items-start px-4  w-full h-[fixed]"
              style={{
                color: textColor,
              }}
            >
              <span className="font-heading font-bold text-3xl  md:text-4xl  ">
                {contents.heading}
              </span>
              <p className="font-body text-lg  md:text-xl font-normal ">
                {contents.description}
              </p>
            </section>
          </div>
          <div
            className={`image-container  w-full h-[450px]  order-1 md:order-none   ${imageClass}`}
          >
            <Image
              priority
              src={contents.img}
              width={800}
              height={800}
              className={` object-cover  w-full h-full   `}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
