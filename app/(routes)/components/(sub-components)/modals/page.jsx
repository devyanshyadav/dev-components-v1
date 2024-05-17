"use client";
import React, { useState } from "react";
import ComponentPreview from "@/app/Components/ComponentPreview";
import ModalsInfo from "@/app/Preview_components/Modals/ModalsInfo";
import CustomModal from "@/app/Preview_components/Modals/CustomModal";
import ReactResponsiveModal from "@/app/Preview_components/Modals/ReactResponsiveModal";

const page = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openReactModal, setOpenReactModal] = useState(false);

  return (
    <>
      <ComponentPreview
        component_name={ModalsInfo[0].title}
        component_details={ModalsInfo[0].details}
        component_usage_code={ModalsInfo[0].usage_code}
        component_preview={
          <CustomModal
            openModal={openModal}
            setOpenModal={setOpenModal}
            modalTitle="Modal Title"
            openBtn={
              <button className="bg-cyan-400 p-2 px-3 rounded-lg text-white active:scale-95 hover:bg-cyan-700/50">
                Open Modal
              </button>
            }
          >
            <div className="text-white font-semibold text-lg">
              Modal Content
            </div>
          </CustomModal>
        }
        component_code={ModalsInfo[0].code}
        component_packages={ModalsInfo[0].packages}
      />
      <ComponentPreview
        component_name={ModalsInfo[1].title}
        component_details={ModalsInfo[1].details}
        component_usage_code={ModalsInfo[1].usage_code}
        component_preview={
          // Add this Css code to the css file of your project.
          // .customModal {
          //   background: transparent !important;
          //   box-shadow: none !important;
          // }
          <ReactResponsiveModal
            openModal={openReactModal}
            setOpenModal={setOpenReactModal}
            modalTitle="Modal Title"
            openBtn={
              <button className="bg-cyan-400 p-2 px-3 rounded-lg text-white active:scale-95 hover:bg-cyan-700/50">
                Open Modal
              </button>
            }
          >
            <div className="text-white font-semibold text-lg">
              Modal Content
            </div>
          </ReactResponsiveModal>
        }
        component_code={ModalsInfo[1].code}
        component_packages={ModalsInfo[1].packages}
      />
    </>
  );
};

export default page;
