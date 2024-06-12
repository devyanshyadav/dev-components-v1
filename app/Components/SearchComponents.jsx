"use client";
import React, { useEffect, useState } from "react";
import { LuSearch } from "react-icons/lu";
import Link from "next/link";
import Image from "next/image";
import { IoCloseCircleOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { createPortal } from "react-dom";
import DevLaserInput from "../Preview_components/Inputs/DevLaserInput";
import ComponentData from "../libs/utils/ComponentDataArray";

const SearchComponents = () => {
  const [searchData, setSearchData] = useState([]);
  const [mount, setMount] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchValue = e.target.value;
    const searchResult = ComponentData.filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setSearchData(searchResult);
  };
  useEffect(() => {
    setMount(true);
  }, []);

  return (
    <>
      <section className="relative z-50 space-y-1">
        <DevLaserInput
          icon={<LuSearch className="text-accent text-xl" />}
          type="text"
          rounded="full"
          size="md"
          onChange={(e) => {
            handleSearch(e);
            !e.target.value && setSearchData([]);
          }}
          placeholder="Search"
        />

        {searchData.length > 0 && (
          <motion.ul
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="w-full max-h-60 bg-primary border border-secondary absolute top-10 rounded-xl p-2 overflow-y-scroll [&::-webkit-scrollbar]:hidden [&::-webkit-scrollbar-track]:hidden space-y-2 [&::-webkit-scrollbar-thumb]"
          >
            {searchData.length > 0 &&
              searchData.map((e, i) => (
                <motion.li
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  key={i}
                  className="w-full hover:bg-secondary/40 flex items-center p-2 min-h-10 gap-3 bg-secondary/20 rounded-lg"
                >
                  <Image
                    src={e.image}
                    alt="logo"
                    className="w-10"
                    width={60}
                    height={60}
                  />
                  <Link
                    className="text-white text-left w-full"
                    target="_blank"
                    onClick={() => setSearchData([])}
                    href={e.url}
                  >
                    {e.name}
                  </Link>
                </motion.li>
              ))}
          </motion.ul>
        )}
      </section>
      {searchData.length > 0 &&
        mount &&
        createPortal(
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50"
            onClick={() => setSearchData([])}
          >
            <IoCloseCircleOutline
              onClick={() => setSearchData([])}
              className="absolute top-3 right-3 text-accent text-3xl cursor-pointer hover:text-secondary "
            />
          </motion.main>,
          document.body
        )}
    </>
  );
};

export default SearchComponents;
