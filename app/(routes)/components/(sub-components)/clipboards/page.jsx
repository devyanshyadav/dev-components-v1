"use client";
import React from "react";
import ComponentPreview from "@/app/Components/ComponentPreview";
import DevClipboard from "@/app/Preview_components/Clipboards/DevClipboard";
import ClipboardsInfo from "@/app/Preview_components/Clipboards/ClipboardsInfo";

const page = () => {
  return (
    <>
      <ComponentPreview
        component_name={ClipboardsInfo[0].title}
        component_details={ClipboardsInfo[0].details}
        component_usage_code={ClipboardsInfo[0].usage_code}
        component_preview={
          <div className="bg-cyan-700/20 p-5 rounded-lg min-w-full md:min-w-40 grid place-content-center">
            <DevClipboard text="Hello world" />
          </div>
        }
        component_code={ClipboardsInfo[0].code}
        component_packages={ClipboardsInfo[0].packages}
      />
    </>
  );
};

export default page;
