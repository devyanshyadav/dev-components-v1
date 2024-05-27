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
    title: "DevButton",
    details: {
      description:
        "A versatile button component designed for development purposes, supporting various styles, sizes, and functionalities.",
      features: [
        "Supports different types of buttons (solid, outline, light, flat, ghost)",
        "Can display ripples effect on interaction",
        "Adjustable size (small, medium, large)",
        "Customizable roundness (none, small, medium, large, full)",
        "Can act as a link with external or internal navigation",
        "Can include icons within the button",
      ],
      props: [
        {
          propName: "type",
          propExample: "solid",
          propDetail:
            "Determines the button's appearance. Options include 'solid', 'outline', 'light', 'flat', 'ghost'.",
        },
        {
          propName: "size",
          propExample: "md",
          propDetail:
            "Specifies the button's size. Options include 'sm' for small, 'md' for medium, and 'lg' for large.",
        },
        {
          propName: "href",
          propExample: "/",
          propDetail:
            "Defines the URL for the button if it should act as a link.",
        },
        {
          propName: "rounded",
          propExample: "none",
          propDetail:
            "Controls the button's roundness. Options include 'none', 'sm', 'md', 'lg', 'full'.",
        },
        {
          propName: "ripple",
          propExample: true,
          propDetail:
            "Enables the ripple effect on button interaction. Set to true to enable.",
        },
        {
          propName: "icon",
          propExample: true,
          propDetail:
            "Indicates whether the button should display an icon. Set to true to enable.",
        },
        {
          propName: "rippleAccent",
          propExample: "light",
          propDetail:
            "Determines the color of the ripple effect. Options include 'light' and 'dark'",
        },
      ],
      packages: [
        {
          pckg_name: "material-ripple-effects",
          pckg_link: "https://www.npmjs.com/package/material-ripple-effects",
        },
        {
          pckg_name: "clsx",
          pckg_link: "https://www.npmjs.com/package/clsx",
        },
      ],
    },

    usage_code: `
      import DevButton from "@/app/Preview_components/Buttons/DevButton";
      import React from "react";
      import { IoSearch } from "react-icons/io5";
      import { MdCameraAlt } from "react-icons/md";
      import { HiHome } from "react-icons/hi2";
      import { IoIosArrowForward } from "react-icons/io";
      
      const page = () => {
        return (
          <section className="space-y-4">
            <div className="space-y-2 bg-primary/50 p-3 border border-secondary/50 rounded-md">
              <h2 className="font-semibold text-white">Base Buttons</h2>
              <div className="flex gap-2 items-center flex-wrap">
                <DevButton type="solid">
                  {/* Default Solid  */}
                  Solid
                </DevButton>
                <DevButton type="border">Border</DevButton>
                <DevButton type="light">Light</DevButton>
                <DevButton type="flat">Flat</DevButton>
                <DevButton type="ghost">Ghost</DevButton>
              </div>
            </div>
            <div className="space-y-2 bg-primary/50 p-3 border border-secondary/50 rounded-md">
              <h2 className="font-semibold text-white">Ripples Effect</h2>
              <div className="flex gap-2 items-center flex-wrap">
                <DevButton type="solid" ripple={true}>
                  Solid
                </DevButton>
                <DevButton type="border" ripple={true}>
                  Border
                </DevButton>
                <DevButton type="light" ripple={true}>
                  Light
                </DevButton>
                <DevButton type="flat" ripple={true}>
                  Flat
                </DevButton>
                <DevButton type="ghost" ripple={true}>
                  Ghost
                </DevButton>
              </div>
            </div>
            <div className="space-y-2 bg-primary/50 p-3 border border-secondary/50 rounded-md">
              <h2 className="font-semibold text-white">Buttons Sizes</h2>
              <div className="flex gap-2 items-center flex-wrap">
                <DevButton type="solid" size="sm">
                  Size sm
                </DevButton>
                <DevButton type="solid" size="md">
                  Size md
                </DevButton>
                <DevButton type="solid" size="lg">
                  Size lg
                </DevButton>
              </div>
            </div>
            <div className="space-y-2 bg-primary/50 p-3 border border-secondary/50 rounded-md">
              <h2 className="font-semibold text-white">Buttons Roundness</h2>
              <div className="flex gap-2 items-center flex-wrap">
                <DevButton type="solid" rounded="none">
                  Rounded none
                </DevButton>
                <DevButton type="solid" rounded="sm">
                  Rounded sm
                </DevButton>
                <DevButton type="solid" rounded="md">
                  Rounded md
                </DevButton>
                <DevButton type="solid" rounded="lg">
                  Rounded lg
                </DevButton>
                <DevButton type="solid" rounded="full">
                  Rounded full
                </DevButton>
              </div>
            </div>
            <div className="space-y-2 bg-primary/50 p-3 border border-secondary/50 rounded-md">
              <h2 className="font-semibold text-white">Using as Link</h2>
              <div className="flex gap-2">
                <DevButton type="solid" href="/" target="_blank">
                  Button as Link
                </DevButton>
              </div>
            </div>
            <div className="space-y-2 bg-primary/50 p-3 border border-secondary/50 rounded-md">
              <h2 className="font-semibold text-white">Using with Icon</h2>
              <div className="flex gap-2">
                <DevButton type="solid" target="_blank">
                  <HiHome />
                  Home
                </DevButton>
                <DevButton type="solid" target="_blank">
                  Proceed
                  <IoIosArrowForward />
                </DevButton>
              </div>
            </div>
            <div className="space-y-2 bg-primary/50 p-3 border border-secondary/50 rounded-md">
              <h2 className="font-semibold text-white">Using as Icon</h2>
              <div className="flex gap-2 items-center flex-wrap">
                <DevButton type="solid" size="lg" icon={true}>
                  <IoSearch />
                </DevButton>
                <DevButton type="solid" size="lg" icon={true}>
                  <HiHome />
                </DevButton>
                <DevButton type="solid" size="lg" icon={true}>
                  <MdCameraAlt />
                </DevButton>
              </div>
            </div>
          </section>);
      };
      
      export default page;
      
      `,

    code: `"use client"; // Require when ripple functionality is needed in NextJS
    import React from "react";
    import clsx from "clsx";
    import Ripple from "material-ripple-effects";
    
    const DevButton = ({
      variant = "solid",
      size = "md",
      href,
      rounded,
      ripple = false,
      icon,
      children,
      ...props
    }) => {
      const initRipple = new Ripple();
      const commonStyle =
        "transition-all flex items-center gap-1 text-nowrap justify-center active:scale-95 w-fit h-fit border-2 border-cyan-400";
    
      const buttonVariants = {
        solid: " bg-cyan-400 text-white",
        border: "text-cyan-400 font-semibold ", // Changed from 'outline'
        light: "hover:bg-cyan-400/30 text-cyan-400 font-semibold ",
        flat: "border-cyan-400/5 bg-cyan-400/20 text-cyan-400 font-semibold backdrop-blur-sm ",
        ghost: "text-cyan-400 hover:bg-cyan-400 hover:text-white font-semibold ",
      };
    
      const buttonSizes = {
        sm: icon ? "p-[4px] aspect-square" : "p-1 px-3",
        md: icon ? "p-1 aspect-square" : "p-2 px-5",
        lg: icon ? "p-2 aspect-square" : "p-3 px-7",
      };
      const buttonRoundness = {
        sm: "rounded-sm",
        md: "rounded-lg",
        lg: "rounded-2xl",
        full: "rounded-full",
        none: "rounded-none",
      };
    
      const buttonVariant = buttonVariants[variant] || buttonVariants.solid;
      const buttonSizeClass = buttonSizes[size] || buttonSizes.md;
      const buttonRoundnessClass = buttonRoundness[rounded] || buttonRoundness.md;
    
      const ButtonComponent = href ? "a" : "button";
    
      return (
        <ButtonComponent
          href={href}
          {...props}
          {...(ripple && { onMouseUp: (e) => initRipple.create(e, "light") })}
          className={clsx(
            commonStyle,
            buttonVariant,
            buttonSizeClass,
            buttonRoundnessClass,
            ButtonComponent === "a" && "underline",
            props.className
          )}
        >
          {children}
        </ButtonComponent>
      );
    };
    
    export default DevButton;
    `,
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
