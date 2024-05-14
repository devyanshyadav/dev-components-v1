"use client";
import React, { useState, useRef, useEffect } from "react";
import clsx from "clsx";

const CustomTab_1 = ({ tabData }) => {
  const [underNum, setUnderNum] = useState(0);
  const tabRef = useRef(null);
  const [tabWidth, setTabWidth] = useState(0);

  useEffect(() => {
    if (tabRef.current) {
      setTabWidth(tabRef.current.offsetWidth / tabData.length);
    }
  }, [tabData.length]);

  return (
    <main className="w-full grid place-content-center gap-1">
      <ul
        className="list-none w-60 grid overflow-hidden"
        style={{ gridTemplateColumns: "repeat(" + tabData.length + ", 1fr)" }}
        ref={tabRef}
      >
        {tabData.map((elem, index) => (
          <li
            className={clsx(
              "text-sm font-semibold select-none rounded-md hover:text-cyan-400 text-center text-cyan-400 cursor-pointer",
              underNum === index && " !text-cyan-400"
            )}
            onClick={() => setUnderNum(index)}
            key={index}
          >
            {elem.title}
          </li>
        ))}
        <hr
          className="border rounded-lg border-cyan-400 transition-all duration-300"
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

export default CustomTab_1;
