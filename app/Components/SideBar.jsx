"use client";
import React from "react";
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

  return (
    SideBar && (
      <section
       
        className="h-full md:w-[20vw] w-[50vw] fixed md:static z-50 bg-primary border border-secondary/30 rounded-r-xl p-3 text-white/60"
      >
        <ul className="space-y-2 ">
          {ComponentData.map((item, index) => (
            <>
              <li
                key={index}
                className={`w-full hidden group md:flex items-center gap-2 hover:bg-secondary/20 hover:text-white rounded-lg cursor-pointer p-1 px-2 ${
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
              <li
                key={index}
                onClick={() => SideBarToggle()}
                className={`w-full md:hidden group flex items-center gap-2 hover:bg-secondary/20 hover:text-white rounded-lg cursor-pointer p-1 px-2 ${
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
            </>
          ))}
        </ul>
      </section>
    )
  );
};

export default SideBar;
