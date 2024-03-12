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

  // Array of imported image paths
  const slides = [
    "/assets/slide/slide0.png",
    "/assets/slide/slide1.png",
    "/assets/slide/slide2.png",
    "/assets/slide/slide3.png",
    "/assets/slide/slide4.png",
  ];

  return (
    <section className="embla overflow-hidden pt-14 ">
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
  );
};

export default ImageSlider;
