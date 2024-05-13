"use client";
import React from "react";
import ComponentPreview from "@/app/Components/ComponentPreview";
import BaseNavbar from "@/app/Preview_components/Navbar/BaseNavbar";
import NavbarsInfo from "@/app/Preview_components/Navbar/NavbarsInfo";

const page = () => {
  return (
    <ComponentPreview
      component_name={NavbarsInfo[0].title}
      component_details={NavbarsInfo[0].details}
      component_usage_code={NavbarsInfo[0].usage_code}
      component_preview={<BaseNavbar navList={["Home", "About", "Contact"]} />}
      component_code={NavbarsInfo[0].code}
      component_packages={NavbarsInfo[0].packages}
    />
  );
};

export default page;
