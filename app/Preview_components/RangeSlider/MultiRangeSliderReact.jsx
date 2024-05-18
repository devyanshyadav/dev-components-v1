"use client";
import React, { useEffect, useState } from "react";
import MultiRangeSlider from "multi-range-slider-react";
import styled from "styled-components";

const RangeDiv = styled.div`
  .multi-range-slider .thumb .caption * {
    background-color: #0e7490 !important;
    box-shadow: inset 0px 0px 5px transparent !important;
    border-radius: 8px !important;
  }
  .multi-range-slider .bar-left,
  .multi-range-slider .bar-right {
    box-shadow: inset 0px 0px 5px transparent !important;

    // The height of the range container
    height: 20px !important;
  }
  .multi-range-slider .bar-inner {
    box-shadow: inset 0px 0px 5px transparent !important;
    border: none !important;
  }
  .multi-range-slider .thumb {
    border: 2px solid #22d3ee !important;
    margin-top: 5.9px !important;
  }
  .multi-range-slider .thumb::before {
    box-shadow: inset 0px 0px 5px transparent !important;
    border: 2px solid #22d3ee !important;
    height: 20px !important;
    width: 20px !important;

    // the position of the thumb needs to be adjusted while height of the container changes
    margin-left: -9px !important;
  }
`;
function MultiRangeSliderReact({
  minValue,
  maxValue,
  set_minValue,
  set_maxValue,
}) {
  const handleInput = (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    mounted && (
      <div className=" max-w-md w-full bg-cyan-700/20 p-3 rounded-md">
        <div className="flex justify-between items-center">
          <h2 className="text-cyan-400 select-none font-semibold text-sm">
            Filter by Price
          </h2>
          <pre className="border-cyan-400  text-white rounded-md text-sm  space-x-2 border bg-cyan-700/50 flex px-2">
            <p>
              Rs.
              {minValue} - Rs.{maxValue}
            </p>
          </pre>
        </div>

        <RangeDiv className="w-full">
          <MultiRangeSlider
            preventWheel={false}
            baseClassName="multi-range-slider"
            minCaption={`Rs. ${minValue}`}
            maxCaption={`Rs. ${maxValue}`}
            ruler={false}
            label={false}
            barLeftColor="#0E7490"
            barInnerColor="#22D3EE"
            barRightColor="#0E7490"
            thumbLeftColor="#0E7490"
            thumbRightColor="#0E7490"
            className="bg-transparent !border-0 !shadow-none"
            min={0}
            max={100}
            step={5}
            minValue={minValue}
            maxValue={maxValue}
            onInput={(e) => {
              handleInput(e);
            }}
          />
        </RangeDiv>
      </div>
    )
  );
}

export default MultiRangeSliderReact;
