const DropdownsInfo = [
  {
    title: "Custom Dropdown",
    details: {
      description:
        "A customizable dropdown component for selecting options from a list.",
      features: [
        "Displays a dropdown with a list of options",
        "Allows users to select an option from the list",
        "Provides visual feedback for the selected option",
        "Customizable appearance and behavior",
      ],
      props: [
        {
          propName: "dropDownValue",
          propExample: `"Lion"`,
          propDetail: "The current value of the selected option.",
        },
        {
          propName: "setDropDownValue",
          propExample: `setDropDownValue`,
          propDetail:
            "A function to update the dropDownValue state when an option is selected.",
        },
        {
          propName: "Options",
          propExample: `["Lion", "Elephant", "Tiger", "Cow", "Goat", "Horse"]`,
          propDetail: "An array of options to display in the dropdown.",
        },
      ],
      packages: [],
    },

    usage_code: `
      import CustomDropdown from "@/app/dev_components/CustomDropdown";
      import React, { useState } from "react";
      
      const page = () => {
        const [dropDownValue, setDropDownValue] = useState("Lion");
        const Options = ["Lion", "Elephant", "Tiger", "Cow", "Goat", "Horse"];
      
        return (
        <div className="bg-cyan-700/20 text-center space-y-3 p-5 rounded-lg min-w-full md:min-w-40 grid place-content-center">
            <CustomDropdown
              setDropDownValue={setDropDownValue}
              dropDownValue={dropDownValue}
              Options={Options}
            />
          </div>
        );
      };
      
      export default page;
      `,
    code: `import React from "react";

      const CustomDropdown = ({ setDropDownValue, dropDownValue, Options }) => {
        return (
          <>
            <label htmlFor="drop-down" className="relative ">
              <select
                name="drop-down"
                id="drop-down"
                className="p-1 px-8 rounded-lg cursor-pointer appearance-none focus:outline-none focus:border-cyan-400 border-2 border-cyan-700  outline-cyan-400 bg-slate-700 text-white"
                onChange={(e) => setDropDownValue(e.target.value)}
              >
                {Options.map((elem, i) => (
                  <option
                    selected={dropDownValue == elem}
                    value={elem}
                    key={i}
                    className="text-white"
                  >
                    {elem}
                  </option>
                ))}
              </select>
              <svg
                className="text-white absolute pointer-events-none top-1/2 right-2 -translate-y-1/2"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 16a1 1 0 0 1-.64-.23l-6-5a1 1 0 1 1 1.28-1.54L12 13.71l5.36-4.32a1 1 0 0 1 1.41.15a1 1 0 0 1-.14 1.46l-6 4.83A1 1 0 0 1 12 16"
                ></path>
              </svg>
            </label>
            <span className="text-white">{dropDownValue}</span>
          </>
        );
      };
      
      export default CustomDropdown;
      `,
  },
];

export default DropdownsInfo;
