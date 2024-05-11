import React from "react";
import SideBar from "@/app/Components/SideBar";
import Link from "next/link";

const layout = ({ children }) => {
  return (
    <>
      <Link
        href={"/"}
        className="fixed top-2 hover:text-secondary left-4 text-accent font-semibold"
      >
        Dev Components
      </Link>
      <main className="w-full overflow-hidden bg-gradient-to-r p-5 pt-10 px-0 from-primary via-[#064F51] pr-3 to-primary bg-white h-screen mx-0 flex gap-2">
        <SideBar />
        <section className="w-[80vw] h-full bg-secondary/20 rounded-xl p-5 space-y-4 overflow-y-scroll">
          {children}
        </section>
      </main>
    </>
  );
};

export default layout;
