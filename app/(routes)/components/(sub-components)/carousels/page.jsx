"use client";
import React from "react";
import ComponentPreview from "@/app/Components/ComponentPreview";
import CustomCarousel from "@/app/Preview_components/Carousels/CustomCarousel";
import CarouselsInfo from "@/app/Preview_components/Carousels/CarouselsInfo";
import CustomCarousel_1 from "@/app/Preview_components/Carousels/CustomCarousel_1";
import ProductImageGalleryEmbla from "@/app/Preview_components/Carousels/ProductImageGalleryEmbla";
import EmblaCarousel from "@/app/Preview_components/Carousels/EmblaCarousel";

const page = () => {
  let carouselData = [
    {
      title: "carousel1",
      element: (
        <img
          width={500}
          height={500}
          src="/carousel_images/carousel1.avif"
          className="object-cover object-center w-full h-full"
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
          className="object-cover object-center w-full h-full"
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
          className="object-cover object-center w-full h-full"
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
          className="object-cover object-center w-full h-full"
        />
      ),
    },
    {
      title: "carousel1",
      element: (
        <img
          width={500}
          height={500}
          src="/carousel_images/carousel1.avif"
          className="object-cover object-center w-full h-full"
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
          className="object-cover object-center w-full h-full"
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
          className="object-cover object-center w-full h-full"
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
          className="object-cover object-center w-full h-full"
        />
      ),
    },
  ];

  let carouselDataEmbla = [
    "https://plus.unsplash.com/premium_photo-1678099940967-73fe30680949?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D",

    "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D",

    "https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhlYWRwaG9uZXN8ZW58MHx8MHx8fDA%3D",

    "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhlYWRwaG9uZXN8ZW58MHx8MHx8fDA%3D",

    "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D",
  ];

  return (
    <>
      <ComponentPreview
        component_name={CarouselsInfo[0].title}
        component_details={CarouselsInfo[0].details}
        component_usage_code={CarouselsInfo[0].usage_code}
        component_preview={
          <CustomCarousel carouselData={carouselData} perView={1} />
        }
        component_code={CarouselsInfo[0].code}
        component_packages={CarouselsInfo[0].packages}
      />
      <ComponentPreview
        component_name={CarouselsInfo[2].title}
        component_details={CarouselsInfo[2].details}
        component_usage_code={CarouselsInfo[2].usage_code}
        component_preview={
          <EmblaCarousel carouselData={carouselData} perView={1} />
        }
        component_code={CarouselsInfo[2].code}
        component_packages={CarouselsInfo[2].packages}
      />
      <ComponentPreview
        component_name={CarouselsInfo[1].title}
        component_details={CarouselsInfo[1].details}
        component_usage_code={CarouselsInfo[1].usage_code}
        component_preview={
          <div className="w-72">
            <ProductImageGalleryEmbla carouselData={carouselDataEmbla} />
          </div>
        }
        component_code={CarouselsInfo[1].code}
        component_packages={CarouselsInfo[1].packages}
      />
    </>
  );
};

export default page;
