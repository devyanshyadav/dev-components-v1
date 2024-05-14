"use client";
import React, { useState, useRef, useEffect } from "react";
import clsx from "clsx";

const CustomTab_2 = ({ tabData }) => {
  const [underNum, setUnderNum] = useState(0);
  const tabRef = useRef(null);
  const [tabWidth, setTabWidth] = useState(0);

  useEffect(() => {
    if (tabRef.current) {
      setTabWidth(tabRef.current.offsetWidth / tabData.length);
    }
  }, [tabData.length]);

  return (
    <main className="w-full grid place-content-center gap-2">
      <ul
        className="list-none  grid overflow-hidden outline outline-cyan-700 relative w-64 bg-slate-700 rounded-full border-4 border-slate-700"
        style={{ gridTemplateColumns: "repeat(" + tabData.length + ", 1fr)" }}
        ref={tabRef}
      >
        {tabData.map((elem, index) => (
          <li
            className={clsx(
              "text-white/50 py-1 text-sm  text-center cursor-pointer z-10 select-none transition-all duration-300  hover:text-white/100",
              underNum === index && " !text-cyan-400"
            )}
            onClick={() => setUnderNum(index)}
            key={index}
          >
            {elem.title}
          </li>
        ))}
        <hr
          className="rounded-full bg-cyan-700/50 inset-0 absolute h-full transition-all duration-300 border-none"
          style={{
            width: tabWidth + "px",
            transform: "translateX(" + tabWidth * underNum + "px)",
          }}
        />
      </ul>
      <section className="bg-slate-700 min-h-40 rounded-md grid place-content-center">
        {tabData[underNum].element}
      </section>
    </main>
  );
};

export default CustomTab_2;
