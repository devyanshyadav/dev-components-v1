"use client";
import { create } from "zustand";
import ButtonsInfo from "../Preview_components/Buttons/ButtonsInfo";
import countObjects from "./utils/countObjects";
import AccordionsInfo from "../Preview_components/Accordions/AccordionsInfo";
import CheckBoxesInfo from "../Preview_components/CheckBoxes/CheckBoxesInfo";
import RadiosInfo from "../Preview_components/Radios/RadiosInfo";
import RangeSliderInfo from "../Preview_components/RangeSlider/RangeSlidersInfo";
import ModalsInfo from "../Preview_components/Modals/ModalsInfo";
import TooltipsInfo from "../Preview_components/Tooltips/TooltipsInfo";
import TogglesInfo from "../Preview_components/Toggle/TogglesInfo";
import TabsInfo from "../Preview_components/Tabs/TabsInfo";
import CarouselsInfo from "../Preview_components/Carousels/CarouselsInfo";
import DropdownsInfo from "../Preview_components/Dropdowns/DropdownsInfo";
import NavbarsInfo from "../Preview_components/Navbars/NavbarsInfo";
import ColorPickersInfo from "../Preview_components/ColorPickers/ColorPickersInfo";
import InputsInfo from "../Preview_components/Inputs/InputsInfo";
import PopoversInfo from "../Preview_components/Popovers/PopoversInfo";
import ClipboardsInfo from "../Preview_components/Clipboards/ClipboardsInfo";
import EmojiPickersInfo from "../Preview_components/EmojiPickers/EmojiPickersInfo";

const useDevStore = create((set, get) => ({
  ThemeColors: {
    primary: "#212B34",
    secondary: "#00ADB4",
    accent: "#01FFF5",
    text: "#FFFFFF",
  },

  SideBar: true,

  SideBarToggle: () => {
    set((state) => ({ SideBar: !state.SideBar }));
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
      name: "Responsive Navbars",
      image: "/svg_icons/nav.png",
      components_no: countObjects(NavbarsInfo),
      description: "A navbar provides navigation options to users.",
      url: "/components/navbars",
    },
    {
      name: "Range Sliders",
      image: "/svg_icons/range.png",
      components_no: countObjects(RangeSliderInfo),
      description:
        "A range slider component that allows users to select a value within a specific range.",
      url: "/components/range-sliders",
    },
    {
      name: "Modals",
      image: "/svg_icons/modal.png",
      components_no: countObjects(ModalsInfo),
      description:
        "A modal component that can be used to display content or prompts.",
      url: "/components/modals",
    },
    {
      name: "Tooltips",
      image: "/svg_icons/tooltip.png",
      components_no: countObjects(TooltipsInfo),
      description:
        "A tooltip component that displays additional information or a helpful message when hovering over an element.",
      url: "/components/tooltips",
    },
    {
      name: "Toggle",
      image: "/svg_icons/toggle.png",
      components_no: countObjects(TogglesInfo),
      description:
        "A toggle component that allows users to turn an option on or off.",
      url: "/components/toggles",
    },
    {
      name: "Tabs",
      image: "/svg_icons/tab.png",
      components_no: countObjects(TabsInfo),
      description:
        " A tab component that allows users to navigate between different sections of content.",
      url: "/components/tabs",
    },
    {
      name: "Carousels",
      image: "/svg_icons/carousel.png",
      components_no: countObjects(CarouselsInfo),
      description:
        " A carousels component that allows users to navigate between different sections of content.",
      url: "/components/carousels",
    },
    {
      name: "Dropdowns",
      image: "/svg_icons/dropdown.png",
      components_no: countObjects(DropdownsInfo),
      description: "A dropdown that allows to select an option from a list.",
      url: "/components/dropdowns",
    },
    {
      name: "Color Pickers",
      image: "/svg_icons/color-picker.png",
      components_no: countObjects(ColorPickersInfo),
      description: "A color picker that allows to select and choose colors",
      url: "/components/color-pickers",
    },
    {
      name: "Inputs",
      image: "/svg_icons/input.png",
      components_no: countObjects(InputsInfo),
      description:
        "A Input component that allows to input values in different formats",
      url: "/components/inputs",
    },
    {
      name: "Popovers",
      image: "/svg_icons/popover.svg",
      components_no: countObjects(PopoversInfo),
      description: "A Popover component that use to display content on trigger",
      url: "/components/popovers",
    },
    {
      name: "Clipboards",
      image: "/svg_icons/clipboard.svg",
      components_no: countObjects(ClipboardsInfo),
      description:
        "A Clipboard component that allows users to copy text to their clipboard on click",
      url: "/components/clipboards",
    },
    {
      name: "Emoji Pickers",
      image: "/svg_icons/emoji-picker.svg",
      components_no: countObjects(EmojiPickersInfo),
      description:
        "A Emoji Picker component that allows users to add emojis to their text",
      url: "/components/emoji-pickers",
    },
  ],
}));

export default useDevStore;
