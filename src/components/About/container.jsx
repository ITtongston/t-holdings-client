import React from "react";
import Hero from "./atoms/Hero";

import WeAre from "./atoms/We-Are";
import Mission from "./atoms/Mission";
import Philosophy from "./atoms/Philosophy";
import CoreValues from "./atoms/CoreValues";
import Culture from "./atoms/Culture";
import People from "./atoms/People";
import Connect from "../Main/atoms/Connect";
export default function container() {
  return (
    <div className="w-full h-[fixed] flex flex-col justify-start items-start overflow-hidden  ">
      <Hero />
      <WeAre />
      <Mission />
      <Philosophy />
      <CoreValues />
      <Culture />
      <People />
      <Connect />
    </div>
  );
}
