"use client";
import React, { useState } from "react";
import clsx from "clsx";

const CustomTab = ({ tabData }) => {
  const [currTab, setCurrTab] = useState(0);
  return (
    <main className="w-full grid place-content-center gap-1">
      <ul
        className="list-none w-60 bg-slate-700 grid rounded-md overflow-hidden"
        style={{
          gridTemplateColumns: "repeat(" + tabData.length + ", 1fr)",
        }}
      >
        {tabData.map((elem, i) => (
          <li
            onClick={() => setCurrTab(i)}
            className={clsx(
              "p-1 px-4 select-none text-center transition-all border-b-2 border-transparent text-white/80 hover:text-cyan-400 hover:border-cyan-400 cursor-pointer text-sm ",
              currTab === i && "!text-cyan-400 !border-cyan-400 bg-cyan-700/50"
            )}
            key={i}
          >
            {elem.title}
          </li>
        ))}
      </ul>
      <section className="bg-slate-700 min-h-40 rounded-md grid place-content-center">
        {tabData[currTab].element}
      </section>
    </main>
  );
};

export default CustomTab;
