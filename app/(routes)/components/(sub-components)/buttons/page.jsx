"use client";
import BaseButton from "@/app/Preview_components/Buttons/BaseButton";
import React from "react";
import ButtonsInfo from "@/app/Preview_components/Buttons/ButtonsInfo";
import AsyncButton from "@/app/Preview_components/Buttons/AsyncButton";
import ComponentPreview from "@/app/Components/ComponentPreview";

const page = () => {
  return (
    <>
      <ComponentPreview
        component_name={ButtonsInfo[0].title}
        component_details={ButtonsInfo[0].details}
        component_preview={<BaseButton onClick={() => {alert("This is Base Button")}}>Base Button</BaseButton> /*fgg*/}
        component_code={ButtonsInfo[0].code}
        component_packages={ButtonsInfo[0].packages}
      />

      <ComponentPreview
        component_name={ButtonsInfo[1].title}
        component_details={ButtonsInfo[1].details}
        component_preview={<AsyncButton />}
        component_code={ButtonsInfo[1].code}
        component_packages={ButtonsInfo[1].packages}
      />
    </>
  );
};

export default page;
