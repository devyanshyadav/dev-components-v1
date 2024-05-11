"use client";
import React, { useState } from "react";
import BaseRadio from "@/app/Preview_components/Radio/BaseRadio";
import RadiosInfo from "@/app/Preview_components/Radio/RadiosInfo";
import ComponentPreview from "@/app/Components/ComponentPreview";


const page = () => {
  const [radioStatus, setRadioStatus] = useState([0, "Male"]);
  return (
    <ComponentPreview
      component_name={RadiosInfo.base_radio.title}
      component_details={RadiosInfo.base_radio.details}
      component_preview={
        <BaseRadio
          radioStatus={radioStatus}
          setRadioStatus={setRadioStatus}
          radioOptions={["Male", "Female", "Other"]}
        />
      }
      component_code={RadiosInfo.base_radio.code}
      component_packages={RadiosInfo.base_radio.packages}
    />
  );
};

export default page;
