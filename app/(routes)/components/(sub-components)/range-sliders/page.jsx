"use client";
import React, { useState } from "react";
import ComponentPreview from "@/app/Components/ComponentPreview";
import RangeSliderInfo from "@/app/Preview_components/RangeSlider/RangeSlidersInfo";
import CustomRangeSlider_1 from "@/app/Preview_components/RangeSlider/CustomRangeSlider_1";
import CustomRangeSlider from "@/app/Preview_components/RangeSlider/CustomRangeSlider";
import MultiRangeSliderReact from "@/app/Preview_components/RangeSlider/MultiRangeSliderReact";

const page = () => {
  const [rangeValue, setRangeValue] = useState(30);
  const [minValue, set_minValue] = useState(25);
  const [maxValue, set_maxValue] = useState(75);
  return (
    <>
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
      <ComponentPreview
        component_name={RangeSliderInfo[1].title}
        component_details={RangeSliderInfo[1].details}
        component_usage_code={RangeSliderInfo[1].usage_code}
        component_preview={
          <div className="flex flex-col gap-1 w-full items-center justify-center">
            <CustomRangeSlider_1
              rangeValue={rangeValue}
              setRangeValue={setRangeValue}
              height="30px"
            />
            <CustomRangeSlider_1
              rangeValue={rangeValue}
              setRangeValue={setRangeValue}
              height="25px"
            />
            <CustomRangeSlider_1
              rangeValue={rangeValue}
              setRangeValue={setRangeValue}
              height="15px"
            />
          </div>
        }
        component_code={RangeSliderInfo[1].code}
        component_packages={RangeSliderInfo[1].packages}
      />
      <ComponentPreview
        component_name={RangeSliderInfo[2].title}
        component_details={RangeSliderInfo[2].details}
        component_usage_code={RangeSliderInfo[2].usage_code}
        component_preview={
          <MultiRangeSliderReact
            minValue={minValue}
            maxValue={maxValue}
            set_minValue={set_minValue}
            set_maxValue={set_maxValue}
          />
        }
        component_code={RangeSliderInfo[2].code}
        component_packages={RangeSliderInfo[2].packages}
      />
    </>
  );
};

export default page;
