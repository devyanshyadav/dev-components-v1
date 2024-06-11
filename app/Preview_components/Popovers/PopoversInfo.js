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
        {
          propName: "contentClick",
          propExample: false,
          propDetail:
            "Enables or disables the close functionality when the content is clicked. Default is false.",
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
            <div className="flex flex-col">
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

const DevPopover = ({
  children = "Popover Content",
  popButton,
  contentClick = false,
}) => {
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
            offset={1} opacity={1}
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
              onClick={() => {
                if (contentClick) {
                  setMounted(!mounted);
                }
              }}
              className="origin-top min-h-4 bg-slate-800 shadow-md border border-cyan-700/50 min-w-36 rounded-lg p-1"
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
  {
    title: "Responsive DevPopover",
    details: {
      description:
        "A custom responsive popover component designed for development purposes, allowing users to display additional options or information upon clicking a button.",
      features: [
        "Dynamic content loading via children prop",
        "Click outside to close functionality",
        "Responsive functionality",
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
        {
          propName: "contentClick",
          propExample: true,
          propDetail:
            "Enables or disables the close functionality when the content is clicked. Default is false.",
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
            <div className="flex flex-col">
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

const DevPopover2 = ({ children="Popover Content", popButton, contentClick = true }) => {
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
            offset={1} opacity={1}
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
              onClick={() => {
                if (contentClick) {
                  setMounted(!mounted);
                }
              }}
              className="origin-top hidden md:block min-h-4 bg-slate-800 shadow-md border border-cyan-700/50 min-w-36 z-50 rounded-lg p-1"
            >
              {children && children}
            </motion.div>
            <motion.div
              initial={{ translateY: "100%" }}
              animate={{ translateY: "0%" }}
              exit={{ translateY: "100%" }}
              transition={{ duration: 0.2 }}
              ref={popoverRef}
              onClick={() => {
                if (contentClick) {
                  setMounted(!mounted);
                }
              }}
              className="bg-slate-800 shadow-md border border-cyan-700/50 min-w-36 rounded-lg p-1  flex-col z-50  block fixed bottom-0 left-0 right-0 md:hidden min-h-4 text-lg"
            >
              <hr className="w-1/4 m-1 h-2 mx-auto border-none rounded-full bg-cyan-700/50" />
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

export default DevPopover2;
`,
  },
];

export default PopoversInfo;
