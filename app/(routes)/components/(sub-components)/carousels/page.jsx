"use client";
import React from "react";
import ComponentPreview from "@/app/Components/ComponentPreview";
import CustomCarousel from "@/app/Preview_components/Carousels/CustomCarousel";
import CarouselsInfo from "@/app/Preview_components/Carousels/CarouselsInfo";

const page = () => {
  let carouselData = [
    {
      title: "carousel1",
      element: (
        <img
          width={500}
          height={500}
          src="/carousel_images/carousel1.avif"
          className="w-full text-white h-full font-semibold text-xl"
        />
      ),
    },
    {
      title: "carousel2",
      element: (
        <img
          width={500}
          height={500}
          src="/carousel_images/carousel2.avif"
          className="w-full text-white h-full font-semibold text-xl"
        />
      ),
    },
    {
      title: "carousel3",
      element: (
        <img
          width={500}
          height={500}
          src="/carousel_images/carousel3.avif"
          className="w-full text-white h-full font-semibold text-xl"
        />
      ),
    },
    {
      title: "carousel4",
      element: (
        <img
          width={500}
          height={500}
          src="/carousel_images/carousel4.avif"
          className="w-full text-white h-full font-semibold text-xl"
        />
      ),
    },
  ];

  return (
    <ComponentPreview
      component_name={CarouselsInfo[0].title}
      component_details={CarouselsInfo[0].details}
      component_usage_code={CarouselsInfo[0].usage_code}
      component_preview={<CustomCarousel carouselData={carouselData} />}
      component_code={CarouselsInfo[0].code}
      component_packages={CarouselsInfo[0].packages}
    />
  );
};

export default page;
