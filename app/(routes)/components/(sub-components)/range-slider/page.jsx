"use client";
import React, { useState } from "react";
import ComponentPreview from "@/app/Components/ComponentPreview";
import BaseRangeSlider from "@/app/Preview_components/RangeSlider/BaseRangeSlider";
import RangeSliderInfo from "@/app/Preview_components/RangeSlider/RangeSlidersInfo";

const page = () => {
  const [rangeValue, setRangeValue] = useState([0, "Male"]);
  return (
    <ComponentPreview
      component_name={RangeSliderInfo[0].title}
      component_details={RangeSliderInfo[0].details}
      component_preview={
        <BaseRangeSlider
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
