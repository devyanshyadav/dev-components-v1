const InputsInfo = [
  {
    title: "DevInput",
    details: {
      description:
        "A versatile input component designed for development purposes, supporting various styles and configurations such as variants, sizes, roundness, and more.",
      features: [
        "Supports different input variants (base, bordered, faded, underline)",
        "Adjustable input sizes (small, medium, large)",
        "Customizable roundness (none, small, medium, large, full)",
        "Ripple effect option",
        "Reverse icon position option",
      ],
      props: [
        {
          propName: "variant",
          propExample: "base",
          propDetail:
            "Determines the input's visual variant. Options include 'base', 'bordered', 'faded', and 'underline'. Default is 'base'.",
        },
        {
          propName: "size",
          propExample: "md",
          propDetail:
            "Specifies the input's size. Options are 'sm', 'md', and 'lg'. Default is 'md'.",
        },
        {
          propName: "ripple",
          propExample: true,
          propDetail:
            "Enables or disables the ripple effect when the input is focused. Default is false.",
        },
        {
          propName: "icon",
          propExample: "<FiSearch />",
          propDetail:
            "Allows specifying an icon to be displayed inside the input field. The icon should be a React element.",
        },
        {
          propName: "rounded",
          propExample: "full",
          propDetail:
            "Controls the roundness of the input corners. Options are 'none', 'sm', 'md', 'lg', and 'full'. Default is 'full'.",
        },
        {
          propName: "reverseIcon",
          propExample: false,
          propDetail:
            "Reverses the position of the icon within the input field. Default is false.",
        },
        {
          propName: "children",
          propExample: "Text content",
          propDetail:
            "Any child elements or text that should appear inside the input field.",
        },
      ],
      packages: [
        {
          pckg_name: "clsx",
          pckg_link: "https://www.npmjs.com/package/clsx",
        },
        {
          pckg_name: "react-icons",
          pckg_link: "https://react-icons.github.io/react-icons/",
        },
      ],
    },

    usage_code: `
    import DevInput from "@/app/Preview_components/Inputs/DevInput";
    import React from "react";
    import { FiSearch } from "react-icons/fi";
    
    const page = () => {
      return (
        <div className="space-y-4 flex flex-col gap-2">
          <section className="text-white space-y-2 bg-slate-700/50 p-3 rounded-md border border-cyan-700">
            <h2 className="text-sm font-light text-cyan-400">
              Variants (base/ bordered/ faded/ underline)
            </h2>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-2 w-full ">
              <DevInput
                type="text"
                labelName="Search"
                variant="base"
                placeholder="Enter product name"
                icon={<FiSearch />}
              />
              <DevInput
                type="text"
                labelName="Search"
                variant="bordered"
                placeholder="Enter product name"
                icon={<FiSearch />}
              />
              <DevInput
                type="text"
                variant="faded"
                labelName="Search"
                placeholder="Enter product name"
                icon={<FiSearch />}
              />
              <DevInput
                type="text"
                labelName="Search"
                variant="underline"
                placeholder="Enter product name"
                icon={<FiSearch />}
              />
            </div>
          </section>
          <section className="text-white space-y-2 bg-slate-700/50 p-3 rounded-md border border-cyan-700">
            <h2 className="text-sm font-light text-cyan-400">
              Sizes (sm/ md/ lg)
            </h2>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-2 w-full ">
              <DevInput
                type="text"
                labelName="Search"
                size="sm"
                placeholder="Enter product name"
                icon={<FiSearch />}
              />
              <DevInput
                type="text"
                labelName="Search"
                size="md"
                placeholder="Enter product name"
                icon={<FiSearch />}
              />
              <DevInput
                type="text"
                labelName="Search"
                size="lg"
                placeholder="Enter product name"
                icon={<FiSearch />}
              />
            </div>
          </section>
          <section className="text-white space-y-2 bg-slate-700/50 p-3 rounded-md border border-cyan-700">
            <h2 className="text-sm font-light text-cyan-400">
              Roundness (none/ sm/ md/ lg/full)
            </h2>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-2 w-full ">
              <DevInput
                type="text"
                rounded="none"
                labelName="Search"
                placeholder="Enter product name"
                icon={<FiSearch />}
              />
              <DevInput
                type="text"
                rounded="sm"
                labelName="Search"
                placeholder="Enter product name"
                icon={<FiSearch />}
              />
              <DevInput
                type="text"
                rounded="md"
                labelName="Search"
                placeholder="Enter product name"
                icon={<FiSearch />}
              />
              <DevInput
                type="text"
                labelName="Search"
                rounded="lg"
                placeholder="Enter product name"
                icon={<FiSearch />}
              />
              <DevInput
                type="text"
                labelName="Search"
                rounded="full"
                placeholder="Enter product name"
                icon={<FiSearch />}
              />
            </div>
          </section>
        </div>
      );
    };

    export default page;
        `,

    code: `
        import clsx from "clsx";
        import React, { useState } from "react";
        
        const DevInput = ({
          variant = "base",
          size = "md",
          labelName,
          ripple = false,
          icon,
          rounded = "full",
          reverseIcon = false,
          children,
          ...props
        }) => {
          const [active, setActive] = useState(false);
          const commonStyle = "w-full flex items-center gap-2 text-white ";
          const inputVariants = {
            base: clsx(
              "bg-slate-800 border border-cyan-700 outline-cyan-700 rounded-full"
            ),
            bordered:
              "bg-transparent border border-cyan-700 outline-cyan-700 rounded-full",
            faded:
              "bg-cyan-700/20 border border-cyan-700 outline-cyan-700 rounded-full",
            underline: clsx(
              " border-b-4 border-cyan-700 outline-none relative after:content-[''] after:absolute after:h-[3px] after:bg-cyan-400 after:-bottom-1 after:w-full after:scale-x-0  after:transition after:duration-300 after:origin-center rounded-none px-0",
              active && "after:scale-x-100"
            ),
          };
        
          const inputRoundness = {
            none: "rounded-none",
            sm: "rounded-md",
            md: "rounded-lg",
            lg: "rounded-xl",
            full: "rounded-full",
          };
        
          const inputSizes = {
            sm: "p-1 px-2",
            md: "p-2 px-2",
            lg: "p-3 px-4",
          };
          const inputSize = inputSizes[size] || inputSizes.md;
          const inputVariant = inputVariants[variant] || inputVariants.base;
          const inputRound = inputRoundness[rounded] || inputRoundness.full;
        
          return (
            <div>
              {labelName && (
                <label
                  htmlFor={labelName}
                  className={clsx("text-sm text-white ", active && "!text-cyan-400")}
                >
                  {labelName}
                </label>
              )}
        
              <div
                className={clsx(
                  active && "outline outline-2",
                  inputSize,
                  commonStyle,
                  inputRound,
                  inputVariant
                )}
              >
                <span className="text-xl text-cyan-400">{icon}</span>
                <input
                  id={labelName && labelName}
                  onFocus={() => setActive(true)}
                  onBlur={() => setActive(false)}
                  {...props}
                  className="focus:bg-transparent rounded-xl px-1 bg-transparent text-sm text-white outline-none w-full"
                />
              </div>
            </div>
          );
        };
        
        export default DevInput;
        `,
  },
];

export default InputsInfo;
