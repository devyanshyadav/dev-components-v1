"use client";
import React from "react";
import ButtonsInfo from "@/app/Preview_components/Buttons/ButtonsInfo";
import ComponentPreview from "@/app/Components/ComponentPreview";
import CustomBtn from "@/app/Preview_components/Buttons/CustomBtn";
import CustomAsyncBtn from "@/app/Preview_components/Buttons/CustomAsyncBtn";
import DevButton from "@/app/Preview_components/Buttons/DevButton";
import { IoSearch } from "react-icons/io5";
import { MdCameraAlt } from "react-icons/md";
import { HiHome } from "react-icons/hi2";
import { IoIosArrowForward } from "react-icons/io";

const page = () => {
  return (
    <>
      <ComponentPreview
        component_name={ButtonsInfo[0].title}
        component_details={ButtonsInfo[0].details}
        component_preview={
          <CustomBtn
            onClick={() => {
              alert("This is Base Button");
            }}
          >
            Base Button
          </CustomBtn>
        }
        component_code={ButtonsInfo[0].code}
        component_usage_code={ButtonsInfo[0].usage_code}
        component_packages={ButtonsInfo[0].packages}
      />
      <ComponentPreview
        component_name={ButtonsInfo[1].title}
        component_details={ButtonsInfo[1].details}
        component_preview={
          <section className="space-y-4">
            <div className="space-y-2 bg-primary/50 p-3 border border-secondary/50 rounded-md">
              <h2 className="font-semibold text-white">Base Buttons</h2>
              <div className="flex gap-2 items-center flex-wrap">
                <DevButton type="solid">
                  {/* Default Solid  */}
                  Solid
                </DevButton>
                <DevButton type="border">Border</DevButton>
                <DevButton type="light">Light</DevButton>
                <DevButton type="flat">Flat</DevButton>
                <DevButton type="ghost">Ghost</DevButton>
              </div>
            </div>
            <div className="space-y-2 bg-primary/50 p-3 border border-secondary/50 rounded-md">
              <h2 className="font-semibold text-white">Ripples Effect</h2>
              <div className="flex gap-2 items-center flex-wrap">
                <DevButton type="solid" ripple={true}>
                  Solid
                </DevButton>
                <DevButton type="border" ripple={true}>
                  Border
                </DevButton>
                <DevButton type="light" ripple={true}>
                  Light
                </DevButton>
                <DevButton type="flat" ripple={true}>
                  Flat
                </DevButton>
                <DevButton type="ghost" ripple={true}>
                  Ghost
                </DevButton>
              </div>
            </div>
            <div className="space-y-2 bg-primary/50 p-3 border border-secondary/50 rounded-md">
              <h2 className="font-semibold text-white">Buttons Sizes</h2>
              <div className="flex gap-2 items-center flex-wrap">
                <DevButton type="solid" size="sm">
                  Size sm
                </DevButton>
                <DevButton type="solid" size="md">
                  Size md
                </DevButton>
                <DevButton type="solid" size="lg">
                  Size lg
                </DevButton>
              </div>
            </div>
            <div className="space-y-2 bg-primary/50 p-3 border border-secondary/50 rounded-md">
              <h2 className="font-semibold text-white">Buttons Roundness</h2>
              <div className="flex gap-2 items-center flex-wrap">
                <DevButton type="solid" rounded="none">
                  Rounded none
                </DevButton>
                <DevButton type="solid" rounded="sm">
                  Rounded sm
                </DevButton>
                <DevButton type="solid" rounded="md">
                  Rounded md
                </DevButton>
                <DevButton type="solid" rounded="lg">
                  Rounded lg
                </DevButton>
                <DevButton type="solid" rounded="full">
                  Rounded full
                </DevButton>
              </div>
            </div>
            <div className="space-y-2 bg-primary/50 p-3 border border-secondary/50 rounded-md">
              <h2 className="font-semibold text-white">Using as Link</h2>
              <div className="flex gap-2">
                <DevButton type="solid" href="/" target="_blank">
                  Button as Link
                </DevButton>
              </div>
            </div>
            <div className="space-y-2 bg-primary/50 p-3 border border-secondary/50 rounded-md">
              <h2 className="font-semibold text-white">Using with Icon</h2>
              <div className="flex gap-2">
                <DevButton type="solid" href="/" target="_blank">
                  <HiHome />
                  Home
                </DevButton>
                <DevButton type="solid" href="/" target="_blank">
                  Proceed
                  <IoIosArrowForward />
                </DevButton>
              </div>
            </div>
            <div className="space-y-2 bg-primary/50 p-3 border border-secondary/50 rounded-md">
              <h2 className="font-semibold text-white">Using as Icon</h2>
              <div className="flex gap-2 items-center flex-wrap">
                <DevButton type="solid" size="lg" icon={true}>
                  <IoSearch />
                </DevButton>
                <DevButton type="solid" size="lg" icon={true}>
                  <HiHome />
                </DevButton>
                <DevButton type="solid" size="lg" icon={true}>
                  <MdCameraAlt />
                </DevButton>
              </div>
            </div>
          </section>
        }
        component_code={ButtonsInfo[1].code}
        component_usage_code={ButtonsInfo[1].usage_code}
        component_packages={ButtonsInfo[1].packages}
      />

      <ComponentPreview
        component_name={ButtonsInfo[2].title}
        component_details={ButtonsInfo[2].details}
        component_preview={<CustomAsyncBtn />}
        component_code={ButtonsInfo[2].code}
        component_usage_code={ButtonsInfo[2].usage_code}
        component_packages={ButtonsInfo[2].packages}
      />
    </>
  );
};

export default page;
