"use client";
import React, { useRef, useCallback, useState, useEffect } from "react";
import { IoCaretForwardCircleOutline } from "react-icons/io5";
import { PiDotOutlineFill } from "react-icons/pi";

const CustomCarousel_1 = ({ carouselData }) => {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const divCount = carouselData.length; // Number of divs in the CustomCarousel

  const handlePrev = useCallback(() => {
    if (currentIndex === 0) return;
    containerRef.current.scrollTo({
      left:
        containerRef.current.scrollLeft - containerRef.current.offsetWidth / 3,
      behavior: "smooth",
    });
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? divCount - 1 : prevIndex - 1
    );
  }, [currentIndex]);

  const handleNext = useCallback(() => {
    if (currentIndex === divCount - 1) return;
    containerRef.current.scrollTo({
      left:
        containerRef.current.scrollLeft + containerRef.current.offsetWidth / 3,
      behavior: "smooth",
    });
    setCurrentIndex((prevIndex) =>
      prevIndex === divCount - 1 ? 0 : prevIndex + 1
    );
  }, [currentIndex]);


  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = containerRef.current.scrollLeft;
      const scrollWidth =
        containerRef.current.scrollWidth - containerRef.current.offsetWidth;
      const index = Math.round(scrollPosition / (scrollWidth / (divCount - 1)));
      setCurrentIndex(index);
    };

    const container = containerRef.current;
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [divCount]);

  return (
    <main className="relative w-full max-w-md h-60 p-2">
      <button
        onClick={handlePrev}
        className="absolute z-10 left-3 rotate-180 top-1/2 -translate-y-1/2 text-2xl text-cyan-400 hover:text-cyan-700"
      >
        <IoCaretForwardCircleOutline />
      </button>

      <section
        ref={containerRef}
        className="overflow-hidden h-full w-full overflow-x-scroll flex flex-nowrap snap-mandatory snap-x  scroll-smooth gap-3 [&::-webkit-scrollbar]:hidden rounded-xl [scrollbar-width:none]"
      >
        {carouselData.map((item, index) => (
          <div key={index} style={{minWidth:"33.4%"}} className="h-full snap-center flex items-center object-contain justify-center  bg-slate-700 shadow-xl rounded-xl">
            {item.element}
          </div>
        ))}
      </section>

      <button
        onClick={handleNext}
        className="absolute z-10 right-3 top-1/2 -translate-y-1/2 text-2xl text-cyan-400 hover:text-cyan-700"
      >
        <IoCaretForwardCircleOutline />
      </button>
      <span className="flex z-10 items-center justify-center absolute left-1/2 transform -translate-x-1/2 bottom-0 translate-y-3">
        {carouselData.map((_, index) => (
          <PiDotOutlineFill
            key={index}
            className="text-cyan-700"
            style={{ color: currentIndex === index && "cyan" }}
          />
        ))}
      </span>
    </main>
  );
};

export default CustomCarousel_1;
