"use client";
import React, { useEffect, useRef } from "react";

const CustomRangeSlider_1 = ({
  rangeValue,
  setRangeValue,
  height = "30px",
  width = "100%",
}) => {
  const thumbRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const updateThumbPosition = () => {
      const minValue = inputRef.current.min;
      const maxValue = inputRef.current.max;
      const valueRange = maxValue - minValue;
      const thumbPosition = (inputRef.current.value - minValue) / valueRange;
      const thumbWidth = thumbRef.current.offsetWidth;
      const trackWidth = inputRef.current.offsetWidth - thumbWidth;
      thumbRef.current.style.left = (thumbPosition * trackWidth) + "px";
    };

    updateThumbPosition();
    const inputElement = inputRef.current;
    inputElement.addEventListener("input", updateThumbPosition);

    return () => {
      inputElement.removeEventListener("input", updateThumbPosition);
    };
  }, [rangeValue]);

  return (
    <div className=" max-w-md w-full bg-cyan-700/20 p-3 rounded-md space-y-2">
      <div className="flex justify-between items-center">
        <h2 className="text-cyan-400 select-none font-semibold text-sm">
          Select Range
        </h2>
        <span className="border-cyan-400  rounded-md text-sm text-cyan-800 space-x-2 w-14 border bg-white flex px-2">
          <input
            type="text"
            inputMode="numeric"
            className="w-full [&::-webkit-inner-spin-button]:hidden [&::-moz-appearance]:textfield [&::-webkit-outer-spin-button]:hidden outline-none"
            value={rangeValue}
            onChange={(e) => setRangeValue(e.target.value)}
            min={0}
            max={100}
            step={1}
          />
          px
        </span>
      </div>

      <div
        style={{ height, width }}
        className="relative w-full grid place-items-center  border border-cyan-700 rounded-full overflow-hidden bg-cyan-700 group"
      >
        <button
          className="h-full aspect-square shadow-[-407px_0_0_400px] shadow-cyan-400 outline outline-cyan-400 scale-90 group-active:border-4 transition-[border] border-cyan-400 cursor-pointer border-2 bg-cyan-700 rounded-full absolute"
          ref={thumbRef}
        ></button>
        <input
          type="range"
          className="w-full absolute [&::-moz-range-thumb]:cursor-pointer opacity-0 h-6 [&::-webkit-slider-thumb]:scale-[2] [&::-webkit-slider-thumb]:cursor-pointer"
          ref={inputRef}
          min="0"
          max="100"
          value={rangeValue}
          onChange={(e) => setRangeValue(e.target.value)}
          step="1"
        />
      </div>
    </div>
  );
};

export default CustomRangeSlider_1;
