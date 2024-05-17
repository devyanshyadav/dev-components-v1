const RangeSliderInfo = [
  {
    title: "Custom Range Slider",
    details: {
      description:
        "A range slider component that allows users to select a value within a specific range.",
      features: [
        "Displays a range slider with a handle",
        "Allows users to adjust the slider value by dragging the handle",
        "Provides visual feedback for the current slider value",
        "Supports customization of the slider range and step size",
      ],
      props: [
        {
          propName: "rangeValue",
          propExample: "30",
          propDetail: "The current value of the range slider.",
        },
        {
          propName: "setRangeValue",
          propExample: "setRangeValue",
          propDetail:
            "A function to update the rangeValue state when the slider value changes.",
        },
      ],
      packages: [],
    },
    usage_code: `
    import CustomRangeSlider from "@/app/dev_components/CustomRangeSlider";
    import React from "react";
    
    const page = () => {
      const [rangeValue, setRangeValue] = useState(30);
      return (
        <CustomRangeSlider rangeValue={rangeValue} setRangeValue={setRangeValue} />
      );
    };
    
    export default page;
    `,
    code: `
    import React from "react";
    
    function CustomRangeSlider({ rangeValue, setRangeValue }) {
      return (
        <div className=" max-w-md w-full bg-cyan-700/20 p-3 rounded-md">
          <div className="flex justify-between items-center">
            <h2 className="text-cyan-400 select-none font-semibold text-sm">
              Width
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
            className="w-full accent-cyan-500 hover:[&::-webkit-slider-thumb]:shadow-[0_0_0_6px_rgba(9,153,153,0.20)] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer "
            value={rangeValue}
            onChange={(e) => setRangeValue(e.target.value)}
          />
        </div>
      );
    }
    
    export default CustomRangeSlider;
    
        `,
  },
  {
    title: "Custom Range Slider 1 (Modern)",
    details: {
      description:
        "A customizable range slider component for selecting numerical values.",
      features: [
        "Displays a range slider for numerical input",
        "Allows users to select a value by dragging the slider thumb",
        "Provides visual feedback for the selected value",
        "Customizable appearance and behavior",
      ],
      props: [
        {
          propName: "rangeValue",
          propExample: "30",
          propDetail: "The current value of the range slider.",
        },
        {
          propName: "setRangeValue",
          propExample: "setRangeValue",
          propDetail:
            "A function to update the rangeValue state when the slider is moved.",
        },
        {
          propName: "height",
          propExample: '"30px"',
          propDetail: "The height of the slider track.",
        },
        {
          propName: "width",
          propExample: '"100%"',
          propDetail: "The width of the slider track.",
        },
      ],
      packages: [],
    },

    usage_code: `
    import CustomRangeSlider_1 from "@/app/dev_components/CustomRangeSlider_1";
    import React from "react";
    
    const page = () => {
      const [rangeValue, setRangeValue] = useState(30);
      return (
        <div className="flex flex-col gap-1 w-full items-center justify-center">
        <CustomRangeSlider_1
          rangeValue={rangeValue}
          setRangeValue={setRangeValue}
          height="30px"
        />
        <CustomRangeSlider_1
          rangeValue={rangeValue}
          setRangeValue={setRangeValue}
          height="25px"
        />
        <CustomRangeSlider_1
          rangeValue={rangeValue}
          setRangeValue={setRangeValue}
          height="15px"
        />
      </div>
      );
    };
    
    export default page;
    `,
    code: `
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
              Width
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
              min="20"
              max="120"
              value={rangeValue}
              onChange={(e) => setRangeValue(e.target.value)}
              step="1"
            />
          </div>
        </div>
      );
    };
    
    export default CustomRangeSlider_1;
    `,
  },
];

export default RangeSliderInfo;
