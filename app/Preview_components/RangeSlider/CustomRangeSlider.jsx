"use client";
import React from "react";

function CustomRangeSlider({ rangeValue, setRangeValue }) {
  return (
    <div className=" max-w-md w-full bg-cyan-700/20 p-3 rounded-md">
      <div className="flex justify-between items-center">
        <h2 className="text-cyan-400 select-none font-semibold text-sm">
          Select Range
        </h2>
        <span className="border-cyan-400  rounded-md text-sm text-cyan-800 space-x-2 w-14 border bg-white flex px-2">
          <input
            type="number"
            className="w-full [&::-webkit-inner-spin-button]:hidden [&::-webkit-outer-spin-button]:hidden outline-none"
            value={rangeValue}
            onChange={(e) => setRangeValue(e.target.value)}
            min={0}
            max={100}
            step={1}
          />
          px
        </span>
      </div>
      <input
        type="range"
        min={0}
        max={100}
        step={1}
        className="w-full accent-cyan-500 
    [&::-moz-range-thumb]:cursor-pointer
    [&::-moz-range-thumb]:shadow-[0_0_0_6px_rgba(9,153,153,0.20)] 
        hover:[&::-webkit-slider-thumb]:shadow-[0_0_0_6px_rgba(9,153,153,0.20)] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer "
        value={rangeValue}
        onChange={(e) => setRangeValue(e.target.value)}
      />
    </div>
  );
}

export default CustomRangeSlider;
