import React from "react";
import Typewriter from "typewriter-effect";

export default function TypeWriter({
  strings = [],
  textStyle = "text-lg  px-4   md:text-xl font-bold text-black font-body text-center",
  wrapperStyle = "flex items-center justify-center mx-auto relative",
  cursorStyle = "",
  options = {},
}) {
  return (
    <div className={wrapperStyle}>
      <div className={textStyle}>
        <Typewriter
          options={{
            strings: strings.length
              ? strings
              : ["This is a reusable TypeWriter component!"],
            autoStart: true,
            loop: true,
            cursor: "", // Hide default cursor
            delay: 50, // Typing speed
            deleteSpeed: 30, // Speed when deleting
            ...options, // Allow overriding default options
          }}
        />
        {/* Custom Cursor */}
        <div className={cursorStyle}></div>
      </div>
    </div>
  );
}
