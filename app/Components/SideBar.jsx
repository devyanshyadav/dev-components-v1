"use client";
import React, { useEffect } from "react";
import { GoDotFill } from "react-icons/go";
import useDevStore from "../libs/zuststore";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const SideBar = () => {
  const { ComponentData, SideBar, SideBarToggle } = useDevStore(
    (state) => state
  );
  const params = usePathname();
  const data = ComponentData.filter((item) => item.url === params);
  useEffect(() => {
    SideBarToggle();
  }, []);

  return (
    SideBar && (
      <motion.section
        initial={{ left: "-100px" }}
        animate={{ left: 0 }}
        exit={{ left: 0 }}
        transition={{ duration: 0.2 }}
        className="h-full md:w-[20vw] w-[50vw] overflow-y-scroll [&::-webkit-scrollbar]:hidden [&::-webkit-scrollbar-track]:hidden [&::-webkit-scrollbar-thumb]:hidden fixed md:static z-50 bg-primary border border-secondary/30 rounded-r-xl p-3 text-white/60"
      >
        <ul className="space-y-2 md:block hidden ">
          {ComponentData.map((item, index) => (
            <li
              key={index}
              className={`w-full flex group items-center gap-2 hover:bg-secondary/20 hover:text-white rounded-lg cursor-pointer p-1 px-2 ${
                data.length > 0 && data[0].name === item.name
                  ? "text-accent"
                  : ""
              } `}
            >
              <GoDotFill className="text-xs group-hover:text-accent" />{" "}
              <Link href={item.url} className="w-full">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="space-y-2 md:hidden">
          {ComponentData.map((item, index) => (
            <li
              key={index}
              onClick={() => SideBarToggle()}
              className={`w-full  group flex items-center gap-2 hover:bg-secondary/20 hover:text-white rounded-lg cursor-pointer p-1 px-2 ${
                data.length > 0 && data[0].name === item.name
                  ? "text-accent"
                  : ""
              } `}
            >
              <GoDotFill className="text-xs group-hover:text-accent" />{" "}
              <Link href={item.url} className="w-full">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </motion.section>
    )
  );
};

export default SideBar;
