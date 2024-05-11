"use client";
import React, { useState } from "react";
import BaseCheckBox from "@/app/Preview_components/CheckBoxes/BaseCheckBox";
import CheckBoxesInfo from "@/app/Preview_components/CheckBoxes/CheckBoxesInfo";
import ComponentPreview from "@/app/Components/ComponentPreview";


const page = () => {
  const [checkStatus, setCheckStatus] = useState(true);

  return (
    <ComponentPreview
      component_name={CheckBoxesInfo.base_checkbox.title}
      component_details={CheckBoxesInfo.base_checkbox.details}
      component_preview={
        <BaseCheckBox
          checkStatus={checkStatus}
          setCheckStatus={setCheckStatus}
        />
      }
      component_code={CheckBoxesInfo.base_checkbox.code}
      component_packages={CheckBoxesInfo.base_checkbox.packages}
    />
  );
};

export default page;
