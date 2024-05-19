"use client";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { GoDot } from "react-icons/go";
import { IoCaretForwardCircleOutline } from "react-icons/io5";

const EmblaCarousel = ({ carouselData, perView = 1 }) => {
  const [selectedSlideIndex, setSelectedSlideIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    containScroll: "keepSnaps",
    slidesToScroll: perView,
  });
  const scrollTo = (index) => {
    if (emblaApi) {
      emblaApi.scrollTo(index);
    }
  };

  const logSlidesInView = useCallback((emblaApi) => {
    if (!emblaApi) return;
    setSelectedSlideIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", logSlidesInView).on("reInit", logSlidesInView);
    }
  }, [emblaApi, logSlidesInView]);

  return (
    <section
      className=" w-full max-w-md h-64 aspect-square overflow-hidden relative pb-5 rounded-lg"
      ref={emblaRef}
    >
      <div className=" flex h-full  gap-2">
        {carouselData.map((elem, index) => (
          <div
            key={`slide-${index}`}
            className="flex-grow-0 flex-shrink-0 basis-full overflow-hidden rounded-lg"
            style={{ minWidth: 100 / perView + "%" }}
            onClick={() => scrollTo(index)}
          >
            {elem.element}
          </div>
        ))}
      </div>
      <button
        type="button"
        className="absolute top-1/2 -translate-y-1/2 rotate-180 left-1 text-3xl text-cyan-400 hover:text-cyan-700"
        onClick={() => emblaApi.scrollPrev()}
      >
        <IoCaretForwardCircleOutline />
      </button>
      <button
        type="button"
        className="absolute top-1/2 -translate-y-1/2 right-1 text-3xl text-cyan-400 hover:text-cyan-700"
        onClick={() => emblaApi.scrollNext()}
      >
        <IoCaretForwardCircleOutline />
      </button>
      <span className="flex z-10 items-center justify-center absolute left-1/2 transform -translate-x-1/2 bottom-0">
        {carouselData.map((_, index) => (
          <GoDot
            onClick={() => scrollTo(index)}
            key={index}
            className={` cursor-pointer transition-all duration-400 hover:text-cyan-400 ${
              index === selectedSlideIndex
                ? "text-cyan-400 text-lg"
                : "text-cyan-700 text-base"
            }`}
          />
        ))}
      </span>
    </section>
  );
};

export default EmblaCarousel;
