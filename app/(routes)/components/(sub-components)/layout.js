import React from "react";
import { headers } from "next/headers";
import ComponentData from "@/app/libs/utils/ComponentDataArray";

const getDataByPathname = (pathname) => {
  if (!pathname) return null;
  return ComponentData.find((item) => item.url.trim() === pathname) || null;
};

export const generateMetadata = () => {
  const headerList = headers();
  const pathname = headerList.get("x-current-path");

  console.log("pathname", pathname);
  const data = getDataByPathname(pathname);
  return {
    title: data?.name || "Dev Components",
    description: data?.description || "Default Description",
    openGraph: {
      title: data?.name || "Dev Components",
      description: data?.description || "Default Description",
    },
  };
};

const Layout = ({ children }) => {
  const headerList = headers();
  const pathname = headerList.get("x-current-path");

  console.log("pathname", pathname);
  const data = getDataByPathname(pathname);
  return (
    <>
      <div>
        <h1 className="text-3xl font-semibold text-white">
          {data?.name || "Default Title"}
        </h1>
        <p className="text-white/70">
          {data?.description || "Default Description"}
        </p>
      </div>
      {children}
    </>
  );
};

export default Layout;
