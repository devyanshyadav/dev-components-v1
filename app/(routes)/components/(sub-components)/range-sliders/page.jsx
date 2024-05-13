"use client";
import React, { useState } from "react";
import ComponentPreview from "@/app/Components/ComponentPreview";
import RangeSliderInfo from "@/app/Preview_components/RangeSlider/RangeSlidersInfo";
import CustomRangeSlider from "@/app/Preview_components/RangeSlider/CustomRangeSlider";

const page = () => {
  const [rangeValue, setRangeValue] = useState(30);
  return (
    <ComponentPreview
      component_name={RangeSliderInfo[0].title}
      component_details={RangeSliderInfo[0].details}
      component_usage_code={RangeSliderInfo[0].usage_code}
      component_preview={
        <CustomRangeSlider
          rangeValue={rangeValue}
          setRangeValue={setRangeValue}
        />
      }
      component_code={RangeSliderInfo[0].code}
      component_packages={RangeSliderInfo[0].packages}
    />
  );
};

export default page;
