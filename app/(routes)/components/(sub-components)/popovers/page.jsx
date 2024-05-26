"use client";
import React from "react";
import PopoversInfo from "@/app/Preview_components/Popovers/Popoversinfo";
import ComponentPreview from "@/app/Components/ComponentPreview";
import DevPopover from "@/app/Preview_components/Popovers/DevPopover";
import { FaCircleUser } from "react-icons/fa6";
import { RxDashboard } from "react-icons/rx";
import { RiProfileLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";
import clsx from "clsx";

const page = () => {
  return (
    <ComponentPreview
      component_name={PopoversInfo[0].title}
      component_details={PopoversInfo[0].details}
      component_usage_code={PopoversInfo[0].usage_code}
      component_preview={
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
      }
      component_code={PopoversInfo[0].code}
      component_packages={PopoversInfo[0].packages}
    />
  );
};

export default page;
