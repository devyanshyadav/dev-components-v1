"use client";
import React, { useState } from "react";
import ComponentPreview from "@/app/Components/ComponentPreview";
import BaseModal from "@/app/Preview_components/Modal/BaseModal";
import ModalsInfo from "@/app/Preview_components/Modal/ModalsInfo";

const page = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <ComponentPreview
      component_name={ModalsInfo[0].title}
      component_details={ModalsInfo[0].details}
      component_preview={
        <BaseModal
          openModal={openModal}
          setOpenModal={setOpenModal}
          modalTitle="Modal Title"
          openBtn={
            <button className="bg-cyan-400 p-2 px-3 rounded-lg text-white active:scale-95 hover:bg-cyan-700/50">
              Open Modal
            </button>
          }
        >
          <div className="text-white font-semibold text-lg">Modal Content</div>
        </BaseModal>
      }
      component_code={ModalsInfo[0].code}
      component_packages={ModalsInfo[0].packages}
    />
  );
};

export default page;
