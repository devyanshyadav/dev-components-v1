"use client";
import clsx from "clsx";
import React, { useState } from "react";

const DevInput = ({
  variant = "base",
  size = "md",
  labelName,
  ripple = false,
  icon,
  rounded = "full",
  reverseIcon = false,
  children,
  ...props
}) => {
  const [active, setActive] = useState(false);
  const commonStyle = "w-full flex items-center gap-2 text-white ";
  const inputVariants = {
    base: clsx(
      "bg-slate-800 border border-cyan-700 outline-cyan-700 rounded-full"
    ),
    bordered:
      "bg-transparent border border-cyan-700 outline-cyan-700 rounded-full",
    faded:
      "bg-cyan-700/20 border border-cyan-700 outline-cyan-700 rounded-full",
    underline: clsx(
      " border-b-4 border-cyan-700 outline-none relative after:content-[''] after:absolute after:h-[3px] after:bg-cyan-400 after:-bottom-1 after:w-full after:scale-x-0  after:transition after:duration-300 after:origin-center rounded-none px-0",
      active && "after:scale-x-100"
    ),
  };

  const inputRoundness = {
    none: "rounded-none",
    sm: "rounded-md",
    md: "rounded-lg",
    lg: "rounded-xl",
    full: "rounded-full",
  };

  const inputSizes = {
    sm: "p-1 px-2",
    md: "p-2 px-2",
    lg: "p-3 px-4",
  };
  const inputSize = inputSizes[size] || inputSizes.md;
  const inputVariant = inputVariants[variant] || inputVariants.base;
  const inputRound = inputRoundness[rounded] || inputRoundness.full;

  return (
    <div>
      {labelName && (
        <label
          htmlFor={labelName}
          className={clsx("text-sm text-white ", active && "!text-cyan-400")}
        >
          {labelName}
        </label>
      )}

      <div
        className={clsx(
          active && "outline outline-2",
          inputSize,
          commonStyle,
          inputRound,
          inputVariant
        )}
      >
        <span className="text-xl text-cyan-400">{icon}</span>
        <input
          id={labelName && labelName}
          onFocus={() => setActive(true)}
          onBlur={() => setActive(false)}
          {...props}
          className="focus:bg-transparent rounded-xl px-1 bg-transparent text-sm text-white outline-none w-full"
        />
      </div>
    </div>
  );
};

export default DevInput;
