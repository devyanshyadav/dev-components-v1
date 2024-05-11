"use client";
import React from "react";
import { GoDotFill } from "react-icons/go";
import useDevStore from "../libs/zuststore";
import Link from "next/link";

const SideBar = () => {
  const { ComponentData } = useDevStore((state) => state);
  return (
    <section className="h-full w-[20vw] bg-primary border border-secondary/30 rounded-r-xl p-3 text-white/60">
      <ul className="space-y-2 ">
        {ComponentData.map((item, index) => (
          <li
            key={index}
            className="w-full group flex items-center gap-2 hover:bg-secondary/20 hover:text-white rounded-lg cursor-pointer p-1 px-2"
          >
            <GoDotFill className="text-xs group-hover:text-accent" />{" "}
            <Link href={item.url}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SideBar;
