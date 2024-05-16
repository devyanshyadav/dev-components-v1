"use client";
import React, { useEffect, useState, useRef } from "react";
import clsx from "clsx";
import { Tooltip as DropDown } from "react-tooltip";

const CustomDropDown_1 = ({ setDropDownValue, dropDownValue, Options }) => {
  const [calcWidth, setCalcWidth] = useState(0);
  const [mounted, setMounted] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);
  useEffect(() => {
    if (buttonRef.current) {
      setCalcWidth(buttonRef.current.offsetWidth);
      console.log(buttonRef.current.offsetWidth, "width");
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
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
      {mounted && (
        <DropDown
          clickable={mounted ? true : false}
          events={["click"]}
          isOpen
          id="dev-tooltip"
          place="bottom"
          offset={2}
          style={{ backgroundColor: "transparent", padding: "0px" }}
        >
          <div
            className="flex z-10 shadow-md flex-col gap-1 bg-slate-700 rounded-md p-2 max-h-64 overflow-y-scroll [&::-webkit-scrollbar]:hidden [scrollbar-width:none]"
            style={{ width: calcWidth + "px" }}
            ref={dropdownRef}
          >
            {Options.map((elem, i) => (
              <label
                className={clsx(
                  "hover:bg-cyan-700 text-left rounded-lg p-1 overflow-hidden  px-2 cursor-pointer",
                  dropDownValue == elem && "bg-cyan-400"
                )}
                key={i}
                htmlFor={elem}
              >
                {elem}
                <input
                  onChange={(e) => {
                    setDropDownValue(e.target.value);
                    setMounted(false);
                  }}
                  type="radio"
                  id={elem}
                  name="drop-down"
                  value={elem}
                  className="opacity-0"
                />
              </label>
            ))}
          </div>
        </DropDown>
      )}
      <button
        onClick={() => setMounted(!mounted)}
        data-tooltip-id="dev-tooltip"
        className="min-w-40 transition-all flex items-center justify-between bg-slate-700 focus:border-cyan-400 border-cyan-700 text-white py-1 border rounded-md px-2"
        ref={buttonRef}
      >
        {dropDownValue}
        <svg
          className={clsx("text-lg transition-all", mounted && "rotate-180")}
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M12 16a1 1 0 0 1-.64-.23l-6-5a1 1 0 1 1 1.28-1.54L12 13.71l5.36-4.32a1 1 0 0 1 1.41.15a1 1 0 0 1-.14 1.46l-6 4.83A1 1 0 0 1 12 16"
          ></path>
        </svg>
      </button>
    </div>
  );
};
export default CustomDropDown_1;
