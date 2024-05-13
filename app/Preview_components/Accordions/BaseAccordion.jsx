"use client";
import React, { useState } from "react";
import { RiAddLine, RiSubtractFill } from "react-icons/ri";
import { motion } from "framer-motion";

const BaseAccordion = ({ AccordData }) => {
  const [open, setOpen] = useState(0);

  const variants = {
    open: { height: "auto" },
    closed: { height: 0 },
  };

  return (
    <section className="border border-cyan-600 w-screen max-w-full bg-slate-800 md:max-w-xl divide-y divide-cyan-600 rounded-xl p-2">
      {AccordData.map((elem, i) => (
        <div
          className="space-y-1 text-white py-2"
          key={i}
          onClick={() => setOpen(open == i ? null : i)}
        >
          <h3 className="text-sm flex justify-between cursor-pointer items-center hover:text-cyan-400 font-semibold pr-5">
            {elem.title}
            <span className="text-lg">
              {open == i ? <RiSubtractFill /> : <RiAddLine />}
            </span>
          </h3>
          <motion.div
            animate={open == i ? "open" : "closed"}
            variants={variants}
            transition={{ duration: 0.2 }}
            onClick={() => setOpen(!open)}
            className="text-xs overflow-hidden h-0"
          >
            {elem.description}
          </motion.div>
        </div>
      ))}
    </section>
  );
};

export default BaseAccordion;
