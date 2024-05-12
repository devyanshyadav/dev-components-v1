const RadiosInfo = [
  {
    title: "Base Radio",
    details: {
      description:
        "A simple radio button component that allows users to select an option from a list of options.",
      features: [
        "Displays a list of radio button options",
        "Allows users to select one option from the list",
        "Provides visual feedback for the selected option",
        "Logs the selected option to the console",
      ],
      props: [
        {
          propName: "radioStatus",
          propExample: '[0, "Male"]',
          propDetail:
            "An array containing the index of the selected option and the corresponding option text.",
        },
        {
          propName: "setRadioStatus",
          propExample: "setRadioStatus",
          propDetail:
            "A function to update the radioStatus state with the selected option.",
        },
        {
          propName: "radioOptions",
          propExample: "['Male', 'Female', 'Other']",
          propDetail:
            "An array of strings representing the available radio button options.",
        },
      ],
      packages: [],
      usage_code: `import React, { useState } from "react";
      import BaseRadio from "@/app/dev_components/Radio/BaseRadio";
      
      const page = () => {
        const [radioValue, setRadioValue] = useState("Male");
        return (
          <BaseRadio
          radioValue={radioValue}
          setRadioValue={setRadioValue}
          radioOptions={["Male", "Female", "Other"]}
        />
        );
      };
      
      export default page;
      
      `,
    },
    code: `
    import React from "react";
    
    const BaseRadio = ({ radioValue, setRadioValue, radioOptions }) => {
      return (
        <div className=" space-y-2 bg-cyan-700/20 p-3 rounded-md">
          {radioOptions.map((item, index) => (
            <div className="flex gap-2 items-center text-white text-sm">
              <span className="relative overflow-hidden border border-accent-400  rounded-full bg-white w-4 text-cyan-400 aspect-square place-content-center cursor-pointer grid place-items-center">
                {item.toLowerCase() === radioValue.toLocaleLowerCase() && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    wnameth="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      fillOpacity={0}
                      stroke="currentColor"
                      strokeDasharray={60}
                      strokeDashoffset={60}
                      strokeLinecap="round"
                      strokeWnameth={2.8}
                      d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"
                    >
                      <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        dur="0.2s"
                        values="60;0"
                      ></animate>
                      <animate
                        fill="freeze"
                        attributeName="fill-opacity"
                        begin="0.2s"
                        dur="0.15s"
                        values="0;1"
                      ></animate>
                    </path>
                  </svg>
                )}
                <input
                  className="absolute inset-0 cursor-pointer opacity-0 "
                  type="radio"
                  name="base-radio"
                  id={item}
                  value={item}
                  onChange={(e) => setRadioValue(e.target.value)}
                />
              </span>
              <label className="select-none" htmlFor={item} key={index}>
                {item}
              </label>
            </div>
          ))}
        </div>
      );
    };
    
    export default BaseRadio;
    `,
  },
];

export default RadiosInfo;
