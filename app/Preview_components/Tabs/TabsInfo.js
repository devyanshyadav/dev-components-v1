const TabsInfo = [
  {
    title: "Custom Tab",
    details: {
      description:
        "A custom tab component that allows users to switch between different content sections.",
      features: [
        "Displays a list of tab titles",
        "Allows users to switch between tabs by clicking on the tab titles",
        "Shows the corresponding content section for the selected tab",
        "Provides visual feedback for the currently active tab",
      ],
      props: [
        {
          propName: "tabData",
          propExample:
            "[{ title: 'Tab 1', element: <p>This is Tab 1</p> }, ...]",
          propDetail:
            "An array of objects containing the title and content element for each tab.",
        },
      ],
      doc_links: [],
      packages: [],
    },
    usage_code: `
      import CustomTab from '@/app/dev_components/CustomTab'
      import React from 'react'
      
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
          <CustomTab tabData={tabData}/>
        )
      }
      
      export default page
              `,
    code: `
    import React, { useState } from "react";
    
    const CustomTab = ({ tabData }) => {
      const [currTab, setCurrTab] = useState(0);
      return (
        <main className="w-full grid place-content-center gap-1">
          <ul
            className="list-none w-fit bg-slate-700 grid rounded-md overflow-hidden"
            style={{
              gridTemplateColumns: "repeat(" + tabData.length + ", 1fr)",
            }}
          >
            {tabData.map((elem, i) => (
              <li
                onClick={() => setCurrTab(i)}
                className={
                  "p-1 px-4 select-none text-center transition-all border-b-2 border-transparent text-white/80 hover:text-cyan-400 hover:border-cyan-400 cursor-pointer text-sm " +
                  (currTab === i &&
                    "!text-cyan-400 !border-cyan-400 bg-cyan-700/50")
                }
                key={i}
              >
                {elem.title}
              </li>
            ))}
          </ul>
          <section className="bg-slate-700 min-h-40 rounded-md grid place-content-center">
            {tabData[currTab].element}
          </section>
        </main>
      );
    };
    
    export default CustomTab;
    
       `,
  },

  {
    title: "Custom Tab 1",
    details: {
      description:
        "An alternative implementation of a custom tab component with an animated underline indicator.",
      features: [
        "Displays a list of tab titles",
        "Allows users to switch between tabs by clicking on the tab titles",
        "Shows the corresponding content section for the selected tab",
        "Provides visual feedback for the currently active tab with an animated underline indicator",
      ],
      props: [
        {
          propName: "tabData",
          propExample:
            "[{ title: 'Tab 1', element: <p>This is Tab 1</p> }, ...]",
          propDetail:
            "An array of objects containing the title and content element for each tab.",
        },
      ],
      doc_links: [],
      packages: [],
    },
    usage_code: `
      import CustomTab_1 from '@/app/dev_components/CustomTab_1'
      import React from 'react'
      
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
          <CustomTab_1 tabData={tabData}/>
        )
      }
      
      export default page
              `,
    code: `
    import React, { useState, useRef, useEffect } from "react";
    
    const CustomTab_1 = ({ tabData }) => {
      const [underNum, setUnderNum] = useState(0);
      const tabRef = useRef(null);
      const [tabWidth, setTabWidth] = useState(0);
    
      useEffect(() => {
        if (tabRef.current) {
          setTabWidth(tabRef.current.offsetWidth / tabData.length);
        }
      }, [tabData.length]);
    
      return (
        <main className="w-full grid place-content-center gap-1">
          <ul
            className="list-none w-fit grid overflow-hidden"
            style={{ gridTemplateColumns: "repeat(" + tabData.length + ", 1fr)" }}
            ref={tabRef}
          >
            {tabData.map((elem, index) => (
              <li
                className={
                  (underNum === index ? " !text-cyan-400" : "text-white/50 ") +
                  "text-base font-semibold select-none rounded-md px-3 hover:text-cyan-400 text-cyan-400 cursor-pointer "
                }
                onClick={() => setUnderNum(index)}
                key={index}
              >
                {elem.title}
              </li>
            ))}
            <hr
              className="border rounded-lg border-cyan-400 transition-all duration-300"
              style={{
                width: tabWidth + "px",
                transform: "translateX(" + tabWidth * underNum + "px)",
              }}
            />
          </ul>
          <section className="bg-slate-700 min-h-40 rounded-md grid place-content-center">
            {tabData[underNum].element}
          </section>
        </main>
      );
    };
    
    export default CustomTab_1;
    
       `,
  },
  {
    title: "Custom Tab 2",
    details: {
      description:
        "An alternative implementation of a custom tab component with an animated rounded rectangle indicator.",
      features: [
        "Displays a list of tab titles",
        "Allows users to switch between tabs by clicking on the tab titles",
        "Shows the corresponding content section for the selected tab",
        "Provides visual feedback for the currently active tab with an animated rounded rectangle indicator",
      ],
      props: [
        {
          propName: "tabData",
          propExample:
            "[{ title: 'Tab 1', element: <p>This is Tab 1</p> }, ...]",
          propDetail:
            "An array of objects containing the title and content element for each tab.",
        },
      ],
      doc_links: [],
      packages: [],
    },
    usage_code: `
      import CustomTab_2 from '@/app/dev_components/CustomTab_2'
      import React from 'react'
      
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
          <CustomTab_2 tabData={tabData}/>
        )
      }
      
      export default page
              `,
    code: `
    import React, { useState, useRef, useEffect } from "react";
    
    const CustomTab_2 = ({ tabData }) => {
      const [underNum, setUnderNum] = useState(0);
      const tabRef = useRef(null);
      const [tabWidth, setTabWidth] = useState(0);
    
      useEffect(() => {
        if (tabRef.current) {
          setTabWidth(tabRef.current.offsetWidth / tabData.length);
        }
      }, [tabData.length]);
    
      return (
        <main className="w-full grid place-content-center gap-2">
          <ul
            className="list-none  grid overflow-hidden outline outline-cyan-700 relative w-64 bg-slate-700 rounded-full border-4 border-slate-700"
            style={{ gridTemplateColumns: "repeat(" + tabData.length + ", 1fr)" }}
            ref={tabRef}
          >
            {tabData.map((elem, index) => (
              <li
                className={
                  (underNum === index ? " !text-cyan-400" : "text-white/50 ") +
                  "text-base font-semibold select-none rounded-md px-3 text-center z-10 hover:text-cyan-400 text-cyan-400 cursor-pointer "
                }
                onClick={() => setUnderNum(index)}
                key={index}
              >
                {elem.title}
              </li>
            ))}
            <hr
              className="rounded-full bg-cyan-700/50 inset-0 absolute h-full transition-all duration-300 border-none"
              style={{
                width: tabWidth + "px",
                transform: "translateX(" + tabWidth * underNum + "px)",
              }}
            />
          </ul>
          <section className="bg-slate-700 min-h-40 rounded-md grid place-content-center">
            {tabData[underNum].element}
          </section>
        </main>
      );
    };
    
    export default CustomTab_2;
    
    
       `,
  },
];

export default TabsInfo;
