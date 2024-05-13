"use client";
import React, { useState } from "react";
import RadiosInfo from "@/app/Preview_components/Radio/RadiosInfo";
import ComponentPreview from "@/app/Components/ComponentPreview";
import CustomRadio from "@/app/Preview_components/Radio/CustomRadio";


const page = () => {
  const [radioValue, setRadioValue] = useState("Male");

  return (
    <ComponentPreview
      component_name={RadiosInfo[0].title}
      component_details={RadiosInfo[0].details}
      component_usage_code={RadiosInfo[0].usage_code}
      component_preview={
        <CustomRadio
          radioValue={radioValue}
          setRadioValue={setRadioValue}
          radioOptions={["Male", "Female", "Other"]}
        />
      }
      component_code={RadiosInfo[0].code}
      component_packages={RadiosInfo[0].packages}
    />
  );
};

export default page;
