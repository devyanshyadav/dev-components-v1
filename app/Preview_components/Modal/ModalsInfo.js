const ModalsInfo = [
  {
    title: "Custom Modal",
    details: {
      description:
        "A modal component that can be used to display content or prompts.",
      features: [
        "Displays a modal window with a title and content",
        "Provides an open and close button to toggle the modal",
        "Supports customization of the modal title and content",
        "Includes animations for opening and closing the modal",
        "Rendered as a portal to prevent layout issues",
      ],
      props: [
        {
          propName: "children",
          propExample: "<div>Modal Content</div>",
          propDetail: "The content to be displayed inside the modal.",
        },
        {
          propName: "openModal",
          propExample: "true",
          propDetail:
            "A boolean value indicating whether the modal should be open or closed.",
        },
        {
          propName: "setOpenModal",
          propExample: "setOpenModal",
          propDetail:
            "A function to update the openModal state and toggle the modal.",
        },
        {
          propName: "openBtn",
          propExample: "<button>Open Modal</button>",
          propDetail:
            "A React element representing the button or component that opens the modal.",
        },
        {
          propName: "modalTitle",
          propExample: '"Modal Title"',
          propDetail: "The title to be displayed in the modal header.",
        },
      ],
      doc_links:[],
      packages: [
        {
          pckg_name: "framer-motion",
          pckg_link: "https://www.framer.com/motion/",
        },
        {
          pckg_name: "react-icons",
          pckg_link: "https://react-icons.github.io/react-icons/",
        },
      ],
    },
    usage_code: `
    import CustomModal from "@/app/dev_components/CustomModal";
    import React, { useState } from "react";
    
    const page = () => {
      const [openModal, setOpenModal] = useState(false);
    
      return (
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
          <div className="text-white font-semibold text-lg">Modal Content</div>
        </CustomModal>
      );
    };
    
    export default page;
        `,
    code: `
    import React, { useEffect, useState } from "react";
    import { createPortal } from "react-dom";
    import { IoIosCloseCircleOutline } from "react-icons/io";
    import { motion } from "framer-motion";
    
    const CustomModal = ({
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
    
    export default CustomModal;
    `,
  },
];

export default ModalsInfo;
