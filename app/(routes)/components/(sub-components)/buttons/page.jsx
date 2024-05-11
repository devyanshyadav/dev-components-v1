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
        component_name={ButtonsInfo.base_button.title}
        component_details={ButtonsInfo.base_button.details}
        component_preview={<BaseButton />}
        component_code={ButtonsInfo.base_button.code}
        component_packages={ButtonsInfo.base_button.packages}
      />

      <ComponentPreview
        component_name={ButtonsInfo.async_button.title}
        component_details={ButtonsInfo.async_button.details}
        component_preview={<AsyncButton />}
        component_code={ButtonsInfo.async_button.code}
        component_packages={ButtonsInfo.async_button.packages}
      />
    </>
  );
};

export default page;
