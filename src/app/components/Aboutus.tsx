import Image from "next/image";
import top from "../../../public/assets/aboutus/aboutustop.png";
import back from "../../../public/assets/aboutus/aboutusback.png";
import bottomimg from "../../../public/assets/aboutus/bottomimg.jpg";

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
      <div className=" bg-[#FDF7E4] h-fit py-20 px-44 flex justify-between  w-full  ">
        <div className=" relative">
          <motion.p
            initial={{ x: -200 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            className=" font-roboto  text-[#7A6D52] text-2xl "
          >
            About us:
          </motion.p>
          <motion.p
            initial={{ x: -200 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            className="font-judson max-w-[60%] text-[#503C16] text-5xl mt-6 "
          >
            Make Your Wedding a Grand Celebration
          </motion.p>
          <motion.div
            initial={{ x: -200 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            className="border-b-[1.5px] border-black max-w-[38%] my-10"
          ></motion.div>
          <motion.p
            initial={{ x: -200 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            className="text-black font-judson text-2xl max-w-[80%] absolute bottom-30 left-0 "
          >
            At Thousand Lights, we believe every life deserves to be a
            masterpiece. We are a team of seasoned photographers united by a
            deep appreciation for the art of capturing light and emotion. Our
            experience allows us to guide you with a gentle hand, translating
            your vision into a visual narrative that resonates. We are endlessly
            grateful for the opportunity to collaborate with incredible people
            and witness the magic unfold through our lenses.
          </motion.p>
        </div>
        <div className="relative ">
          <motion.div
            initial={{ x: -200 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.8 }}
            className="absolute top-16 z-10 left-[-80px]"
          >
            <Image src={top} alt="A couple" />
          </motion.div>
          <motion.div
            initial={{ x: 200 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.8 }}
          >
            <Image src={back} alt="bride" />
          </motion.div>
        </div>
      </div>
      <div>
        <div className="relative w-full h-full">
          <Image
            src={bottomimg}
            alt="I believe in the power of storytelling through images. I ready to document the love, joy, and excitement that unfolds throughout the day."
          />
          <div className="absolute inset-0 flex justify-center items-center">
            <p className="text-white text-center max-w-[60%] text-[40px] font-italianno">
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
