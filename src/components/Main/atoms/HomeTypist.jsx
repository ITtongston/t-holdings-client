import React from "react";
import TypeWriter from "@/shared/typography/typist";

export default function HomeTypist() {
  return (
    <div className=" flex items-center  justify-center mx-auto  mb-[80px]">
      <TypeWriter
        strings={[
          "We are Tongston Group",
          "We Make People, Institutions & Government",
          "Valuable, Influential & Profitable",
          "Through Entrepreneurial Education, Enterprise, Media & Finance",
          "Led By Our 5 Integrated Businesses",
          "To Drive Personal, Professional & Public Development Globally",
        ]}
        textStyle="text-lg  md:text-xl px-3 font-body text-black text-center  font-bold"
        wrapperStyle=""
        cursorStyle=""
        options={{
          delay: 50,
          deleteSpeed: 40,
          loop: true,
        }}
      />
    </div>
  );
}
