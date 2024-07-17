"use client";
import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

type PropType = {
  options?: EmblaOptionsType;
};

const ImageSlider2: React.FC<PropType> = ({ options }) => {
  const autoplayOptions = { delay: 2400 };
  const [emblaRef] = useEmblaCarousel(options, [Autoplay(autoplayOptions)]);
  // image paths

  const slidesm = [
    "/assets/slide/slidem1.svg",
    "/assets/slide/slidem2.svg",
    "/assets/slide/slidem3.svg",
    "/assets/slide/slidem4.svg",
    "/assets/slide/slidem5.svg",
  ];
  return (
    <>
      <section className="embla overflow-hidden pt-14 block lg:hidden ">
        <div className="absolute top-[200px] sm:top-[340px] md:top-[480px] p-4 md:left-30 sm:left-20 z-10">
          <p className="text-xl md:text-xl font-judson text-shadow-default">
            Capture timeless moments with
          </p>
          <p className="text-3xl md:text-2xl font-judson  text-shadow-strong">
            Stories by WE VOW
          </p>
        </div>
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container flex">
            {slidesm.map((slidesm, index) => (
              <div className="embla__slide flex-shrink-0 w-full" key={index}>
                <img src={slidesm} alt={`Slidem ${index}`} className="w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ImageSlider2;
