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
        const Options = ["Lion", "Elephant", "Tiger", "Horse"];
      
        return (
            <CustomDropdown
              setDropDownValue={setDropDownValue}
              dropDownValue={dropDownValue}
              Options={Options}
            />
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
  {
    title: "Custom Dropdown 1",
    details: {
      description:
        "A more customizable dropdown component for selecting options from a list.",
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
          propExample: `["Lion", "Elephant", "Tiger", "Horse"]`,
          propDetail: "An array of options to display in the dropdown.",
        },
      ],
      packages: [
        {
          pckg_name: "react-tooltip",
          pckg_link: "https://react-tooltip.netlify.app/",
        },
        {
          pckg_name: "clsx",
          pckg_link: "https://www.npmjs.com/package/clsx",
        },
      ],
    },

    usage_code: `
      import CustomDropdown_1 from "@/app/dev_components/CustomDropdown_1";
      import React, { useState } from "react";
      
      const page = () => {
        const [dropDownValue, setDropDownValue] = useState("Lion");
        const Options = ["Lion", "Elephant", "Tiger", "Cow", "Goat", "Horse"];
      
        return (
            <CustomDropdown_1
              setDropDownValue={setDropDownValue}
              dropDownValue={dropDownValue}
              Options={Options}
            />
        );
      };
      
      export default page;
      `,
    code: `
    import React, { useEffect, useState, useRef } from "react";
    import clsx from "clsx";
    import { Tooltip as DropDown } from "react-tooltip";
    
    const CustomDropDown_1 = ({ setDropDownValue, dropDownValue, Options }) => {
      const [calcWidth, setCalcWidth] = useState(0);
      const [mounted, setMounted] = useState(false);
      const dropdownRef = useRef(null);
      const buttonRef = useRef(null);
      useEffect(() => {
        if (buttonRef.current) {
          setCalcWidth(buttonRef.current.offsetWidth);
          console.log(buttonRef.current.offsetWidth, "width");
        }
      }, []);
    
      useEffect(() => {
        const handleClickOutside = (event) => {
          if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target) &&
            !buttonRef.current.contains(event.target)
          ) {
            setMounted(false);
          }
        };
    
        document.addEventListener("click", handleClickOutside, true);
    
        return () => {
          document.removeEventListener("click", handleClickOutside, true);
        };
      }, []);
    
      return (
        <div>
          {mounted && (
            <DropDown
              clickable={mounted ? true : false}
              events={["click"]}
              isOpen
              id="dev-dropdown"
              place="bottom"
              offset={2}
              style={{ backgroundColor: "transparent", padding: "0px" }}
            >
              <div
                className="flex z-10 shadow-md flex-col gap-1 bg-slate-700 rounded-md p-2 max-h-64 overflow-y-scroll [&::-webkit-scrollbar]:hidden [scrollbar-width:none]"
                style={{ width: calcWidth + "px" }}
                ref={dropdownRef}
              >
                {Options.map((elem, i) => (
                  <label
                    className={clsx(
                      "hover:bg-cyan-700 text-left rounded-lg p-1 overflow-hidden  px-2 cursor-pointer",
                      dropDownValue == elem && "bg-cyan-400"
                    )}
                    key={i}
                    htmlFor={elem}
                  >
                    {elem}
                    <input
                      onChange={(e) => {
                        setDropDownValue(e.target.value);
                        setMounted(false);
                      }}
                      type="radio"
                      id={elem}
                      name="drop-down"
                      value={elem}
                      className="opacity-0"
                    />
                  </label>
                ))}
              </div>
            </DropDown>
          )}
          <button
            onClick={() => setMounted(!mounted)}
            data-tooltip-id  ="dev-dropdown"
            className="min-w-40 transition-all flex items-center justify-between bg-slate-700 focus:border-cyan-400 border-cyan-700 text-white py-1 border rounded-md px-2"
            ref={buttonRef}
          >
            {dropDownValue}
            <svg
              className={clsx("text-lg transition-all", mounted && "rotate-180")}
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
          </button>
        </div>
      );
    };
    export default CustomDropDown_1;
    
    `,
  },
  {
    title: "Custom Dropdown using Framer Motion",
    details: {
      description:
        "A customizable dropdown component for selecting options from a list of options using Framer Motion.",
      features: [
        "Displays a dropdown with a list of options",
        "Allows users to select an option from the list",
        "Provides visual feedback for the selected option",
        "Customizable appearance and behavior",
        "Framer Motion for dropdown animation",
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
      packages: [
        {
          pckg_name: "react-tooltip",
          pckg_link: "https://react-tooltip.netlify.app/",
        },
        {
          pckg_name: "clsx",
          pckg_link: "https://www.npmjs.com/package/clsx",
        },
        {
          pckg_name: "framer-motion",
          pckg_link: "https://www.npmjs.com/package/framer-motion",
        },
      ],
    },

    usage_code: `
      import CustomDropdown from "@/app/dev_components/CustomDropdown";
      import React, { useState } from "react";
      
      const page = () => {
        const [dropDownValue, setDropDownValue] = useState("Lion");
        const Options = ["Lion", "Elephant", "Tiger", "Horse"];
      
        return (
            <CustomDropdown
              setDropDownValue={setDropDownValue}
              dropDownValue={dropDownValue}
              Options={Options}
            />
        );
      };
      
      export default page;
      `,
    code: `
    import React, { useEffect, useState, useRef } from "react";
    import clsx from "clsx";
    import { Tooltip as DropDown } from "react-tooltip";
    import { motion } from "framer-motion";
    
    const CustomDropDown_2 = ({ setDropDownValue, dropDownValue, Options }) => {
      const [calcWidth, setCalcWidth] = useState(0);
      const [mounted, setMounted] = useState(false);
      const dropdownRef = useRef(null);
      const buttonRef = useRef(null);
      useEffect(() => {
        if (buttonRef.current) {
          setCalcWidth(buttonRef.current.offsetWidth);
          console.log(buttonRef.current.offsetWidth, "width");
        }
      }, []);
    
      useEffect(() => {
        const handleClickOutside = (event) => {
          if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target) &&
            !buttonRef.current.contains(event.target)
          ) {
            setMounted(false);
          }
        };
    
        document.addEventListener("click", handleClickOutside, true);
    
        return () => {
          document.removeEventListener("click", handleClickOutside, true);
        };
      }, []);
    
      return (
        <div>
          {mounted && (
            <DropDown
              clickable={mounted ? true : false}
              events={["click"]}
              isOpen
              id="dev-dropdown-framer"
              place="bottom"
              offset={2}
              style={{ backgroundColor: "transparent", padding: "0px" }}
            >
              <motion.div
                initial={{ scaleY: 0.8 }}
                animate={{ scaleY: 1 }}
                exit={{ scaleY: 0.8 }}
                transition={{ duration: 0.2 }}
                className="flex z-10 origin-top shadow-md flex-col gap-1 bg-slate-700 rounded-xl p-2 max-h-64 overflow-y-scroll [&::-webkit-scrollbar]:hidden [scrollbar-width:none]"
                style={{ width: calcWidth + "px" }}
                ref={dropdownRef}
              >
                {Options.map((elem, i) => (
                  <label
                    className={clsx(
                      "hover:bg-cyan-700 text-left rounded-xl p-1 overflow-hidden px-2 cursor-pointer",
                      dropDownValue == elem && "bg-cyan-400"
                    )}
                    key={i}
                    htmlFor={elem}
                  >
                    {elem}
                    <input
                      onChange={(e) => {
                        setDropDownValue(e.target.value);
                        setMounted(false);
                      }}
                      type="radio"
                      id={elem}
                      name="drop-down"
                      value={elem}
                      className="opacity-0"
                    />
                  </label>
                ))}
              </motion.div>
            </DropDown>
          )}
          <button
            onClick={() => setMounted(!mounted)}
            data-tooltip-id="dev-dropdown-framer"
            className="min-w-40 transition-all flex items-center justify-between bg-slate-700 focus:border-cyan-400 border-cyan-700 text-white py-1 border rounded-xl px-2"
            ref={buttonRef}
          >
            {dropDownValue}
            <svg
              className={clsx("text-lg transition-all", mounted && "rotate-180")}
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
          </button>
        </div>
      );
    };
    export default CustomDropDown_2;
    
      `,
  },
];

export default DropdownsInfo;
