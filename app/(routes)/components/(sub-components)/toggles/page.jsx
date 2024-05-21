"use client";
import React, { useState } from "react";
import ComponentPreview from "@/app/Components/ComponentPreview";
import CustomToggle from "@/app/Preview_components/Toggle/CustomToggle";
import TogglesInfo from "@/app/Preview_components/Toggle/TogglesInfo";
import CustomToggle_1 from "@/app/Preview_components/Toggle/CustomToggle_1";
import CustomToggle_2 from "@/app/Preview_components/Toggle/CustomToggle_2";

const page = () => {
  const [hasToggle, setHasToggle] = useState(false);

  return (
    <>
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
    <ComponentPreview
      component_name={TogglesInfo[1].title}
      component_details={TogglesInfo[1].details}
      component_usage_code={TogglesInfo[1].usage_code}
      component_preview={
        <div className="bg-cyan-700/20 p-5 rounded-lg min-w-full md:min-w-40 grid place-content-center">
          <CustomToggle_1 hasToggle={hasToggle} setHasToggle={setHasToggle} />
        </div>
      }
      component_code={TogglesInfo[1].code}
      component_packages={TogglesInfo[1].packages}
    />
     <ComponentPreview
      component_name={TogglesInfo[2].title}
      component_details={TogglesInfo[2].details}
      component_usage_code={TogglesInfo[2].usage_code}
      component_preview={
        <div className="bg-cyan-700/20 p-5 rounded-lg min-w-full md:min-w-40 grid place-content-center">
          <CustomToggle_2 hasToggle={hasToggle} setHasToggle={setHasToggle} />
        </div>
      }
      component_code={TogglesInfo[2].code}
      component_packages={TogglesInfo[2].packages}
    />
    </>
  );
};

export default page;
