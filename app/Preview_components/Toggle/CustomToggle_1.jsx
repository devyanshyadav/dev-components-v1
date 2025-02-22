"use client";
import clsx from "clsx";
import React from "react";

const CustomToggle_1 = ({ hasToggle, setHasToggle }) => {
  const toggleSize = { width: 50, height: 22 };

  return (
    <>
      <label
        style={{
          width: toggleSize.width + "px",
          height: toggleSize.height + "px",
        }}
        htmlFor="toggleBox"
        className={clsx("p-1 relative grid items-center")}
      >
        <hr
          className={clsx(
            hasToggle ? "bg-cyan-400" : "bg-cyan-700",
            "w-full rounded-full border-none"
          )}
          style={{
            height: toggleSize.height + 50 + "%",
          }}
        />
        <input
          type="checkbox"
          className="opacity-0 peer absolute cursor-pointer inset-0"
          id="toggleBox"
          onChange={(e) => setHasToggle(e.target.checked)}
        />
        <div
          className={clsx(
            "h-full absolute bg-white aspect-square pointer-events-none transition-all duration-400 rounded-full"
          )}
          style={{
            transform: hasToggle
              ? "translateX(" + (toggleSize.width - toggleSize.height) + "px)"
              : "none",
          }}
        ></div>
      </label>
      <span className="text-white m-3 ">{hasToggle ? "ON" : "OFF"}</span>
    </>
  );
};

export default CustomToggle_1;
