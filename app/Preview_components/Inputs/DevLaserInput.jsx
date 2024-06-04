"use client";
import clsx from "clsx";
import React, { useState } from "react";

const DevLaserInput = ({
  size = "md",
  rounded = "full",
  laserColor = "#01FFF5",
  icon,
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [childPosition, setChildPosition] = useState(0);
  const [childColor, setChildColor] = useState(
    `linear-gradient(to right, transparent, ${laserColor}, transparent)`
  );
  const handleMouseMove = (e) => {
    const parentRect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - parentRect.left - 50;

    if (x < 0) {
      setChildPosition(0);
      setChildColor(
        `linear-gradient(to right, ${laserColor}, ${laserColor}, transparent)`
      );
    } else if (x > parentRect.width - 100) {
      setChildPosition(parentRect.width - 96);
      setChildColor(
        `linear-gradient(to right, transparent, ${laserColor}, ${laserColor})`
      );
    } else {
      setChildPosition(x);
      setChildColor(
        `linear-gradient(to right, transparent, ${laserColor} 50%, transparent)`
      );
    }
  };
  const InputSizes = {
    sm: "h-8",
    md: "h-10",
    lg: "h-12",
  };
  const InputRoundness = {
    none: "rounded-none",
    sm: "rounded-md",
    md: "rounded-xl",
    full: "rounded-full",
  };
  const InputSize = InputSizes[size] || InputSizes.md;
  const InputRounded = InputRoundness[rounded] || InputRoundness.md;

  return (
    <div
      className={clsx(
        InputSize,
        InputRounded,
        "relative w-full overflow-hidden"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <span
        className={clsx(
          "absolute top-0 bottom-0 w-24 rounded-lg transition-colors duration-500",
          isHovered ? "block" : "hidden"
        )}
        style={{
          left: `${childPosition}px`,
          background: childColor,
        }}
      />

      <div
        className={clsx(
          InputRounded,
          "absolute text-sm px-2 inset-[2px] flex items-center justify-center flex-grow text-slate-300 border border-cyan-700/70 bg-slate-800 gap-2  outline outline-cyan-700/20",
          props.className
        )}
      >
        {icon && <span className={clsx("z-10", laserColor)}>{icon}</span>}
        <input
          spellCheck="false"
          {...props}
          className="w-full outline-none bg-transparent"
        />
      </div>
    </div>
  );
};

export default DevLaserInput;
