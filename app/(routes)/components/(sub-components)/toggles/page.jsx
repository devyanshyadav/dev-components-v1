"use client";
import React, { useState } from "react";
import ComponentPreview from "@/app/Components/ComponentPreview";
import CustomToggle from "@/app/Preview_components/Toggle/CustomToggle";
import TogglesInfo from "@/app/Preview_components/Toggle/TogglesInfo";

const page = () => {
  const [hasToggle, setHasToggle] = useState(false);

  return (
    <ComponentPreview
      component_name={TogglesInfo[0].title}
      component_details={TogglesInfo[0].details}
      component_usage_code={TogglesInfo[0].usage_code}
      component_preview={
        <div className="bg-cyan-700/20 p-5 rounded-lg min-w-full md:min-w-40 grid place-content-center">
          <CustomToggle hasToggle={hasToggle} setHasToggle={setHasToggle} />
        </div>
      }
      component_code={TogglesInfo[0].code}
      component_packages={TogglesInfo[0].packages}
    />
  );
};

export default page;
