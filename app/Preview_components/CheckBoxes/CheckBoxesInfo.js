const CheckBoxesInfo = {
  base_checkbox: {
    title: "Base Checkbox",
    details: {
      description:
        "A simple checkbox component that allows users to toggle a boolean value.",
      features: [
        "Displays a checkbox with a label",
        "Allows users to toggle the checkbox state by clicking on it",
        "Provides visual feedback for the checked and unchecked states",
      ],
      props: [
        {
          propName: "checkStatus",
          propExample: "true",
          propDetail:
            "A boolean value representing the current state of the checkbox.",
        },
        {
          propName: "setCheckStatus",
          propExample: "setCheckStatus",
          propDetail:
            "A function to update the checkStatus state when the checkbox is toggled.",
        },
      ],
      packages: [],
      usage_code: `import DevCheckbox from "@/app/dev_components/DevCheckbox";
      import React, { useState } from "react";
      
      const page = () => {
        const [checkStatus, setCheckStatus] = useState(true);
        return (
          <DevCheckbox checkStatus={checkStatus} setCheckStatus={setCheckStatus} />
        );
      };
      
      export default page;
          `,
    },
    code: `
        import React from "react";
        
        const BaseCheckBox = ({ checkStatus, setCheckStatus }) => {
          return (
            <div
              onClick={() => setCheckStatus(!checkStatus)}
              className="flex gap-2 items-center justify-start cursor-pointer w-40"
            >
            <span
            id="dev-checkbox"
            className={
              "border-2 border-cyan-500 w-5 text-white aspect-square grid place-content-center rounded-md cursor-pointer" +
              (checkStatus ? " bg-cyan-500" : "bg-cyan-500/20")
            }
           >
                {checkStatus && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="0.9em"
                    height="0.9em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeDasharray={24}
                      strokeDashoffset={24}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.9}
                      d="M5 11L11 17L21 7"
                    >
                      <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        dur="0.3s"
                        values="24;0"
                      ></animate>
                    </path>
                  </svg>
                )}
              </span>
              <p className="text-white select-none">{checkStatus ? "Checked" : "Unchecked"}</p>
            </div>
          );
        };
        
        export default BaseCheckBox;
        
        `,
  },
};

export default CheckBoxesInfo;
