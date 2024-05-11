'use client'
import useDevStore from "@/app/libs/zuststore";
import { useParams, usePathname } from "next/navigation";
import React from "react";

const layout = ({ children }) => {
  const { ComponentData } = useDevStore((state) => state);
  const params=usePathname();
  const data = ComponentData.filter((item) => item.url === params);
  return (
    <>
      <div>
        <h1 className="text-3xl font-semibold text-white">{data[0].name}</h1>
        <p className="text-white/70">
          {data[0].description}
        </p>
      </div>
      {children}
    </>
  );
};

export default layout;