"use client";
import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

type PropType = {
  options?: EmblaOptionsType;
};

const ImageSlider2: React.FC<PropType> = ({ options }) => {
  const [emblaRef] = useEmblaCarousel(options, [Autoplay()]);
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
