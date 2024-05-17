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
      doc_links: [],
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
  {
    title: "React Responsive Modal",

    details: {
      description:
        "A customizable modal component for displaying content in a separate overlay window.",
      features: [
        "Can be opened and closed programmatically",
        "Accepts custom button for opening the modal",
        "Allows passing of custom content",
        "Stylized with CSS for transparency and no box shadow",
      ],
      props: [
        {
          propName: "openModal",
          propExample: `useState(false);`,
          propDetail:
            "A boolean state variable controlling whether the modal is open or not.",
        },
        {
          propName: "setOpenModal",
          propExample: `setOpenModal;`,
          propDetail:
            "A function to update the `openModal` state, allowing control over the modal's visibility.",
        },
        {
          propName: "modalTitle",
          propExample: `"Modal Title";`,
          propDetail:
            "A string representing the title of the modal, displayed at the top.",
        },
        {
          propName: "openBtn",
          propExample: `<button className="...">Open Modal</button>;`,
          propDetail:
            "A JSX element representing the button used to open the modal.",
        },
      ],
      packages: [
        {
          pckg_name: "react-responsive-modal",
          pckg_link: "https://www.npmjs.com/package/react-responsive-modal",
        },
        {
          pckg_name: "react-icons",
          pckg_link: "https://react-icons.github.io/react-icons/",
        },
      ],
      doc_links: ["https://www.npmjs.com/package/react-responsive-modal"],
    },

    usage_code: `import CustomModal from "@/app/dev_components/CustomModal";
    import React, { useState } from "react";

    // Add this Css code to the css file of your project.
    // .customModal {
    //   background: transparent !important;
    //   box-shadow: none !important;
    // }

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
            <section className="relative min-w-72 flex flex-col md:min-w-[40vw] min-h-60 rounded-xl shadow-md bg-slate-700 overflow-hidden">
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
    `,
  },
];

export default ModalsInfo;
