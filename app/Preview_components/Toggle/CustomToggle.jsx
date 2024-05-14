"use client";
import clsx from "clsx";
import React from "react";

const CustomToggle = ({ hasToggle, setHasToggle }) => {
  const toggleSize = { width: 60, height: 25 };

  return (
    <>
      <label
        style={{
          width: toggleSize.width + "px",
          height: toggleSize.height + "px",
        }}
        htmlFor="toggleBox"
        className={clsx(
          "p-1 rounded-full relative grid outline outline-cyan-600",
          hasToggle ? "bg-cyan-400" : "bg-cyan-700"
        )}
      >
        <input
          type="checkbox"
          className="opacity-0 peer absolute cursor-pointer inset-0"
          id="toggleBox"
          onChange={(e) => setHasToggle(e.target.checked)}
        />
        <div
          className="h-full absolute  bg-white aspect-square pointer-events-none transition-all duration-400 rounded-full"
          style={{
            transform: hasToggle
              ? "translateX(" + (toggleSize.width - toggleSize.height) + "px)"
              : "none",
          }}
        ></div>
      </label>
      <span className="text-white mx-3">{hasToggle ? "ON" : "OFF"}</span>
    </>
  );
};

export default CustomToggle;
