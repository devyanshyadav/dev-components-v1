import React from "react";
import SearchComponents from "./Components/SearchComponents";
import ComponentsHome from "./Components/ComponentHome";

const page = () => {
  return (
    <>
      <section className="w-full text-center p-5 z-10 space-y-3 md:max-w-lg sticky md:relative top-0 md:backdrop-blur-0 backdrop-blur-sm rounded-b-xl shadow-md md:shadow-none border-b border-secondary md:border-none mx-auto">
        <h1 className="text-4xl font-bold text-white">Dev Components</h1>
        <p className="text-white/80 font-light text-center text-sm">
          Crafting a Lightweight Website using In-House Components for Maximum
          Control
        </p>

        <SearchComponents />
      </section>

      <section className="grid overflow-y-scroll [&::-webkit-scrollbar]:hidden [&::-webkit-scrollbar-track]:hidden [&::-webkit-scrollbar-thumb] grid-cols-1 md:grid-cols-4 py-0 p-3 md:p-0 my-10 w-full max-w-5xl mx-auto gap-3">
        <ComponentsHome />
      </section>
    </>
  );
};

export default page;
