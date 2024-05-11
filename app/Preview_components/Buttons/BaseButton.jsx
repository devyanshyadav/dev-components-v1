import React from "react";

const BaseButton = ({ children = "Base Button", ...props }) => {
  return (
    <button {...props} className="p-2 px-3 bg-cyan-500 select-none hover:bg-cyan-700 text-white rounded-xl font-semibold active:scale-95 transition-all">
      {children}
    </button>
  );
};

export default BaseButton;
