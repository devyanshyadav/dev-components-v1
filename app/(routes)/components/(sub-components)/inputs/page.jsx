"use client";
import React from "react";
import ComponentPreview from "@/app/Components/ComponentPreview";
import DevInput from "@/app/Preview_components/Inputs/DevInput";
import { FiSearch } from "react-icons/fi";
import InputsInfo from "@/app/Preview_components/Inputs/InputsInfo";
import DevLaserInput from "@/app/Preview_components/Inputs/DevLaserInput";

const page = () => {
  return (
    <>
      <ComponentPreview
        component_name={InputsInfo[0].title}
        component_details={InputsInfo[0].details}
        component_usage_code={InputsInfo[0].usage_code}
        component_preview={
          <div className="space-y-4 flex flex-col gap-2">
            <section className="text-white space-y-2 bg-slate-700/50 p-3 rounded-md border border-cyan-700">
              <h2 className="text-sm font-light text-cyan-400">
                Variants (base/ bordered/ faded/ underline)
              </h2>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-2 w-full ">
                <DevInput
                  type="text"
                  labelName="Search"
                  variant="base"
                  placeholder="Enter product name"
                  icon={<FiSearch />}
                />
                <DevInput
                  type="text"
                  labelName="Search"
                  variant="bordered"
                  placeholder="Enter product name"
                  icon={<FiSearch />}
                />
                <DevInput
                  type="text"
                  variant="faded"
                  labelName="Search"
                  placeholder="Enter product name"
                  icon={<FiSearch />}
                />
                <DevInput
                  type="text"
                  labelName="Search"
                  variant="underline"
                  placeholder="Enter product name"
                  icon={<FiSearch />}
                />
              </div>
            </section>
            <section className="text-white space-y-2 bg-slate-700/50 p-3 rounded-md border border-cyan-700">
              <h2 className="text-sm font-light text-cyan-400">
                Sizes (sm/ md/ lg)
              </h2>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-2 w-full ">
                <DevInput
                  type="text"
                  labelName="Search"
                  size="sm"
                  placeholder="Enter product name"
                  icon={<FiSearch />}
                />
                <DevInput
                  type="text"
                  labelName="Search"
                  size="md"
                  placeholder="Enter product name"
                  icon={<FiSearch />}
                />
                <DevInput
                  type="text"
                  labelName="Search"
                  size="lg"
                  placeholder="Enter product name"
                  icon={<FiSearch />}
                />
              </div>
            </section>
            <section className="text-white space-y-2 bg-slate-700/50 p-3 rounded-md border border-cyan-700">
              <h2 className="text-sm font-light text-cyan-400">
                Roundness (none/ sm/ md/ lg/full)
              </h2>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-2 w-full ">
                <DevInput
                  type="text"
                  rounded="none"
                  labelName="Search"
                  placeholder="Enter product name"
                  icon={<FiSearch />}
                />
                <DevInput
                  type="text"
                  rounded="sm"
                  labelName="Search"
                  placeholder="Enter product name"
                  icon={<FiSearch />}
                />
                <DevInput
                  type="text"
                  rounded="md"
                  labelName="Search"
                  placeholder="Enter product name"
                  icon={<FiSearch />}
                />

                <DevInput
                  type="text"
                  labelName="Search"
                  rounded="full"
                  placeholder="Enter product name"
                  icon={<FiSearch />}
                />
              </div>
            </section>
          </div>
        }
        component_code={InputsInfo[0].code}
        component_packages={InputsInfo[0].packages}
      />
      <ComponentPreview
        component_name={InputsInfo[1].title}
        component_details={InputsInfo[1].details}
        component_usage_code={InputsInfo[1].usage_code}
        component_preview={
          <div className="md:w-1/2 w-full">
            <DevLaserInput
              type="text"
              rounded="full"
              size="lg"
              placeholder="Enter name"
            />
          </div>
        }
        component_code={InputsInfo[1].code}
        component_packages={InputsInfo[1].packages}
      />
    </>
  );
};

export default page;
