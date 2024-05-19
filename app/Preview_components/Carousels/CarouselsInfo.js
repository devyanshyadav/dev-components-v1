let index = "index";
let selectedSlideIndex = "selectedSlideIndex";
const CarouselsInfo = [
  {
    title: "Custom Carousel",
    details: {
      description:
        "A custom carousel component for displaying a series of elements with navigation controls.",
      features: [
        "Displays a series of elements in a horizontal scrollable view",
        "Includes navigation buttons to move between elements",
        "Provides visual feedback for the current active element",
        "Smooth scrolling behavior with snap functionality",
      ],
      props: [
        {
          propName: "carouselData",
          propExample: `[ { title: "carousel1", element: <img src="/path/to/image.jpg" /> }, ... ]`,
          propDetail:
            "An array of objects representing the carousel items, each containing a title and an element to be displayed.",
        },
        {
          propName: "perView",
          propExample: "{1}",
          propDetail:
            "A Number representing the number of elements to display per view. Defaults to 1.",
        },
      ],
      packages: [
        {
          pckg_name: "react-icons",
          pckg_link: "https://react-icons.github.io/react-icons",
        },
      ],
    },

    usage_code: `import Carousel from '@/app/dev_components/Carousel'
      import React from 'react'
      
      const page = () => {
        let carouselData = [
          {
            title: "carousel1",
            element: <img width={500} height={500}  src="/carousel_images/carousel1.avif" className='w-full text-white h-full font-semibold text-xl'/>
          },
          {
            title: "carousel2",
            element: <img width={500} height={500}  src="/carousel_images/carousel2.avif" className='w-full text-white h-full font-semibold text-xl'/>
          },
          {
            title: "carousel3",
            element: <img width={500} height={500}  src="/carousel_images/carousel3.avif" className='w-full text-white h-full font-semibold text-xl'/>
          },
          {
            title: "carousel4",
            element: <img width={500} height={500}  src="/carousel_images/carousel4.avif" className='w-full text-white h-full font-semibold text-xl'/>
          }
        ]
        return (
          <CustomCarousel carouselData={carouselData} perView={1} />
        )
      }
      
      export default page`,
    code: `
    import React, { useRef, useCallback, useState, useEffect } from "react";
    import { IoCaretForwardCircleOutline } from "react-icons/io5";
    import { PiDotOutlineFill } from "react-icons/pi";
    
    const CustomCarousel = ({ carouselData, perView = 1 }) => {
      const containerRef = useRef(null);
      const [currentIndex, setCurrentIndex] = useState(0);
      const divCount = carouselData.length; // Number of divs in the CustomCarousel
    
      const handlePrev = useCallback(() => {
        if (currentIndex === 0) return;
        containerRef.current.scrollTo({
          left:
            containerRef.current.scrollLeft -
            containerRef.current.offsetWidth / (perView > 1 ? 3 : 1),
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
            containerRef.current.scrollLeft +
            containerRef.current.offsetWidth / (perView > 1 ? 3 : 1),
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
              <div
                key={index}
                style={{ minWidth: 100 / perView + "%" }}
                className="min-w-[100%] w-[50%] h-full snap-center flex items-center object-contain justify-center  bg-slate-700 shadow-xl rounded-xl"
              >
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
    
    export default CustomCarousel;
    
      `,
  },

  {
    title: "Product Image Gallery-(using Embla Carousel)",
    details: {
      description:
        "A responsive image gallery component using Embla Carousel for showcasing products.",
      features: [
        "Supports looping through images",
        "Draggable and swipeable interface",
        "Thumbnail previews with click-to-navigate",
        "Customizable via props",
      ],
      props: [
        {
          propName: "carouselData",
          propExample: `[
            { title: "carousel1", element: "https://example.com/image1.jpg" },
           ...
          ]`,
          propDetail:
            "An array of objects representing the carousel items, each containing a title and an image URL.",
        },
      ],
      packages: [
        {
          pckg_name: "embla-carousel-react",
          pckg_link: "https://github.com/bvaughn/embla-carousel-react",
        },
        {
          pckg_name: "react-icons",
          pckg_link: "https://react-icons.github.io/react-icons",
        },
      ],
      doc_links: ["https://www.embla-carousel.com/get-started/react/"],
    },

    usage_code: `import ProductImageGalleryEmbla from '@/app/dev_components/ProductImageGalleryEmbla'
        import React from 'react'
        
        const page = () => {
          let carouselDataEmbla = [
            "https://plus.unsplash.com/premium_photo-1678099940967-73fe30680949?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D",
        
            "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D",
        
            "https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhlYWRwaG9uZXN8ZW58MHx8MHx8fDA%3D",
        
            "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhlYWRwaG9uZXN8ZW58MHx8MHx8fDA%3D",
            
            "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D",
          ];
          
          return (
      <div className="w-72">
         <ProductImageGalleryEmbla carouselData={carouselDataEmbla} />
      </div>
          )
        }
        
        export default page`,
    code: `
    import React, { useCallback, useEffect, useState } from "react";
    import useEmblaCarousel from "embla-carousel-react";
    import { IoCaretForwardCircleOutline } from "react-icons/io5";
    
    const ProductImageGalleryEmbla = ({ carouselData }) => {
      const [selectedSlideIndex, setSelectedSlideIndex] = useState(0);
      const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "start",
        containScroll: "trimSnaps",
        dragFree: false,
        slidesToScroll: 1,
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
        <main className="w-full bg-slate-700 space-y-2 p-2 rounded-lg">
          <section
            className="w-full aspect-square overflow-hidden relative rounded-lg"
            ref={emblaRef}
          >
            <div className=" flex h-full">
              {carouselData.map((elem, index) => (
                <div
                  key={\`slide-${index}\`}
                  className="flex-grow-0 flex-shrink-0 basis-full"
                  onClick={() => scrollTo(index)}
                >
                  <img
                    src={elem}
                    alt="product-images"
                    className="object-cover object-center w-full aspect-square"
                  />
                </div>
              ))}
            </div>
            <button
              type="button"
              className="absolute top-1/2 left-1 text-2xl rotate-180 text-cyan-400 hover:text-cyan-700"
              onClick={() => emblaApi.canScrollPrev() && emblaApi.scrollPrev()}
            >
              <IoCaretForwardCircleOutline />
            </button>
            <button
              type="button"
              className="absolute top-1/2 right-1 text-2xl text-cyan-400 hover:text-cyan-700"
              onClick={() => emblaApi.canScrollNext() && emblaApi.scrollNext()}
            >
              <IoCaretForwardCircleOutline />
            </button>
          </section>
          <section className="flex flex-wrap gap-2 rounded-md justify-center ">
            {carouselData.map((elem, index) => (
              <div
                key={\`thumbnail-${index}\`}
                className="h-12 aspect-square overflow-hidden rounded-md cursor-pointer"
                onClick={() => scrollTo(index)}
              >
                <img
                  src={elem}
                  alt="product-images"
                  className={\`object-cover border-2 rounded-md object-center h-full aspect-square ${
                    index == selectedSlideIndex
                      ? "border-cyan-400"
                      : "border-cyan-700 "
                  }\`}
                />
              </div>
            ))}
          </section>
        </main>
      );
    };
    
    export default ProductImageGalleryEmbla;
    `,
  },
];

export default CarouselsInfo;
