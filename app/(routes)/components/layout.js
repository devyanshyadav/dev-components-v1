import React from "react";
import SideBar from "@/app/Components/SideBar";
import Link from "next/link";
import ToggleHamburger from "@/app/Components/ToggleHamburger";

const layout = ({ children }) => {
  return (
    <>
      <Link
        href={"/"}
        className="fixed top-2 hover:text-secondary left-4 text-accent font-semibold"
      >
        Dev Components
      </Link>
      <span className="top-0 fixed right-2 md:hidden bg-secondary/50 px-1 rounded-bl-xl">
        <ToggleHamburger />
      </span>
      <main className="w-full overflow-hidden bg-gradient-to-r p-5 pt-10 md:px-0 from-primary via-[#064F51] md:pr-3 px-2 to-primary bg-white h-screen mx-0 flex gap-2">
        <SideBar />
        <section className="md:w-[80vw] flex-1 h-full bg-secondary/20 rounded-xl p-3 md:p-5 space-y-4 overflow-y-scroll [&::-webkit-scrollbar]:hidden [&::-webkit-scrollbar-track]:hidden [&::-webkit-scrollbar-thumb]">
          {children}
        </section>
      </main>
    </>
  );
};

export default layout;
