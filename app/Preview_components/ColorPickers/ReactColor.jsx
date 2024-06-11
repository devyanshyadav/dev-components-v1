"use client";
import { useEffect, useState } from "react";
import { SketchPicker } from "react-color";
import { createPortal } from "react-dom";
import { Tooltip as PopOver } from "react-tooltip";
import styled from "styled-components";

const PickerDiv = styled.div`
  .sketch-picker {
    border-radius: 10px !important;
  }
  .sketch-picker div,
  .sketch-picker input {
    border-radius: 6px !important;
    font-weight: 500 !important;
    color: black !important;
  }
`;

const ReactColor = ({ color, setColor }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, [])
  
  return (
    <>
      {mounted && createPortal(
        <PopOver
          id="color-picker-popover"
          clickable={true}
          events={["click"]}
          place="bottom"
          offset={2} opacity={1}
          defaultIsOpen={false}
          delayShow={0}
          delayHide={0}
          style={{
            backgroundColor: "transparent",
            padding: "0px",
            zIndex: 1000,
          }}
        >
          <PickerDiv>
            <SketchPicker
              color={color.rgb || color.hex} //always set to rgb value to make aplha range work
              onChange={(e) => setColor(e)}
              presetColors={[]}
            />
          </PickerDiv>
        </PopOver>,
        document.body
      )}
      <button
        data-tooltip-id="color-picker-popover"
        className="min-w-32  min-h-8 rounded-md border-2 border-cyan-700 focus:border-white"
        style={{
          backgroundColor: color.rgb
            ? `rgba(${color.rgb.r},${color.rgb.g},${color.rgb.b},${color.rgb.a})`
            : color.hex,
        }}
      ></button>
    </>
  );
};

export default ReactColor;
