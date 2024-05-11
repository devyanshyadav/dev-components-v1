let on = false;
let e="Home";
let NavBarCSS_0 = `z-50 flex items-start overflow-hidden duration-700 transition-[translate, opacity]  ${
  on ? "translate-x-0 " : "-translate-x-full md:translate-x-0"
} md:flex-row flex-col  md:p-0 p-6 md:items-center gap-4 md:static  fixed top-16 translate-y-1 md:translate-y-0 left-0 right-0 bottom-0 bg-slate-800 md:bg-transparent`;

let navLinkCase = `/${e.toLowerCase()}`;

const NavbarsInfo = [
  {
    title: "Base NavBar",
    details: {
      description:
        "A responsive navigation bar component with a hamburger menu for smaller screens.",
      features: [
        "Displays a list of navigation links",
        "Includes a logo and a login button",
        "Provides a hamburger menu for mobile screens",
        "Adds hover effects and animations to navigation links",
      ],
      props: [
        {
          propName: "navList",
          propExample: "['Home', 'About', 'Contact']",
          propDetail:
            "An array of strings representing the navigation links to be displayed.",
        },
      ],
      packages: ["hamburger-react"],
      usage_code: `import BaseNavbar from "@/app/dev_components/BaseNavbar";
        import React from "react";
        
        const page = () => {
          return (
            <BaseNavbar navList={["Home", "About", "Contact"]} />
          );
        };
        
        export default page;
            `,
    },
    code: `
      import React, { useState } from "react";
      import Hamburger from "hamburger-react";
      
      const BaseNavbar = ({ navList }) => {
        const [on, toggle] = useState(false);
        return (
          <header className="w-full h-16 select-none bg-slate-800 md:border border-secondary/50 md:rounded-lg self-start text-white flex items-center justify-between px-3 md:relative fixed inset-0 z-50">
            <h1 className="font-semibold text-4xl text-cyan-400">LOGO</h1>
            <nav
              className={${NavBarCSS_0}}
            >
              <ul className="flex items-start justify-center gap-8 text-xl md:text-base md:gap-5 md:flex-row flex-col">
                {navList.map((e, i) => (
                  <li
                    key={i}
                    onClick={() => toggle((prev) => !prev)}
                    className="relative after:border-cyan-400 after:absolute hover:after:border after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-200 cursor-pointer hover:text-cyan-400 select-none"
                  >
                  <a href={${navLinkCase}}>{e}</a>
                  </li>
                ))}
              </ul>
              <button className="bg-cyan-700 border-2 transition-all border-cyan-700 text-white p-2 px-10 hover:bg-cyan-700/50  rounded-full md:w-fit w-full md:m-0 mt-4">
                Login
              </button>
            </nav>
            <span className="md:hidden flex">
              <Hamburger
                color="#22D3EE"
                toggled={on}
                toggle={() => toggle((prev) => !prev)}
                rounded
              />
            </span>
          </header>
        );
      };
      
      export default BaseNavbar;`,
  },
];

export default NavbarsInfo;
