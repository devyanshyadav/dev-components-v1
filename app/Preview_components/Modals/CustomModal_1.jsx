"use client";
// Modal as a separate component
import { useEffect, useRef } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";

function CustomModal_1({
  openModal,
  setOpenModal,
  children,
  openBtn,
  modalTitle,
}) {
  const ref = useRef();

  useEffect(() => {
    if (openModal) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [openModal]);

  return (
    <>
      <div className="w-fit" onClick={() => setOpenModal(true)}>
        {openBtn}
      </div>
      <dialog
        className="backdrop:bg-black/50 overflow-hidden relative flex-none bg-slate-700 md:w-[40vw] min-h-60 rounded-xl"
        ref={ref}
        onCancel={() => setOpenModal(false)}
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
      </dialog>
    </>
  );
}

export default CustomModal_1;
