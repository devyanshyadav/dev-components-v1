const color = {
  rgb: {
    r: "${color.rgb.r}",
    g: "${color.rgb.g}",
    b: "${color.rgb.b}",
    a: "${color.rgb.a}",
  },
};

const ColorPickersInfo = [
  {
    title: "React Color",
    details: {
      description:
        "A color picker component that integrates with react-color's SketchPicker, providing a customizable and interactive way to select colors.",
      features: [
        "Interactive color selection using SketchPicker",
        "Supports RGB, HEX, HSL, and HSV color formats",
        "Customizable appearance through styled-components",
        "Tooltip as popover for color preview",
        "Alpha channel support for RGBA colors",
      ],
      props: [
        {
          propName: "color",
          propExample: "{ hex: '#F17013' }",
          propDetail:
            "The current color state passed down from the parent component. It includes properties such as hex, rgb, hsl, and hsv.",
        },
        {
          propName: "setColor",
          propExample: "(color) => {}",
          propDetail:
            "A callback function used to update the color state in the parent component. It receives the new color object as its argument.",
        },
      ],
      packages: [
        {
          pckg_name: "react-color",
          pckg_link: "https://www.npmjs.com/package/react-color",
        },
        {
          pckg_name: "react-tooltip",
          pckg_link: "https://www.npmjs.com/package/react-tooltip",
        },
        {
          pckg_name: "styled-components",
          pckg_link: "https://styled-components.com/",
        },
      ],
    },

    doc_links: ["https://casesandberg.github.io/react-color/"],

    usage_code: `
    import ReactColor from "@/app/Preview_components/ColorPickers/ReactColor";
    import React, { useState } from "react";
    
    const page = () => {
      const [color, setColor] = useState({
        hex: "#F17013",
      });
      // here setColor will get a color object with {hex, hsl, rgb, hsv} properties
    
      return (
       <div className="p-4 px-7 rounded-md border border-cyan-700 bg-cyan-700/20">
         <p className="text-white">{color.hex || "#000000"}</p>
         <ReactColor color={color} setColor={setColor} />
       </div>
      );
    };
    
    export default page;
    `,
    code: `
      import { useEffect, useState } from "react";
      import { SketchPicker } from "react-color";
      import { createPortal } from "react-dom";
      import { Tooltip as PopOver } from "react-tooltip";
      import styled from "styled-components";
      
      const PickerDiv = styled.div\`
        .sketch-picker {
          border-radius: 10px !important;
        }
        .sketch-picker div,
        .sketch-picker input {
          border-radius: 6px !important;
          font-weight: 500 !important;
          color: black !important;
        }
      \`;
      
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
                offset={2}
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
                  ? \`rgba(${color.rgb.r},${color.rgb.g},${color.rgb.b},${color.rgb.a})\`
                  : color.hex,
              }}
            ></button>
          </>
        );
      };
      
      export default ReactColor;
      `,
  },
  {
    title: "React Pick Color",
    details: {
      description:
        "A color picker component that integrates with react-color's SketchPicker, providing a customizable and interactive way to select colors.",
      features: [
        "Interactive color selection using SketchPicker",
        "Supports RGB, HEX, HSL, and HSV color formats",
        "Customizable appearance through styled-components",
        "Tooltip as popover for color preview",
        "Alpha channel support for RGBA colors",
      ],
      props: [
        {
          propName: "color",
          propExample: "{ hex: '#F17013' }",
          propDetail:
            "The current color state passed down from the parent component. It includes properties such as hex, rgb, hsl, and hsv.",
        },
        {
          propName: "setColor",
          propExample: "(color) => {}",
          propDetail:
            "A callback function used to update the color state in the parent component. It receives the new color object as its argument.",
        },
      ],
      packages: [
        {
          pckg_name: "react-color",
          pckg_link: "https://www.npmjs.com/package/react-pick-color",
        },
        {
          pckg_name: "react-tooltip",
          pckg_link: "https://www.npmjs.com/package/react-tooltip",
        },
        {
          pckg_name: "styled-components",
          pckg_link: "https://styled-components.com/",
        },
      ],
    },

    doc_links: [
      "https://react-pick-color.vercel.app/?path=/story/colorpicker--with-dark-theme",
    ],

    usage_code: `
    import ReactPickColor from "@/app/Preview_components/ColorPickers/ReactPickColor";
    import React, { useState } from "react";
    
    const page = () => {
      const [color, setColor] = useState({
        hex: "#F17013",
      });
      // here setColor will get a color object with {hex, hsl, rgb, hsv} properties
    
      return (
       <div className="p-4 px-7 rounded-md border border-cyan-700 bg-cyan-700/20">
         <p className="text-white">{color.hex || "#000000"}</p>
         <ReactPickColor color={color} setColor={setColor} />
       </div>
      );
    };
    
    export default page;
    `,
    code: `
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
                    ? \`rgba(${color.rgb.r},${color.rgb.g},${color.rgb.b},${color.rgb.a})\`
                    : color.hex,
                }}
              ></button>
            </>
          );
        };
        
        export default ReactPickColor;
        `,
  },
];

export default ColorPickersInfo;
