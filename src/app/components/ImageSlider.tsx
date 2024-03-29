"use client";
import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

type PropType = {
  options?: EmblaOptionsType;
};

const ImageSlider: React.FC<PropType> = ({ options }) => {
  const [emblaRef] = useEmblaCarousel(options, [Autoplay()]);
  // image paths
  const slides = [
    "/assets/slide/slide1.svg",
    "/assets/slide/slide2.svg",
    "/assets/slide/slide3.svg",
    "/assets/slide/slide4.svg",
    "/assets/slide/slide5.svg",
  ];

  return (
    <>
      <section className="embla overflow-hidden pt-14 hidden lg:block ">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container flex">
            {slides.map((slide, index) => (
              <div className="embla__slide flex-shrink-0 w-full" key={index}>
                <img src={slide} alt={`Slide ${index}`} className="w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ImageSlider;
