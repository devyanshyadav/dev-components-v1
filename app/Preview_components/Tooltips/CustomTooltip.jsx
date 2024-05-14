"use client";
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
