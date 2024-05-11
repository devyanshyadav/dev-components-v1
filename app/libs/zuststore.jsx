"use client";
import { create } from "zustand";
import ButtonsInfo from "../Preview_components/Buttons/ButtonsInfo";
import countObjects from "./utils/countObjects";
import AccordionsInfo from "../Preview_components/Accordion/AccordionsInfo";
import CheckBoxesInfo from "../Preview_components/CheckBoxes/CheckBoxesInfo";
import RadiosInfo from "../Preview_components/Radio/RadiosInfo";

const useDevStore = create((set, get) => ({
  ThemeColors: {
    primary: "#212B34",
    secondary: "#00ADB4",
    accent: "#01FFF5",
    text: "#FFFFFF",
  },
  ComponentData: [
    {
      name: "Buttons",
      image: "/svg_icons/button.png",
      components_no: countObjects(ButtonsInfo),
      description:
        "Buttons enable users to execute actions and make selections with a simple tap.",
      url: "/components/buttons",
    },
    {
      name: "Accordions",
      image: "/svg_icons/accordion.png",
      components_no: countObjects(AccordionsInfo),
      description:
        "An accordion is a UI component that allows users to show/hide content by clicking on headers.",

      url: "/components/accordions",
    },
    {
      name: "Checkboxes",
      image: "/svg_icons/checkbox.png",
      components_no: countObjects(CheckBoxesInfo),
      description:
        "A checkbox is used for boolean selection, allowing users to indicate choices by toggling a checked state.",

      url: "/components/checkboxes",
    },
    {
      name: "Radios",
      image: "/svg_icons/radio.png",
      components_no: countObjects(RadiosInfo),
      description:
        "A radio button allows users to select a single option from a set of mutually exclusive choices.",
      url: "/components/radios",
    },
    {
      name: "Responsive Navbar",
      image: "/svg_icons/nav.png",
      components_no: countObjects(RadiosInfo),
      description:
        "A navbar provides navigation options to users.",
      url: "/components/navbar",
    },
  ],
}));

export default useDevStore;
