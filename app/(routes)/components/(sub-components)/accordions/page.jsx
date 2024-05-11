import React from 'react'
import AccordionsInfo from '@/app/Preview_components/Accordion/AccordionsInfo';
import BaseAccordion from '@/app/Preview_components/Accordion/BaseAccordion';
import ComponentPreview from '@/app/Components/ComponentPreview';

const page = () => {
  const AccordData = [
    {
      title: "Accordion #1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, officiis!",
    },
    {
      title: "Accordion #2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, officiis!",
    },
    {
      title: "Accordion #3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, officiis!",
    },
    {
      title: "Accordion #4",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, officiis!",
    },
  ];
  return (
    <ComponentPreview
        component_name={AccordionsInfo.base_accordion.title}
        component_details={AccordionsInfo.base_accordion.details}
        component_preview={<BaseAccordion AccordData={AccordData} />}
        component_code={AccordionsInfo.base_accordion.code}
        component_packages={AccordionsInfo.base_accordion.packages}
      />

  )
}

export default page