import React from 'react'
import AccordionsInfo from '@/app/Preview_components/Accordions/AccordionsInfo';
import ComponentPreview from '@/app/Components/ComponentPreview';
import CustomAccordion from '@/app/Preview_components/Accordions/CustomAccordion';

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
        component_preview={<CustomAccordion AccordData={AccordData} />}
        component_code={AccordionsInfo[0].code}
        component_usage_code={AccordionsInfo[0].usage_code}
        component_packages={AccordionsInfo[0].packages}
      />
    </>

  )
}

export default page