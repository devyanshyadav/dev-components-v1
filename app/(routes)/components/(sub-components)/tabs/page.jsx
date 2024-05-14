"use client";
import React from "react";
import ComponentPreview from "@/app/Components/ComponentPreview";
import CustomTab from "@/app/Preview_components/Tabs/CustomTab";
import TabsInfo from "@/app/Preview_components/Tabs/TabsInfo";
import CustomTab_1 from "@/app/Preview_components/Tabs/CustomTabs_1";
import CustomTab_2 from "@/app/Preview_components/Tabs/CustomTab_2";

const page = () => {
  const tabData = [
    {
      title: "Tab 1",
      element: <p className="text-white font-semibold"> This is Tab 1</p>,
    },
    {
      title: "Tab 2",
      element: <p className="text-white font-semibold"> This is Tab 2</p>,
    },
    {
      title: "Tab 3",
      element: <p className="text-white font-semibold"> This is Tab 3</p>,
    },
  ];

  return (
    <>
      <ComponentPreview
        component_name={TabsInfo[0].title}
        component_details={TabsInfo[0].details}
        component_usage_code={TabsInfo[0].usage_code}
        component_preview={<CustomTab tabData={tabData} />}
        component_code={TabsInfo[0].code}
        component_packages={TabsInfo[0].packages}
      />
      <ComponentPreview
        component_name={TabsInfo[1].title}
        component_details={TabsInfo[1].details}
        component_usage_code={TabsInfo[1].usage_code}
        component_preview={<CustomTab_1 tabData={tabData} />}
        component_code={TabsInfo[1].code}
        component_packages={TabsInfo[1].packages}
      />
       <ComponentPreview
        component_name={TabsInfo[2].title}
        component_details={TabsInfo[2].details}
        component_usage_code={TabsInfo[2].usage_code}
        component_preview={<CustomTab_2 tabData={tabData} />}
        component_code={TabsInfo[2].code}
        component_packages={TabsInfo[2].packages}
      />
    </>
  );
};

export default page;
