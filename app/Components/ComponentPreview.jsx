"use client";
import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import CopyCode from "./CopyCode";
import { FaCheck } from "react-icons/fa6";
import { IoCopy } from "react-icons/io5";

const ComponentPreview = ({
  component_code,
  component_preview,
  component_details,
  component_name,
}) => {
  const [CurrTab, setCurrTab] = useState(0);
  const [copyCode, setCopyCode] = useState(false);
  const [copyNPM, setCopyNPM] = useState(false);
  const codeString = component_code;
  return (
    <div className="w-full">
      <h3 className="font-semibold text-white/80 text-xl">#{component_name}</h3>

      <div className="w-full h-64 bg-primary rounded-lg p-3 overflow-hidden relative flex flex-col">
        <ul className="w-full flex items-center gap-5 text-white/80 text-sm   ">
          {["Preview", "Code", "Details"].map((item, index) => (
            <li
              key={index}
              onClick={() => setCurrTab(index)}
              className={`hover:text-accent select-none cursor-pointer border-transparent border-b-2 hover:border-accent z-10 ${
                CurrTab === index && "border-accent text-accent"
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
        <hr className="transform -translate-y-[2px] border-0 h-[2px] bg-secondary/50" />
        <CopyCode
          textToCopy={codeString}
          copied={copyCode}
          setCopied={setCopyCode}
        >
          <button className="bg-secondary/20 text-accent border border-secondary absolute top-0 select-none right-0 rounded-bl-xl rounded-tr-xl p-1 px-3 text-sm font-semibold cursor-pointer hover:bg-secondary">
            {copyCode ? "Copied!" : "Copy"}
          </button>
        </CopyCode>
        {CurrTab == 0 ? (
          <div className="flex-1 w-full svg-pattern-dots rounded-xl grid place-content-center">
            {component_preview}
          </div>
        ) : CurrTab == 1 ? (
          <SyntaxHighlighter
            className="text-sm text-wrap er"
            language="javascript"
            style={atomOneDark}
            wrapLines={true}
            wrapLongLines={true}
          >
            {codeString}
          </SyntaxHighlighter>
        ) : (
          <div className="flex-1 w-full p-4 overflow-y-scroll space-y-4 text-white font-light">
            <h2 className="text-accent bg-secondary/20 px-2 text-sm rounded-lg w-fit">
              {component_details.description}
            </h2>
            <h3 className="font-semibold text-secondary">
              Packages: {component_details.packages.length}
            </h3>
            {component_details.packages.length > 0 && (
              <code className="text-sm bg-secondary/20 text-accent w-fit p-1 border border-secondary px-2 rounded-lg">
                npm i {component_details.packages.map((item) => item + " ")}
                <CopyCode
                  textToCopy={
                    "npm i " +
                    component_details.packages.map((item) => item + " ")
                  }
                  copied={copyNPM}
                  setCopied={setCopyNPM}
                >
                  <button className="bg-secondary/20 text-accent rounded-md p-1 aspect-square translate-y-[2px]">
                    {copyNPM ? <FaCheck /> : <IoCopy />}
                  </button>
                </CopyCode>
              </code>
            )}

            <h3 className="font-semibold text-secondary">Features</h3>
            <ul className="text-sm font-light list-disc list-inside list-accent marker:text-accent">
              {component_details.features.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h3 className="font-semibold text-secondary flex  gap-3 items-center">Props <p className="text-xs font-light">( More props can be added on the basis of the requirements )</p></h3>
            <ul className="text-sm font-light list-disc list-inside list-accent marker:text-accent">
              {component_details.props.map((item, index) => (
                <li key={index}>
                  {" "}
                  <code className="bg-secondary/20 text-accent px-2 rounded-sm">{`${item.propName}={ ${item.propExample} }`}</code>{" "}
                  {` // ${item.propDetail}`}{" "}
                </li>
              ))}
            </ul>
            <h3 className="font-semibold text-secondary">Usage</h3>
            <SyntaxHighlighter
              className="text-sm text-wrap "
              language="javascript"
              style={atomOneDark}
              wrapLines={true}
              wrapLongLines={true}
            >
              {component_details.usage_code}
            </SyntaxHighlighter>
          </div>
        )}
      </div>
    </div>
  );
};

export default ComponentPreview;
