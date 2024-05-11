'use client'
import useDevStore from "@/app/libs/zuststore";
import React from "react";

const layout = ({ children }) => {
  return (
    <>
      <div>
        <h1 className="text-3xl font-semibold text-white">Button</h1>
        <p className="text-white/70">
          Buttons allow users to perform actions and choose with a single tap.
        </p>
      </div>
      {children}
    </>
  );
};

export default layout;