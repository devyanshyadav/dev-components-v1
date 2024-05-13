"use client";
import React, { useState } from "react";
import CheckBoxesInfo from "@/app/Preview_components/CheckBoxes/CheckBoxesInfo";
import ComponentPreview from "@/app/Components/ComponentPreview";
import CustomCheckBox from "@/app/Preview_components/CheckBoxes/CustomCheckBox";


const page = () => {
  const [checkStatus, setCheckStatus] = useState(true);

  return (
    <ComponentPreview
      component_name={CheckBoxesInfo[0].title}
      component_details={CheckBoxesInfo[0].details}
      component_usage_code={CheckBoxesInfo[0].usage_code}
      component_preview={
        <CustomCheckBox
          checkStatus={checkStatus}
          setCheckStatus={setCheckStatus}
        />
      }
      component_code={CheckBoxesInfo[0].code}
      component_packages={CheckBoxesInfo[0].packages}
    />
  );
};

export default page;
