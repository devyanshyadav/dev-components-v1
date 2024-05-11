import React from "react";
import SearchComponents from "./Components/SearchComponents";
import ComponentsHome from "./Components/ComponentHome";

const page = () => {
  return (
    <>
      <section className="w-full text-center p-5 space-y-3 md:max-w-lg  mx-auto">
        <h1 className="text-4xl font-bold text-white">Dev Components</h1>
        <p className="text-white/80 font-light text-center text-sm">
          Crafting a Lightweight Website using In-House Components for Maximum
          Control
        </p>

        <SearchComponents />
      </section>

      <section className="grid grid-cols-4 my-10 w-full max-w-5xl mx-auto gap-3">
       <ComponentsHome/>
      </section>
    </>
  );
};

export default page;
