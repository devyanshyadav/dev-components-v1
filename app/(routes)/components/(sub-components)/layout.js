import React from "react";
import { headers } from "next/headers";
import ComponentData from "@/app/libs/utils/ComponentDataArray";
import ComponentTitle from "@/app/Components/ComponentTitle";

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
  return (
    <>
      <ComponentTitle/>
      {children}
    </>
  );
};

export default Layout;
