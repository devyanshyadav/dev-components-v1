"use client";
import ComponentPreview from "@/app/Components/ComponentPreview";
import ColorPickersInfo from "@/app/Preview_components/ColorPickers/ColorPickersInfo";
import ReactColor from "@/app/Preview_components/ColorPickers/ReactColor";
import ReactPickColor from "@/app/Preview_components/ColorPickers/ReactPickColor";
import React, { useState } from "react";

const page = () => {
  const [color, setColor] = useState({
    hex: "#F17013",
  });
  // here setColor will get a color object with {hex, hsl, rgb, hsv} properties

  return (
    <>
      <ComponentPreview
        component_name={ColorPickersInfo[0].title}
        component_details={ColorPickersInfo[0].details}
        component_usage_code={ColorPickersInfo[0].usage_code}
        component_preview={
          <div className="p-4 px-7 rounded-md border border-cyan-700 bg-cyan-700/20">
            <p className="text-white">{color.hex || "#000000"}</p>
            <ReactColor color={color} setColor={setColor} />
          </div>
        }
        component_code={ColorPickersInfo[0].code}
        component_packages={ColorPickersInfo[0].packages}
      />
      <ComponentPreview
        component_name={ColorPickersInfo[1].title}
        component_details={ColorPickersInfo[1].details}
        component_usage_code={ColorPickersInfo[1].usage_code}
        component_preview={
          <div className="p-4 px-7 rounded-md border border-cyan-700 bg-cyan-700/20">
            <p className="text-white">{color.hex || "#000000"}</p>
            <ReactPickColor color={color} setColor={setColor} />
          </div>
        }
        component_code={ColorPickersInfo[1].code}
        component_packages={ColorPickersInfo[1].packages}
      />
    </>
  );
};

export default page;
