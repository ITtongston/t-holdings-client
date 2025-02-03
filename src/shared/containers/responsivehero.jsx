import React from "react";

export default function ResponsiveHero({ background, hero_style, className }) {
  return (
    <div
      className={`w-full   zoom-effect  overflow-hidden  ${className}`}
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        ...hero_style,
      }}
    ></div>
  );
}
