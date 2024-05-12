const RangeSliderInfo = [
  {
    title: "Base Range Slider",
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
      usage_code: `
          import BaseRangeSlider from "@/app/dev_components/BaseRangeSlider";
          import React from "react";
          
          const page = () => {
            const [rangeValue, setRangeValue] = useState(30);
            return (
              <BaseRangeSlider rangeValue={rangeValue} setRangeValue={setRangeValue} />
            );
          };
          
          export default page;
          `,
    },
    code: `
    import React from "react";
    
    function BaseRangeSlider({ rangeValue, setRangeValue }) {
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
    
    export default BaseRangeSlider;
    
        `,
  },
];

export default RangeSliderInfo;
