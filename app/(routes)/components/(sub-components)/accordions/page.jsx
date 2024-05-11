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
    <>
    <ComponentPreview
        component_name={AccordionsInfo[0].title}
        component_details={AccordionsInfo[0].details}
        component_preview={<BaseAccordion AccordData={AccordData} />}
        component_code={AccordionsInfo[0].code}
        component_packages={AccordionsInfo[0].packages}
      />
    </>

  )
}

export default page