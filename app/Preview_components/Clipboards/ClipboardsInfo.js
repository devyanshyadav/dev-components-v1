const ClipboardsInfo = [
  {
    title: "Dev Clipboard",
    details: {
      description:
        "A user-friendly clipboard utility component that allows users to copy text to their clipboard with visual feedback.",
      features: [
        "Interactive button to copy text to clipboard",
        "Visual indication when text is successfully copied",
        "Uses browser's Clipboard API for copying text",
        "Reset timer for copied state after a short duration",
      ],
      props: [
        {
          propName: "text",
          propExample: `"Hello world"`,
          propDetail:
            "The text to be copied to the clipboard. Defaults to `'no text provided'` if not specified.",
        },
      ],
      packages: [
        {
          pckg_name: "react-icons",
          pckg_link: "https://react-icons.github.io/react-icons/",
        },
      ],
    },
    usage_code: `import DevClipboard from "@/app/dev_components/DevClipboard";
     import React from "react";
     
     const page = () => {
       return (
        <div className="bg-cyan-700/20 p-5 rounded-lg min-w-full md:min-w-40 grid place-content-center">
            <DevClipboard text="Hello world" />
        </div>
       );
     };
     
     export default page;`,
    code: `
        import React, { useState } from "react";
        import { IoCheckmarkDoneSharp } from "react-icons/io5";
        import { MdContentCopy } from "react-icons/md";
        
        const DevClipboard = ({ text = "no text provided" }) => {
          const [copied, setCopied] = useState(false);
        
          const copyToClipboard = async () => {
            try {
              await navigator.clipboard.writeText(text);
              setCopied(true);
              setTimeout(() => setCopied(false), 1000); // Reset copied state after 1 seconds
            } catch (err) {
              console.error("Failed to copy text: ", err);
            }
          };
        
          return (
            <button
              className=" flex items-center justify-center gap-1 bg-cyan-400 p-2 px-3 rounded-lg text-white active:scale-95 active:bg-cyan-700/50"
              onClick={copyToClipboard}
            >
              {copied ? (
                <>
                  <IoCheckmarkDoneSharp /> <span>Copied</span>
                </>
              ) : (
                <>
                  <MdContentCopy />
                  <span>Copy</span>
                </>
              )}
            </button>
          );
        };
        
        export default DevClipboard;
`,
  },
];

export default ClipboardsInfo;
