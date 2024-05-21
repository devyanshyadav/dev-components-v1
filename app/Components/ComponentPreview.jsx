"use client";
import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import CopyCode from "./CopyCode";
import { FaCheck } from "react-icons/fa6";
import { IoCopy } from "react-icons/io5";
import Link from "next/link";
import { GoLinkExternal } from "react-icons/go";

const ComponentPreview = ({
  component_code,
  component_preview,
  component_details,
  component_name,
  component_usage_code,
}) => {
  const [CurrTab, setCurrTab] = useState(0);
  const [copyCode, setCopyCode] = useState(false);
  const [copyNPM, setCopyNPM] = useState(false);
  const codeString = component_code;
  const usageCodeString = component_usage_code;

  return (
    <div className="w-full">
      <h3 className="font-semibold flex items-center gap-4 text-white/80 text-xl">
        # {component_name}{" "}
        {component_details.doc_links &&
          component_details.doc_links.length > 0 &&
          component_details.doc_links.map((item, index) => (
            <Link
              target="_blank"
              key={index}
              href={item}
              className="p-1 gap-2 hover:opacity-80 text-xs flex items-center justify-center w-fit px-2 rounded-md border border-secondary bg-secondary/40 text-accent"
            >
              Docs <GoLinkExternal />
            </Link>
          ))}
      </h3>

      <div className="w-full mt-2 p-3 pt-0 overflow-y-scroll [&::-webkit-scrollbar]:hidden [&::-webkit-scrollbar-track]:hidden [&::-webkit-scrollbar-thumb]:hidden max-h-96 min-h-56 bg-primary rounded-lg overflow-hidden relative flex flex-col">
        <ul className="w-full p-3 pb-0 flex items-center backdrop-blur-lg  gap-5 text-white/80 text-sm sticky top-0 z-0   ">
          {["Preview", "Code", "Usage", "Details"].map((item, index) => (
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
          <li key={"copy-code"}>
            <CopyCode
              textToCopy={CurrTab == 2 ? usageCodeString : codeString}
              copied={copyCode}
              setCopied={setCopyCode}
            >
              <button className="bg-secondary/20 text-accent border border-secondary absolute  select-none top-0 -right-3 rounded-bl-lg rounded-tr-lg z-50 p-1 px-3 text-sm font-semibold cursor-pointer hover:bg-secondary">
                {copyCode ? "Copied!" : "Copy"}
              </button>
            </CopyCode>
          </li>
          <li key={"bottom-line"}>
            <hr className="transform absolute  border-0 right-0 left-0 h-[2px] bottom-0 bg-gradient-to-r from-secondary to-primary" />
          </li>
        </ul>

        {CurrTab == 0 ? (
          <div className="flex-1 w-full svg-pattern-dots rounded-xl flex items-center justify-center p-5">
            {component_preview}
          </div>
        ) : CurrTab == 1 ? (
          <SyntaxHighlighter
            className="text-sm rounded-b-lg [&::-webkit-scrollbar]:hidden [&::-webkit-scrollbar-track]:hidden [&::-webkit-scrollbar-thumb]:hidden"
            language="javascript"
            style={atomOneDark}
            wrapLines={true}
          >
            {codeString}
          </SyntaxHighlighter>
        ) : CurrTab == 2 ? (
          <SyntaxHighlighter
            className="text-sm rounded-b-lg [&::-webkit-scrollbar]:hidden [&::-webkit-scrollbar-track]:hidden [&::-webkit-scrollbar-thumb]:hidden"
            language="javascript"
            style={atomOneDark}
            wrapLines={true}
          >
            {component_usage_code}
          </SyntaxHighlighter>
        ) : (
          <div className="flex-1 w-full p-4 overflow-y-scroll space-y-4 text-white font-light">
            <h2 className="text-accent bg-secondary/20 px-2 text-sm rounded-lg w-fit">
              {component_details.description}
            </h2>

            <h3 className="font-semibold text-accent/80">
              Packages: {component_details.packages.length}
            </h3>

            {component_details.packages.length > 0 && (
              <code className="text-sm bg-secondary/20 text-accent w-fit p-1 border border-secondary px-2 rounded-lg">
                npm i
                {component_details.packages.map((item, index) => (
                  <React.Fragment key={index}>
                    {" "}
                    <Link
                      target="_blank"
                      className="hover:underline cursor-pointer"
                      href={item.pckg_link}
                    >
                      {item.pckg_name}
                    </Link>
                  </React.Fragment>
                ))}
                <CopyCode
                  textToCopy={
                    "npm i " +
                    component_details.packages
                      .map((item) => item.pckg_name + " ")
                      .join("")
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

            <h3 className="font-semibold text-accent/80">Features</h3>
            <ul className="text-sm font-light list-disc list-inside list-accent marker:text-accent">
              {component_details.features.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h3 className="font-semibold text-accent/80 flex  gap-3 items-center">
              Props{" "}
              <p className="text-xs font-light">
                ( Additional props can be included as needed )
              </p>
            </h3>
            <ul className="text-sm font-light list-disc list-inside list-accent marker:text-accent">
              {component_details.props.map((item, index) => (
                <li key={index}>
                  {" "}
                  <code className="bg-secondary/20 text-accent px-2 rounded-sm">{`${item.propName}={ ${item.propExample} }`}</code>{" "}
                  {` // ${item.propDetail}`}{" "}
                </li>
              ))}
            </ul>
            {component_details.doc_links &&
              component_details.doc_links.length > 0 &&
              component_details.doc_links.map((item, index) => (
                <Link
                  target="_blank"
                  href={item}
                  key={index}
                  className="p-1 gap-2 hover:opacity-80 flex items-center justify-center w-fit px-2 rounded-md border border-secondary bg-secondary/20 text-accent text-sm"
                >
                  Docs <GoLinkExternal />
                </Link>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ComponentPreview;
