const TooltipsInfo = [
  {
    title: "React Tooltip",
    details: {
      description:
        "A tooltip component that displays additional information or a helpful message when hovering over an element.",
      features: [
        "Displays a tooltip with custom content",
        "Allows customization of the tooltip position",
        "Provides a smooth and visually appealing tooltip experience",
      ],
      props: [
        {
          propName: "children",
          propExample: "<h3>Hover on me</h3>",
          propDetail:
            "The element or component to which the tooltip should be attached.",
        },
        {
          propName: "place",
          propExample: '"top"',
          propDetail:
            "The position of the tooltip relative to the element (e.g., 'top', 'bottom', 'left', 'right'). Defaults to 'top'.",
        },
        {
          propName: "tipData",
          propExample: '"I am a tooltip"',
          propDetail: "The content or message to be displayed in the tooltip.",
        },
      ],
      doc_links: ["https://react-tooltip.com/docs/getting-started"],
      packages: [
        {
          pckg_name: "react-tooltip",
          pckg_link: "https://react-tooltip.com/docs/getting-started",
        }
      ],
    },
    usage_code: `import ReactTooltip from "@/app/dev_components/ReactTooltip";
      import React from "react";
      
      const page = () => {
        return (
          <div className="bg-cyan-700/20 p-5 rounded-lg">
            <ReactTooltip tipData="I am tooltip">
              <h3 className="text-cyan-400 ">Hover on me</h3>
            </ReactTooltip>
          </div>
        );
      };
      
      export default page;
      
          `,
    code: `
      import React from "react";
      import { Tooltip } from "react-tooltip";
      
      const ReactTooltip = ({ children, place = "top", tipData }) => {
        return (
          <>
            <Tooltip
              id="dev-tooltip"
              place={place}
              offset={2}
              style={{ backgroundColor: "transparent", padding: "0px" }}
            >
              <div className="bg-cyan-700 border border-cyan-400 text-sm px-2 rounded-full text-white">
                {tipData}
              </div>
            </Tooltip>
            <div className="w-fit" data-tooltip-id="dev-tooltip">
              {children}
            </div>
          </>
        );
      };
      
      export default ReactTooltip;
      
      `,
  },
];

export default TooltipsInfo;
