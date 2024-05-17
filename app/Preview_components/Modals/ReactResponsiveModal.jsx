"use client";
import React from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { IoIosCloseCircleOutline } from "react-icons/io";

const ReactResponsiveModal = ({
  openBtn,
  openModal,
  setOpenModal,
  children,
}) => {
  return (
    <div>
      <div onClick={() => setOpenModal(true)}>{openBtn}</div>
      <Modal
        closeIcon={" "}
        classNames={{
          modal: "customModal",
        }}
        open={openModal}
        onClose={() => setOpenModal(false)}
        center
      >
        <section className="relative min-w-[90vw] flex flex-col md:min-w-[40vw] min-h-60 rounded-xl shadow-md bg-slate-700 overflow-hidden">
          <div className="w-full  bg-cyan-700/20 font-semibold flex items-center justify-between relative">
            <h3 className="p-3 text-cyan-400">hello</h3>
            <IoIosCloseCircleOutline
              onClick={() => setOpenModal(false)}
              className="absolute top-3 right-3 text-2xl cursor-pointer text-cyan-400 hover:text-cyan-400/50"
            />
          </div>
          <div className="flex items-center justify-center flex-1">
            {children}
          </div>
        </section>
      </Modal>
    </div>
  );
};

export default ReactResponsiveModal;
