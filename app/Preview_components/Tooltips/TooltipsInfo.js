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
        },
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
      import React , { useId } from "react";
      import { Tooltip } from "react-tooltip";
      
      const ReactTooltip = ({ children, place = "top", tipData }) => {
      const Id = useId();
 
        return (
          <>
            <Tooltip
              id={Id}
              place={place}
              offset={2}
              style={{ backgroundColor: "transparent", padding: "0px" }}
            >
              <div className="bg-cyan-700 border border-cyan-400 text-sm px-2 rounded-full text-white">
                {tipData}
              </div>
            </Tooltip>
            <div className="w-fit" data-tooltip-id={Id}>
              {children}
            </div>
          </>
        );
      };
      
      export default ReactTooltip;
      
      `,
  },
  {
    title: "Custom Tooltip",
    details: {
      description:
        "A custom tooltip component with smooth animations and positioning.",
      features: [
        "Displays a tooltip with custom content",
        "Allows customization of the tooltip position",
        "Provides smooth animations for the tooltip appearance and positioning",
        "Renders the tooltip as a portal to prevent layout issues",
        "Automatically calculates and adjusts the tooltip position based on the target element",
      ],
      props: [
        {
          propName: "place",
          propExample: '"top"',
          propDetail:
            "The preferred position of the tooltip relative to the target element (e.g., 'top', 'bottom', 'left', 'right'). Defaults to 'top'.",
        },
        {
          propName: "tipData",
          propExample: '"This is a tooltip"',
          propDetail:
            "The content or message to be displayed in the tooltip. Defaults to 'tooltip'.",
        },
        {
          propName: "children",
          propExample: "<div>Hover over me</div>",
          propDetail:
            "The target element or component to which the tooltip should be at   ",
        },
      ],
      doc_links: [],
      packages: [
        {
          pckg_name: "framer-motion",
          pckg_link: "https://www.framer.com/motion/",
        },
      ],
    },
    usage_code: `
    import CustomTooltip from "@/app/dev_components/CustomTooltip";
    import React from "react";
    
    const page = () => {
      return (
        <div className="bg-cyan-700/20 p-5 rounded-lg">
          <CustomTooltip tipData="I am tooltip">
            <h3 className="text-cyan-400 ">Hover on me</h3>
          </CustomTooltip>
        </div>
      );
    };
    
    export default page;
    
     `,
    code: `
    import React, { useState, useEffect, useRef } from "react";
    import ReactDOM from "react-dom";
    import { motion } from "framer-motion";
    
    const CustomTooltip = ({
      place = "top",
      tipData = "tooltip",
      children = "Tooltip",
      id = "tooltip",
    }) => {
      const [isVisible, setIsVisible] = useState(false);
      const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
      const childRef = useRef(null);
      const tooltipRef = useRef(null); // Ref for the tooltip
      const [tooltipAnim, setTooltipAnim] = useState({
        open: { opacity: 1, translateY: -5 },
      });
    
      useEffect(() => {
        const handleResize = () => {
          setIsVisible(false); // Hide the tooltip on resize
        };
    
        window.addEventListener("resize", handleResize);
    
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);
    
      useEffect(() => {
        if (isVisible && tooltipRef.current) {
          const childRect = childRef.current.getBoundingClientRect();
          const tooltipRect = tooltipRef.current.getBoundingClientRect();
          let newPosition = calculatePosition(childRect, tooltipRect, place);
          setTooltipPosition(newPosition);
        }
      }, [isVisible, place]);
    
      const calculatePosition = (childRect, tooltipRect, place) => {
        let newPosition = { top: 0, left: 0 };
        switch (place) {
          case "top":
            setTooltipAnim({
              open: { opacity: 1, translateY: -5 },
            });
            newPosition = {
              top: childRect.top - tooltipRect.height,
              left: childRect.left + childRect.width / 2 - tooltipRect.width / 2,
            };
            break;
          case "bottom":
            setTooltipAnim({
              open: { opacity: 1, translateY: 5 },
            });
            newPosition = {
              top: childRect.bottom,
              left: childRect.left + childRect.width / 2 - tooltipRect.width / 2,
            };
            break;
          case "left":
            setTooltipAnim({
              open: { opacity: 1, translateX: -5 },
            });
            newPosition = {
              top: childRect.top + childRect.height / 2 - tooltipRect.height / 2,
              left: childRect.left - tooltipRect.width,
            };
            break;
          case "right":
            setTooltipAnim({
              open: { opacity: 1, translateX: 5 },
            });
            newPosition = {
              top: childRect.top + childRect.height / 2 - tooltipRect.height / 2,
              left: childRect.right,
            };
            break;
          default:
            setTooltipAnim({
              open: { opacity: 1, translateY: -5 },
            });
            newPosition = {
              top: childRect.top - tooltipRect.height - 5,
              left: childRect.left + childRect.width / 2 - tooltipRect.width / 2,
            };
        }
        return newPosition;
      };
    
      return (
        <div
          ref={childRef}
          onMouseEnter={() => setIsVisible(true)}
          onMouseLeave={() => setIsVisible(false)}
          className="grid place-content-center"
          aria-describedby="tooltip"
        >
          {children}
          {isVisible &&
            ReactDOM.createPortal(
              <motion.span
                animate={isVisible && "open"}
                variants={tooltipAnim}
                transition={{ duration: 0.2 }}
                ref={tooltipRef}
                id={id}
                className="fixed bg-cyan-700 border border-cyan-400 text-sm px-2 rounded-full text-white"
                style={{ ...tooltipPosition }}
                role={id}
              >
                {tipData}
              </motion.span>,
              document.body
            )}
        </div>
      );
    };
    
    export default CustomTooltip;
     `,
  },
];

export default TooltipsInfo;
