const AccordionsInfo = {
  base_accordion: {
    title: "Base Accordion",
    details: {
      description: "Simple accordion with simple click functionality",
      features: [
        "Displays a list of accordion items with their titles and descriptions",
        "Allows users to expand or collapse individual accordion items by clicking on the headers",
        "Provides smooth animations for opening and closing accordion items",
      ],
      props: [
        {
          propName: "AccordData",
          propExample: `[ {title:"Accordion", description:"This is an accordion"}, ]`,
          propDetail:
            "This is an array of objects containing the title and description of the accordion.",
        },
      ],
      packages: ["framer-motion", "react-icons"],
      usage_code: `import BaseAccordion from "@/app/dev_components/DevAccordion";
      import React from "react";
      
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
      
        return <BaseAccordion AccordData={AccordData} />;
      };
      
      export default page;
      
      `,
    },
    code: `
    import React, { useState } from "react";
    import { RiAddLine, RiSubtractFill } from "react-icons/ri";
    import { motion } from "framer-motion";
    
    const BaseAccordion = ({ AccordData }) => {
      const [open, setOpen] = useState(true);
    
      const variants = {
        open: { height: "auto" },
        closed: { height: 0 },
      };
    
      return (
        <section className="border border-cyan-600 w-screen max-w-full bg-slate-800 md:max-w-xl divide-y divide-cyan-600 rounded-xl p-2">
          {AccordData.map((elem, i) => (
            <div
              className="space-y-1 text-white py-2"
              key={i}
              onClick={() => setOpen(open == i ? null : i)}
            >
              <h3 className="text-sm flex justify-between cursor-pointer items-center hover:text-cyan-400 font-semibold pr-5">
                {elem.title}
                <span className="text-lg">
                  {open == i ? <RiSubtractFill /> : <RiAddLine />}
                </span>
              </h3>
              <motion.div
                animate={open == i ? "open" : "closed"}
                variants={variants}
                transition={{ duration: 0.2 }}
                onClick={() => setOpen(!open)}
                className="text-xs overflow-hidden h-0"
              >
                {elem.description}
              </motion.div>
            </div>
          ))}
        </section>
      );
    };
    
    export default BaseAccordion;
    
    `,
  },
};

export default AccordionsInfo;
