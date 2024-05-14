import React from "react";
import ComponentPreview from "@/app/Components/ComponentPreview";
import TooltipsInfo from "@/app/Preview_components/Tooltips/TooltipsInfo";
import ReactTooltip from "@/app/Preview_components/Tooltips/ReactTooltip";
import CustomTooltip from "@/app/Preview_components/Tooltips/CustomTooltip";

const page = () => {
  return (
    <>
      <ComponentPreview
        component_name={TooltipsInfo[1].title}
        component_details={TooltipsInfo[1].details}
        component_usage_code={TooltipsInfo[1].usage_code}
        component_preview={
          <div className="bg-cyan-700/20 p-5 rounded-lg">
            <CustomTooltip tipData="I am tooltip">
              <h3 className="text-cyan-400 ">Hover on me</h3>
            </CustomTooltip>
          </div>
        }
        component_code={TooltipsInfo[1].code}
        component_packages={TooltipsInfo[1].packages}
      />
      <ComponentPreview
        component_name={TooltipsInfo[0].title}
        component_details={TooltipsInfo[0].details}
        component_usage_code={TooltipsInfo[0].usage_code}
        component_preview={
          <div className="bg-cyan-700/20 p-5 rounded-lg">
            <ReactTooltip tipData="I am tooltip">
              <h3 className="text-cyan-400 ">Hover on me</h3>
            </ReactTooltip>
          </div>
        }
        component_code={TooltipsInfo[0].code}
        component_packages={TooltipsInfo[0].packages}
      />
    </>
  );
};

export default page;
