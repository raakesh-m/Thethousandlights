"use client";

import Image from "next/image";
import top from "../../../public/assets/aboutus/aboutustop.svg";
import toplg from "../../../public/assets/aboutus/aboutustopLg.svg";
import topxl from "../../../public/assets/aboutus/aboutustopXl.svg";
import topmob from "../../../public/assets/aboutus/aboutustopMob.svg";
import back from "../../../public/assets/aboutus/aboutusback.svg";
import backxl from "../../../public/assets/aboutus/aboutusbackXl.svg";
import backlg from "../../../public/assets/aboutus/aboutusbackLg.svg";
import backmob from "../../../public/assets/aboutus/aboutusbackMob.svg";

import bottomimg from "../../../public/assets/aboutus/back.svg";

import { motion } from "framer-motion";

import { useEffect, useState } from "react";

function Aboutus() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div id="about">
        <div className=" bg-[#FDF7E4] h-fit py-20 px-[10%] hidden justify-between overflow-hidden w-full relative md:flex  ">
          <motion.div
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.5 }}
            className="z-20"
          >
            <div className=" relative h-fit w-full ">
              <div className="">
                <p className=" font-roboto  text-[#7A6D52] xl:text-2xl text-lg ">
                  About us:
                </p>
                <p className="font-judson max-w-[60%] text-[#503C16] xl:text-5xl text-3xl mt-6 ">
                  Make Your Wedding a Grand Celebration
                </p>
                <div className="border-b-[1.5px] border-black max-w-[38%] my-10" />
              </div>
              <p className="text-black font-judson text-sm md:text-md lg:text-lg xl:text-2xl max-w-[70%]  ">
                At Thousand Lights, we believe every life deserves to be a
                masterpiece. We are a team of seasoned photographers united by a
                deep appreciation for the art of capturing light and emotion.
                Our experience allows us to guide you with a gentle hand,
                translating your vision into a visual narrative that resonates.
                We are endlessly grateful for the opportunity to collaborate
                with incredible people and witness the magic unfold through our
                lenses.
              </p>
              <div className="absolute top-[80px]  right-[-100px] xl:right-[-150px] lg:right-[-120px]">
                <Image src={top} alt="A couple" className="hidden xl:flex" />
                <Image src={toplg} alt="A couple" className="flex lg:hidden " />
                <Image
                  src={topxl}
                  alt="A couple"
                  className="   hidden lg:flex xl:hidden"
                />
              </div>
            </div>
          </motion.div>
          <div className="z-10 flex-shrink-0 ">
            <motion.div
              initial={{ x: 200 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <Image src={back} alt="bride" className="xl:flex hidden" />
              <Image src={backlg} alt="bride" className="lg:hidden flex" />

              <Image
                src={backxl}
                alt="bride"
                className="hidden lg:flex xl:hidden"
              />
            </motion.div>
          </div>
        </div>
        <div className=" bg-[#FDF7E4] h-fit py-20 px-[10%] flex flex-col  overflow-hidden w-full  md:hidden  ">
          <motion.div
            initial={{ x: -120 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="">
              <p className=" font-roboto  text-[#7A6D52]  text-lg ">
                About us:
              </p>
              <p className="font-judson max-w-[80%] text-[#503C16] text-3xl mt-2 ">
                Make Your Wedding a Grand Celebration
              </p>
              <div className="border-b-[1.5px] border-black max-w-[38%] my-6" />
            </div>
          </motion.div>
          <div className="relative h-[300px] w-full">
            <motion.div
              initial={{ x: -100 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.1 }}
              className=" z-20 absolute top-[50px] flex-shrink-0 right-[150px] "
            >
              <Image src={topmob} alt="Couple" />
            </motion.div>
            <motion.div
              initial={{ x: 100 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.5 }}
              className=" z-10 absolute right-0 flex-shrink-0 "
            >
              <Image src={backmob} alt="bride" />
            </motion.div>
          </div>
          <motion.div
            initial={{ x: -120 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <p className="text-black font-judson text-[10px] leading-5  max-w-[85%]  ">
              At Thousand Lights, we believe every life deserves to be a
              masterpiece. We are a team of seasoned photographers united by a
              deep appreciation for the art of capturing light and emotion. Our
              experience allows us to guide you with a gentle hand, translating
              your vision into a visual narrative that resonates. We are
              endlessly grateful for the opportunity to collaborate with
              incredible people and witness the magic unfold through our lenses.
            </p>
          </motion.div>
        </div>
        <div></div>
        <div className="relative w-full h-[160px] sm:h-[200px] md:h-[280px] lg:h-[350px] xl:h-[420px]">
          <Image
            src={bottomimg}
            alt="I believe in the power of storytelling through images. I ready to document the love, joy, and excitement that unfolds throughout the day."
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 flex justify-center items-center">
            <p className="text-white text-center max-w-[60%] text-[20px] md:text-[28px] lg:text-[35px] xl:text-[40px] font-italianno">
              I believe in the power of storytelling through images. I ready to
              document the love, joy, and excitement that unfolds throughout the
              day.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aboutus;
