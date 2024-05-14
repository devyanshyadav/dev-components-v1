"use client";
import React from "react";

const CustomToggle = ({ hasToggle, setHasToggle }) => {
  const toggleSize = "w-12 h-6";

  return (
    <>
      <label
        htmlFor="toggleBox"
        className={
          (hasToggle ? "bg-cyan-400" : "bg-cyan-700") +
          " " +
          toggleSize +
          " p-1 rounded-full relative grid"
        }
      >
        <input
          type="checkbox"
          className="opacity-0 absolute cursor-pointer inset-0"
          id="toggleBox"
          onChange={(e) => setHasToggle(e.target.checked)}
        />
        <div
          className={
            "h-full bg-white aspect-square pointer-events-none transition-all duration-400 rounded-full " +
            (hasToggle
              ? "justify-self-end scale-100"
              : "justify-self-start scale-90")
          }
        ></div>
      </label>
      <span className="text-white mx-3">{hasToggle ? "ON" : "OFF"}</span>
    </>
  );
};

export default CustomToggle;
