"use client";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { motion } from "framer-motion";

const BaseModal = ({
  children,
  openModal,
  setOpenModal,
  openBtn,
  modalTitle,
}) => {
  const [mounted, setMounted] = useState(false);
  const mainVariants = {
    open: { visibility: "visible", opacity: 1 },
    close: {
      opacity: 0,
      transitionEnd: {
        visibility: "hidden",
      },
    },
  };
  const sectionVariants = {
    open: { scale: 1 },
    close: { scale: 0.95 },
  };

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <>
      <div className="w-fit" onClick={() => setOpenModal(true)}>
        {openBtn}
      </div>

      {mounted &&
        createPortal(
          <motion.main
            animate={openModal ? "open" : "close"}
            variants={mainVariants}
            transition={{ duration: 0.2 }}
            onClick={() => setOpenModal(false)}
            initial={{ visibility: "hidden", opacity: 0 }}
            className="bg-black/50 z-50 fixed filter backdrop-blur-sm inset-0 h-screen w-screen grid place-content-center"
          >
            <motion.section
              animate={openModal ? "open" : "close"}
              variants={sectionVariants}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-[90vw] flex flex-col md:w-[40vw] min-h-60 rounded-xl shadow-md bg-slate-700 overflow-hidden"
            >
              <div className="w-full  bg-cyan-700/20 font-semibold flex items-center justify-between relative">
                <h3 className="p-3 text-cyan-400">{modalTitle}</h3>
                <IoIosCloseCircleOutline
                  onClick={() => setOpenModal(false)}
                  className="absolute top-3 right-3 text-2xl cursor-pointer text-cyan-400 hover:text-cyan-400/50"
                />
              </div>
              <div className="flex items-center justify-center flex-1">
                {children}
              </div>
            </motion.section>
          </motion.main>,
          document.body
        )}
    </>
  );
};

export default BaseModal;
