const PopoversInfo = [
  {
    title: "DevPopover",
    details: {
      description:
        "A custom popover component designed for development purposes, allowing users to display additional options or information upon clicking a button.",
      features: [
        "Dynamic content loading via children prop",
        "Click outside to close functionality",
        "Animated entrance and exit transitions",
        "Customizable trigger button",
        "Integration with react-tooltip for accessibility",
      ],
      props: [
        {
          propName: "children",
          propExample: `<div>Option</div>`,
          propDetail:
            "The content to be displayed inside the popover. This can be any valid JSX.",
        },
        {
          propName: "popButton",
          propExample: `<button><FaCircleUser /></button>`,
          propDetail:
            "The button that triggers the popover. This can be any JSX element.",
        },
      ],
      packages: [
        {
          pckg_name: "react-tooltip",
          pckg_link: "https://www.npmjs.com/package/react-tooltip",
        },
        {
          pckg_name: "framer-motion",
          pckg_link: "https://www.framer.com/api/motion/",
        },
        {
          pckg_name: "clsx",
          pckg_link: "https://www.npmjs.com/package/clsx",
        },
      ],
    },

    usage_code: `
      import React from "react";
      import DevPopover from "@/app/dev_components/Popovers/DevPopover";
      import { FaCircleUser } from "react-icons/fa6";
      import { RxDashboard } from "react-icons/rx";
      import { RiProfileLine } from "react-icons/ri";
      import { IoSettingsOutline } from "react-icons/io5";
      import { LuLogOut } from "react-icons/lu";
      import clsx from "clsx";

      const page = () => {

        return (
            <DevPopover
            popButton={
              <button className="text-3xl text-cyan-700 bg-white rounded-full shadow-lg active:opacity-80">
                <FaCircleUser className=" outline outline-cyan-400 rounded-full" />
              </button>
            }
          >
            <div className="bg-slate-800 shadow-md border border-cyan-700/50 min-w-36 rounded-lg p-1  flex flex-col">
              {[
                { icon: <RxDashboard />, text: "Dashboard" },
                { icon: <RiProfileLine />, text: "Profile" },
                { icon: <IoSettingsOutline />, text: "Settings" },
                { icon: <LuLogOut />, text: "Logout" },
              ].map((elem, index) => (
                <button
                  className={clsx(
                    "p-1 px-2 flex items-center gap-2 text-left hover:bg-cyan-700/50 w-full self-start rounded-lg",
                    index === 3 && "hover:bg-red-600/20 text-red-600"
                  )}
                  key={index}
                >
                  {elem.icon}
                  <p>{elem.text}</p>
                </button>
              ))}
            </div>
          </DevPopover>
        );
      };
      
      export default page;
      
      `,
    code: `
      import React, { useEffect, useState, useRef, useId } from "react";
      import { Tooltip as Popover } from "react-tooltip";
      import { motion } from "framer-motion";
      import { createPortal } from "react-dom";
      import clsx from "clsx";
      
      const DevPopover = ({ children="Popover Content", popButton }) => {
        const [mounted, setMounted] = useState(false);
        const popoverRef = useRef(null);
        const randomId = useId();
      
        useEffect(() => {
          const handleClickOutside = (event) => {
            if (popoverRef.current && !popoverRef.current.contains(event.target)) {
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
            {mounted &&
              createPortal(
                <Popover
                  clickable={mounted ? true : false}
                  events={["click"]}
                  isOpen
                  id={randomId}
                  place="bottom"
                  offset={1}
                  style={{
                    backgroundColor: "transparent",
                    padding: "0px",
                    zIndex: 1000,
                  }}
                >
                  <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                    ref={popoverRef}
                    className={clsx(
                      "origin-top",
                      !children && "p-2 rounded-lg bg-slate-800"
                    )}
                  >
                    {children && children}
                  </motion.div>
                </Popover>,
                document.body
              )}
            <div onClick={() => setMounted(!mounted)} data-tooltip-id={randomId}>
              {popButton}
            </div>
          </div>
        );
      };
      
      export default DevPopover;
      `,
  },
];

export default PopoversInfo;
