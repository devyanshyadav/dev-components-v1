"use client";
import React from "react";

const CopyCode = ({ textToCopy, copied, setCopied, children }) => {

  const handleCopy = () => {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((error) => {
        console.error("Failed to copy text to clipboard:", error);
      });
  };

  return (
    <span onClick={handleCopy}>
      {children}
    </span>
  )
};

export default CopyCode;
