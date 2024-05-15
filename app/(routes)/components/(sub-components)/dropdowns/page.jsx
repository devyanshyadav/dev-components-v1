"use client";
import React, { useState } from "react";
import ComponentPreview from "@/app/Components/ComponentPreview";
import CustomDropdown from "@/app/Preview_components/Dropdowns/CustomDropdown";
import DropdownsInfo from "@/app/Preview_components/Dropdowns/DropdownsInfo";

const page = () => {
  const [dropDownValue, setDropDownValue] = useState("Lion");
  const Options = ["Lion", "Elephant", "Tiger", "Cow", "Goat", "Horse"];

  return (
    <ComponentPreview
      component_name={DropdownsInfo[0].title}
      component_details={DropdownsInfo[0].details}
      component_usage_code={DropdownsInfo[0].usage_code}
      component_preview={
        <div className="bg-cyan-700/20 text-center space-y-3 p-5 rounded-lg min-w-full md:min-w-40 grid place-content-center">
          <CustomDropdown
            setDropDownValue={setDropDownValue}
            dropDownValue={dropDownValue}
            Options={Options}
          />
        </div>
      }
      component_code={DropdownsInfo[0].code}
      component_packages={DropdownsInfo[0].packages}
    />
  );
};

export default page;
