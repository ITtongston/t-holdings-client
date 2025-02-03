import React from "react";
import Image from "next/image";

export default function Culture() {
  return (
    <div className="w-full h-[fixed]  bg-background-light flex flex-col gap-y-5 justify-center items-center mb-[80px] ">
      <section className="heading-container container w-full h-[fixed]">
        <h1 className="text-black font-bold text-3xl  font-heading  md:text-4xl  text-center ">
          Our Culture
        </h1>
      </section>
      <section className="hover-cards-toggler-section w-full   md:w-[90%] mx-auto  h-[fixed]  grid grid-cols-1  md:grid-cols-3 justify-center items-center  p-2    ">
        <div className="first-section w-full h-[fixed] group   relative overflow-hidden h=fixed] col-span-3 ">
          <Image
            src={`/assets/images/about/culture1.png`}
            priority
            alt="item-1"
            width={500}
            height={500}
            className="w-full   h-[300px] object-cover"
          />
          <div
            className="absolute    flex flex-col gap-y-3   opacity-0  transform duration-700   top-0 left-0 z-10 w-full h-[350px]  px-4   justify-center items-center bg-black bg-opacity-50
          group-hover:scale-x-110 group-hover:opacity-100 group-hover:transform group-hover:duration-700 
          "
          >
            <span className="text-white font-bold font-heading text-xl  md:text-2xl text-center">
              Learning & Innovation
            </span>
            <p className="text-white font-body text-base  md:text-lg text-center px-6   md:w-[90%] ">
              We continuously learn internally and externally to progressively
              improve the work we and the impact we envision.
            </p>
          </div>
        </div>
        <div className="second-section  grid grid-cols-1   h-[fixed]    md:grid-cols-3 justify-center items-center  w-full  col-span-3  ">
          <section className="section-1 w-full h-[fixed] relative group overflow-hidden">
            <Image
              src={`/assets/images/about/culture2.png`}
              priority
              alt="item-2"
              width={500}
              height={500}
              className="w-[400px]   h-[600px] object-cover"
            />
            <div
              className="absolute    flex flex-col gap-y-3   opacity-0  transform duration-700   top-0 left-0 z-10 w-full h-[600px]  px-4   justify-center items-center bg-black bg-opacity-50
          group-hover:scale-x-110 group-hover:opacity-100 group-hover:transform group-hover:duration-700 
          "
            >
              <span className="text-white font-bold font-heading text-xl  md:text-2xl text-center">
                Autonomy & Collaboration
              </span>
              <p className="text-white font-body text-base  md:text-lg text-center px-6   md:w-[90%] ">
                We encourage a respectable flat/non-hierarchial leadership
                management and ownership of our tasks-driven workflow.
              </p>
            </div>
          </section>
          <section className="section-2  flex flex-col w-full h-[fixed]">
            <div className="card-1 relative group w-full h-[300px] overflow-hidden">
              <Image
                src={`/assets/images/about/culture3.png`}
                priority
                alt="item-3"
                width={500}
                height={500}
                className="w-full   h-[300px] object-cover"
              />
              <div
                className="absolute    flex flex-col gap-y-3   opacity-0  transform duration-700   top-0 left-0 z-10 w-full h-[300px]  px-4   justify-center items-center bg-black bg-opacity-50
                group-hover:scale-x-110 group-hover:opacity-100 group-hover:transform group-hover:duration"
              >
                <span className="text-white font-bold font-heading text-xl  md:text-2xl text-center">
                  Dynamism & Diversity
                </span>
                <p className="text-white font-body text-base  md:text-lg text-center px-6   md:w-[90%] ">
                  We work with young, diverse and resourceful talent seeking the
                  right environment that appreciates their unique abilities.
                </p>
              </div>
            </div>

            <div className="card-1 relative group w-full h-[300px] overflow-hidden">
              <Image
                src={`/assets/images/about/culture4.png`}
                priority
                alt="item-3"
                width={500}
                height={500}
                className="w-full   h-[300px] object-cover"
              />
              <div
                className="absolute    flex flex-col gap-y-3   opacity-0  transform duration-700   top-0 left-0 z-10 w-full h-[300px]  px-4   justify-center items-center bg-black bg-opacity-50
                group-hover:scale-x-110 group-hover:opacity-100 group-hover:transform group-hover:duration"
              >
                <span className="text-white font-bold font-heading text-xl  md:text-2xl text-center">
                  Corporate & Semi-Formal
                </span>
                <p className="text-white font-body text-base  md:text-lg text-center px-6   md:w-[90%] ">
                  We Strongly abide by industry and regulates standards,
                  policies and practice while appearing casual.
                </p>
              </div>
            </div>
          </section>

          <section className="section-3 w-full h-[fixed] relative group overflow-hidden">
            <Image
              src={`/assets/images/about/culture5.png`}
              priority
              alt="item-2"
              width={500}
              height={500}
              className="w-[400px]   h-[600px] object-cover"
            />
            <div
              className="absolute    flex flex-col gap-y-3   opacity-0  transform duration-700   top-0 left-0 z-10 w-full h-[600px]  px-4   justify-center items-center bg-black bg-opacity-50
          group-hover:scale-x-110 group-hover:opacity-100 group-hover:transform group-hover:duration-700 
          "
            >
              <span className="text-white font-bold font-heading text-xl  md:text-2xl text-center">
                Ambition & Hard Work
              </span>
              <p className="text-white font-body text-base  md:text-lg text-center px-6   md:w-[90%] ">
                We think outside the box and set the bar high towards achieving
                our goals & objectives.
              </p>
            </div>
          </section>
        </div>
        <div className="third-section w-full h-[fixed] group   relative overflow-hidden h=fixed] col-span-3 ">
          <Image
            src={`/assets/images/about/culture6.png`}
            priority
            alt="item-1"
            width={500}
            height={500}
            className="w-full   h-[300px] object-cover"
          />
          <div
            className="absolute    flex flex-col gap-y-3   opacity-0  transform duration-700   top-0 left-0 z-10 w-full h-[350px]  px-4   justify-center items-center bg-black bg-opacity-50
          group-hover:scale-x-110 group-hover:opacity-100 group-hover:transform group-hover:duration-700 
          "
          >
            <span className="text-white font-bold font-heading text-xl  md:text-2xl text-center">
              intrapreneurship & Entrepreneurship
            </span>
            <p className="text-white font-body text-base  md:text-lg text-center px-6   md:w-[90%] ">
              We accommodate both intrapreneurship and entrepreneurship ideas/
              projects/ventures of our teams.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
