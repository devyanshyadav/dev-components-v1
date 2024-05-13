"use client";
import React from "react";
import ButtonsInfo from "@/app/Preview_components/Buttons/ButtonsInfo";
import ComponentPreview from "@/app/Components/ComponentPreview";
import CustomBtn from "@/app/Preview_components/Buttons/CustomBtn";
import CustomAsyncBtn from "@/app/Preview_components/Buttons/CustomAsyncBtn";

const page = () => {
  return (
    <>
      <ComponentPreview
        component_name={ButtonsInfo[0].title}
        component_details={ButtonsInfo[0].details}
        component_preview={<CustomBtn onClick={() => {alert("This is Base Button")}}>Base Button</CustomBtn> /*fgg*/}
        component_code={ButtonsInfo[0].code}
        component_usage_code={ButtonsInfo[0].usage_code}
        component_packages={ButtonsInfo[0].packages}
      />

      <ComponentPreview
        component_name={ButtonsInfo[1].title}
        component_details={ButtonsInfo[1].details}
        component_preview={<CustomAsyncBtn />}
        component_code={ButtonsInfo[1].code}
        component_usage_code={ButtonsInfo[1].usage_code}
        component_packages={ButtonsInfo[1].packages}
      />
    </>
  );
};

export default page;
