"use client";
import { create } from "zustand";

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
      description: 2,
      url: "/components/buttons",
    },
    {
      name: "Accordions",
      image: "/svg_icons/accordion.png",
      description:1,
      url: "/components/accordions",
    },
    {
      name: "Checkboxes",
      image: "/svg_icons/checkbox.png",
      description:1,
      url: "/components/checkboxes",
    },
    {
      name: "Radios",
      image: "/svg_icons/radio.png",
      description:1,
      url: "/components/radios",
    },
  ],
}));

export default useDevStore;
