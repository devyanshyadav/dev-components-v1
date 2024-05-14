let hasToggle = true;
let toggleSize = "w-12 h-6";
let LabelCss_0 = `${
  hasToggle ? "bg-cyan-400" : "bg-cyan-700"
} ${toggleSize} p-1 rounded-full relative grid `;

let CircleCss_0 = `h-full  bg-white aspect-square pointer-events-none transition-all duration-400 rounded-full ${
  hasToggle ? "justify-self-end scale-100" : "justify-self-start scale-90"
}`;
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
      packages: [],
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
    import React from "react";
    
    const CustomToggle = ({ hasToggle, setHasToggle }) => {
      const toggleSize = "w-12 h-6";
    
      return (
        <>
          <label
            htmlFor="toggleBox"
            className={
              (hasToggle ? "bg-cyan-400" : "bg-cyan-700") +
              " " +
              toggleSize +
              " p-1 rounded-full relative grid"
            }
          >
            <input
              type="checkbox"
              className="opacity-0 absolute cursor-pointer inset-0"
              id="toggleBox"
              onChange={(e) => setHasToggle(e.target.checked)}
            />
            <div
              className={
                "h-full bg-white aspect-square pointer-events-none transition-all duration-400 rounded-full " +
                (hasToggle
                  ? "justify-self-end scale-100"
                  : "justify-self-start scale-90")
              }
            ></div>
          </label>
          <span className="text-white mx-3">{hasToggle ? "ON" : "OFF"}</span>
        </>
      );
    };
    
    export default CustomToggle;
     `,
  },
];

export default TogglesInfo;
