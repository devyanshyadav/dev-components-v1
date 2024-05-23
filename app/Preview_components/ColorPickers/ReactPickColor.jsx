"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import ColorPicker from "react-pick-color";
import { Tooltip as PopOver } from "react-tooltip";

const ReactPickColor = ({ color, setColor }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {mounted &&
        createPortal(
          <PopOver
            id="react-color-picker-popover"
            clickable={true}
            events={["click"]}
            place="bottom"
            offset={2}
            defaultIsOpen={false}
            delayShow={0}
            delayHide={0}
            style={{
              backgroundColor: "transparent",
              padding: "0px",
              opacity: 1,
              zIndex: 1000,
            }}
          >
            <div>
              <ColorPicker
                theme={{
                  background: "#1E293B",
                  inputBackground: "#1B384C",
                  borderColor: "#0E7490",
                  borderRadius: "8px",
                  color: "white",
                }}
                color={color.rgb || color.hex}
                onChange={(color) => setColor(color)}
              />
            </div>
          </PopOver>,
          document.body
        )}
      <button
        data-tooltip-id="react-color-picker-popover"
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

export default ReactPickColor;
