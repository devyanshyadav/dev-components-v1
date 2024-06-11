"use client";
import React, { useEffect, useState, useRef, useId } from "react";
import { Tooltip as Popover } from "react-tooltip";
import { motion } from "framer-motion";
import { createPortal } from "react-dom";

const DevPopover2 = ({ children="Popover Content", popButton, contentClick = true }) => {
  const [mounted, setMounted] = useState(false);
  const popoverRef = useRef(null);
  const randomId = useId();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setMounted(false);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <div>
      {mounted &&
        createPortal(
          <Popover
            clickable={mounted ? true : false}
            events={["click"]}
            isOpen
            id={randomId}
            place="bottom"
            offset={1} opacity={1}
            style={{
              backgroundColor: "transparent",
              padding: "0px",
              zIndex: 1000,
            }}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.2 }}
              ref={popoverRef}
              onClick={() => {
                if (contentClick) {
                  setMounted(!mounted);
                }
              }}
              className="origin-top hidden md:block min-h-4 bg-slate-800 shadow-md border border-cyan-700/50 min-w-36 z-50 rounded-lg p-1"
            >
              {children && children}
            </motion.div>
            <motion.div
              initial={{ translateY: "100%" }}
              animate={{ translateY: "0%" }}
              exit={{ translateY: "100%" }}
              transition={{ duration: 0.2 }}
              ref={popoverRef}
              onClick={() => {
                if (contentClick) {
                  setMounted(!mounted);
                }
              }}
              className="bg-slate-800 shadow-md border border-cyan-700/50 min-w-36 rounded-lg p-1  flex-col z-50 block fixed bottom-0 left-0 right-0 md:hidden min-h-4 text-lg"
            >
              <hr className="w-1/4 m-1 h-2 mx-auto border-none rounded-full bg-cyan-700/50" />
              {children && children}
            </motion.div>
          </Popover>,
          document.body
        )}
      <div onClick={() => setMounted(!mounted)} data-tooltip-id={randomId}>
        {popButton}
      </div>
    </div>
  );
};

export default DevPopover2;
