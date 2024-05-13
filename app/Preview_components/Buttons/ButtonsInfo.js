const ButtonsInfo = [
  {
    title: "Custom Button",
    details: {
      description: "A simple and customizable button component.",
      features: [
        "Renders a button with customizable content and props",
        "Provides default styles and hover/active effects",
        "Supports additional props for further customization",
      ],
      props: [
        {
          propName: "children",
          propExample: '"Custom Button"',
          propDetail:
            "The content to be displayed inside the button. If not provided, it defaults to 'Base Button'.",
        },
        {
          propName: "...props",
          propExample: `onClick={alert("This is Custom Button")}`,
          propDetail:
            "Additional props to be passed to the button element, such as onClick, disabled, etc.",
        },
      ],
      packages: [],
    },

    usage_code: `
      import BaseButton from "@/app/Preview_components/Buttons/BaseButton";
      import React from "react";
      
      const page = () => {
        return <BaseButton onClick={() => {alert("This is Custom Button")}}>Custom Button</BaseButton>;
      };
      
      export default page;
      
      `,

    code: `import React from "react";

      const BaseButton = ({ children = "Custom Button", ...props }) => {
        return (
          <button {...props} className="p-2 px-3 bg-cyan-500 select-none hover:bg-cyan-700 text-white rounded-xl font-semibold active:scale-95 transition-all">
            {children}
          </button>
        );
      };
      
      export default BaseButton;`,
  },
  {
    title: "Custom Async Button",
    details: {
      description:
        "Simulates async button behavior: fetches data, displays loading animation, updates button text for status.",
      features: [
        "Fetches data from a specified URL when clicked",
        "Displays a loading animation while the data is being fetched",
        "Updates the button text to indicate the status of the operation",
        "Handles errors gracefully",
      ],
      props: [
        {
          propName: "Fetching",
          propExample: `[false, "Submit"]`,
          propDetail:
            "This is an array containing a boolean value and a string value.",
        },
        {
          propName: "handleSubmit",
          propExample: `handleSubmit`,
          propDetail:
            "This is a function that is called when the button is clicked.",
        },
      ],
      packages: [],
    },
    usage_code: `
      import CustomAsyncBtn from "@/app/dev_components/CustomAsyncBtn";
      import React, { useState } from "react";
      
      const page = () => {
        const [Fetching, setFetching] = useState([false, "Submit"]);

        // Example to use async button by using fakestore api
        const Submitting = async () => {
          setFetching([true, "Submitting..."]);
          try {
            const res = await fetch("https://fakestoreapi.com/products")
              .then((res) => res.json())
              .then((json) => console.log(json));
            console.log("response: ", res, "fetching_status: ", Fetching);
            setTimeout(() => {
              setFetching([false, "Submitted"]);
            }, 2000);
          } catch (error) {
            setFetching([false, "Submit"]);
            console.log("error :", error, "fetching_status: ", Fetching);
          }
        };
        return <CustomAsyncBtn Fetching={Fetching} handleSubmit={handleSubmit} />;
      };
      
      export default page;
      `,
    code: `import React from "react";

    const CustomAsyncBtn = ({ Fetching, handleSubmit }) => {
      return (
        <button
          className="bg-cyan-500 flex items-center justify-center gap-1 text-white fill-white p-2 px-4 rounded-full select-none"
          disabled={Fetching[1] == "Submitting..." ? true : false}
          style={{ opacity: Fetching[0] ? 0.7 : 1 }}
          type="button"
          onClick={() => Submitting()}
        >
          {Fetching[1]}
          {Fetching[0] && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
                opacity={0.25}
              ></path>
              <path d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z">
                <animateTransform
                  attributeName="transform"
                  dur="0.75s"
                  repeatCount="indefinite"
                  type="rotate"
                  values="0 12 12;360 12 12"
                ></animateTransform>
              </path>
            </svg>
          )}
        </button>
      );
    };
    
    export default CustomAsyncBtn;
    
    `,
  },
];

export default ButtonsInfo;
