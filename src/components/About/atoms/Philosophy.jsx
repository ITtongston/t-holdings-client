import React from "react";

export default function Philosophy() {
  return (
    <div
      className="w-full h-[600px] flex flex-col gap-y-4 justify-center items-center     p-2 mb-[80px] "
      style={{
        // backgroundImage: `url("/assets/images/backgrounds/aboutod6.png")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <section className="title-container flex justify-center center ">
        <span className="text-black font-bold text-3xl  font-heading  md:text-4xl  text-center ">
          Our Philosophy
        </span>
      </section>

      <section className="contents-container flex justify-center  items-center  bg-black bg-opacity-100 h-[400px]   w-full   md:w-[70%]  px-6">
        <h3 className="text-white font-body text-center text-lg md:text-xl font-bold  ">
          We believe that{" "}
          <span className="colored-text text-transparent  font-bold bg-gradient-to-br  bg-clip-text  from-background-gold   via-background-gold to-background-danger   ">
            {" "}
            Entrepreneurial Thinking{" "}
          </span>{" "}
          (Value, Influence & Profitability) should be at the heart of our
          personal, professional and public life in order to make the world a
          better place.
        </h3>
      </section>
    </div>
  );
}
