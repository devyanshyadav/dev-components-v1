"use client";
import React, { useState } from "react";
import BaseRadio from "@/app/Preview_components/Radio/BaseRadio";
import RadiosInfo from "@/app/Preview_components/Radio/RadiosInfo";
import ComponentPreview from "@/app/Components/ComponentPreview";


const page = () => {
  const [radioStatus, setRadioStatus] = useState([0, "Male"]);
  return (
    <ComponentPreview
      component_name={RadiosInfo[0].title}
      component_details={RadiosInfo[0].details}
      component_preview={
        <BaseRadio
          radioStatus={radioStatus}
          setRadioStatus={setRadioStatus}
          radioOptions={["Male", "Female", "Other"]}
        />
      }
      component_code={RadiosInfo[0].code}
      component_packages={RadiosInfo[0].packages}
    />
  );
};

export default page;
