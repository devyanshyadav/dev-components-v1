"use client";
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
