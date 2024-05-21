const TogglesInfo = [
  {
    title: "Custom Toggle",
    details: {
      description: "A custom toggle switch component with a smooth animation.",
      features: [
        "Displays a toggle switch with a circular knob",
        "Allows toggling between two states (on/off)",
        "Provides a smooth animation when toggling",
        "Includes a label to indicate the current state",
      ],
      props: [
        {
          propName: "hasToggle",
          propExample: "true",
          propDetail:
            "A boolean value representing the current state of the toggle switch.",
        },
        {
          propName: "setHasToggle",
          propExample: "setHasToggle",
          propDetail:
            "A function to update the hasToggle state when the toggle switch is clicked.",
        },
      ],
      doc_links: [],
      packages: [
        {
          pckg_name: "clsx",
          pckg_link: "https://www.npmjs.com/package/clsx",
        },
      ],
    },
    usage_code: `
      import CustomToggle from "@/app/dev_components/CustomToggle";
      import React, { useState } from "react";
      
      const page = () => {
        const [hasToggle, setHasToggle] = useState(false);
      
        return <CustomToggle hasToggle={hasToggle} setHasToggle={setHasToggle} />;
      };
      
      export default page;
            `,
    code: `
    import clsx from "clsx";
    import React from "react";
    
    const CustomToggle = ({ hasToggle, setHasToggle }) => {
      const toggleSize = { width: 50, height: 25 };
    
      return (
        <>
          <label
            style={{
              width: toggleSize.width + "px",
              height: toggleSize.height + "px",
            }}
            htmlFor="toggleBox"
            className={clsx(
              "p-1 rounded-full relative grid",
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
              className={clsx(
                "h-full absolute bg-white aspect-square pointer-events-none transition-all duration-400 rounded-full"
              )}
              style={{
                transform: hasToggle
                  ? "translateX(" +
                    (toggleSize.width - toggleSize.height) +
                    "px) scale(0.7)"
                  : "scale(0.7)",
              }}
            ></div>
          </label>
          <span className="text-white m-3 ">{hasToggle ? "ON" : "OFF"}</span>
        </>
      );
    };
    
    export default CustomToggle;
    `,
  },
  {
    title: "Custom Toggle 1",
    details: {
      description:
        "A sleek custom toggle switch component with a smooth animation.",
      features: [
        "Displays a toggle switch with a circular knob",
        "Allows toggling between two states (on/off)",
        "Provides a smooth animation when toggling",
        "Includes a label to indicate the current state",
      ],
      props: [
        {
          propName: "hasToggle",
          propExample: "true",
          propDetail:
            "A boolean value representing the current state of the toggle switch.",
        },
        {
          propName: "setHasToggle",
          propExample: "setHasToggle",
          propDetail:
            "A function to update the hasToggle state when the toggle switch is clicked.",
        },
      ],
      doc_links: [],
      packages: [
        {
          pckg_name: "clsx",
          pckg_link: "https://www.npmjs.com/package/clsx",
        },
      ],
    },
    usage_code: `
      import CustomToggle from "@/app/dev_components/CustomToggle";
      import React, { useState } from "react";
      
      const page = () => {
        const [hasToggle, setHasToggle] = useState(false);
      
        return <CustomToggle hasToggle={hasToggle} setHasToggle={setHasToggle} />;
      };
      
      export default page;
            `,
    code: `
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
    `,
  },
  {
    title: "Custom Toggle 2",
    details: {
      description:
        "A custom toggle switch component with a smooth animation of dark and light mode with justified icons.",
      features: [
        "Displays a toggle switch with a circular knob",
        "Icons for dark and light mode",
        "Allows toggling between two states (on/off)",
        "Provides a smooth animation when toggling",
        "Includes a label to indicate the current state",
      ],
      props: [
        {
          propName: "hasToggle",
          propExample: "true",
          propDetail:
            "A boolean value representing the current state of the toggle switch.",
        },
        {
          propName: "setHasToggle",
          propExample: "setHasToggle",
          propDetail:
            "A function to update the hasToggle state when the toggle switch is clicked.",
        },
      ],
      doc_links: [],
      packages: [
        {
          pckg_name: "clsx",
          pckg_link: "https://www.npmjs.com/package/clsx",
        },
        {
          pckg_name: "react-icons",
          pckg_link: "https://www.npmjs.com/package/react-icons",
        },
      ],
    },
    usage_code: `
      import CustomToggle from "@/app/dev_components/CustomToggle";
      import React, { useState } from "react";
      
      const page = () => {
        const [hasToggle, setHasToggle] = useState(false);
      
        return <CustomToggle hasToggle={hasToggle} setHasToggle={setHasToggle} />;
      };
      
      export default page;
            `,
    code: `
    import clsx from "clsx";
    import React from "react";
    import { MdWbSunny } from "react-icons/md";
    import { IoMdMoon } from "react-icons/io";
    
    const CustomToggle_2 = ({ hasToggle, setHasToggle }) => {
      const toggleSize = { width: 50, height: 25 };
      return (
        <>
          <label
            style={{
              width: toggleSize.width + "px",
              height: toggleSize.height + "px",
            }}
            htmlFor="toggleBox"
            className={clsx(
              "p-1 rounded-full relative grid",
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
              className={clsx(
                "h-full absolute text-cyan-700 text-xl grid place-items-center bg-white aspect-square pointer-events-none transition-all duration-400 rounded-full"
              )}
              style={{
                transform: hasToggle
                  ? "translateX(" +
                    (toggleSize.width - toggleSize.height) +
                    "px) scale(0.7)"
                  : "scale(0.7)",
              }}
            >
              {hasToggle ? <MdWbSunny /> : <IoMdMoon />}
            </div>
          </label>
          <span className="text-white m-3 ">{hasToggle ? "ON" : "OFF"}</span>
        </>
      );
    };
    
    export default CustomToggle_2;
     `,
  },
];

export default TogglesInfo;
