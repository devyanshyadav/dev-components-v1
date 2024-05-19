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
      const toggleSize = { width: 50, height: 20 };
    
      return (
        <>
          <label
            style={{
              width: toggleSize.width + "px",
              height: toggleSize.height + "px",
            }}
            htmlFor="toggleBox"
            className={clsx(
              "p-1 rounded-full relative grid outline outline-cyan-600",
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
                "h-full absolute border-4 bg-white aspect-square pointer-events-none transition-all duration-400 rounded-full",
                hasToggle ? "border-cyan-400" : "border-cyan-700"
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
    
    export default CustomToggle;
    `,
  },
];

export default TogglesInfo;
