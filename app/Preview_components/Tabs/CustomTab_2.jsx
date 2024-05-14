"use client";
import React, { useState, useRef, useEffect } from "react";

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
            className={
              (underNum === index ? " !text-cyan-400" : "text-white/50 ") +
              "text-base font-semibold select-none rounded-md px-3 text-center z-10 hover:text-cyan-400 text-cyan-400 cursor-pointer "
            }
            onClick={() => setUnderNum(index)}
            key={index}
          >
            {elem.title}
          </li>
        ))}
        <hr
          className={`rounded-full bg-cyan-700/50 inset-0 absolute h-full transition-all duration-300 border-none`}
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
