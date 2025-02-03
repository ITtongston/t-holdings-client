import React from "react";
import ResponsiveHero from "@/shared/containers/responsivehero"; // Adjust the path to where this component is saved
import TypeWriter from "@/shared/typography/typist";

export default function Hero() {
  return (
    <div className="w-full relative    overflow-hidden   flex  justify-center items-center">
      <ResponsiveHero
        background={`/assets/images/career/carreerbg2.png`}
        className={`h-[500px]  md:h-[500px]`}
      />
      <div className="overlay-bg absolute top-0 left-0 flex  gap-y-8 flex-col justify-center items-center  px-4 mx-auto  h-[700px] md:h-[550px] w-full bg-black bg-opacity-20">
        <section className="typewriter-container  flex flex-col w-full justify-center items-center  gap-y-5 h-[fixed]">
          <h3 className="text-white font-bold font-heading text-3xl  md:text-5xl">
            Dare To
          </h3>
          <TypeWriter
            strings={["Think", "Create", "& Sell Your Ideas"]}
            textStyle="text-xl  md:text-2xl px-3 font-heading text-yellow text-center  font-black"
            wrapperStyle=""
            cursorStyle=""
            options={{
              delay: 50,
              deleteSpeed: 40,
              loop: true,
            }}
          />
        </section>
      </div>
    </div>
  );
}
