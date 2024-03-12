import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

//images
import rectangle1 from "../../../public/assets/grid/rectangle1.jpg";
import rectangle2 from "../../../public/assets/grid/rectangle2.jpg";
import rectangle3 from "../../../public/assets/grid/rectangle3.jpg";
import rectangle4 from "../../../public/assets/grid/rectangle4.jpg";
import rectangle5 from "../../../public/assets/grid/rectangle5.jpg";
import rectangle6 from "../../../public/assets/grid/rectangle6.jpg";
import rectangle7 from "../../../public/assets/grid/rectangle7.jpg";
import rectangle8 from "../../../public/assets/grid/rectangle8.jpg";
import rectangle9 from "../../../public/assets/grid/rectangle9.jpg";

function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className=" bg-[#DED0B6] h-fit py-20">
      <p className=" font-roboto flex items-center justify-center text-[#7A6D52] text-2xl">
        Get Started
      </p>
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        className="font-judson flex items-center justify-center justify-items-center mx-auto text-center text-[#503C16] text-5xl mt-6 max-w-[53%]"
      >
        Delivering the most memorable weddings, in the least amount of time.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        className="mx-auto border-b-[1.5px] border-black max-w-[40%] my-16"
      ></motion.div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-fit h-fit mx-auto ">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true, amount: 0.8 }}
          className="relative w-fit h-fit"
        >
          <Image src={rectangle1} alt="Image 1" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true, amount: 0.8 }}
          className="relative w-fit h-fit"
        >
          <Image src={rectangle2} alt="Image 2" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true, amount: 0.8 }}
          className="relative w-fit h-fit"
        >
          <Image src={rectangle3} alt="Image 3" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true, amount: 0.8 }}
          className="relative w-fit h-fit"
        >
          <Image src={rectangle4} alt="Image 4" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true, amount: 0.8 }}
          className="relative w-fit h-fit -mt-[203px]"
        >
          <Image src={rectangle5} alt="Image 5" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true, amount: 0.8 }}
          className="relative w-fit h-fit"
        >
          <Image src={rectangle6} alt="Image 6" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true, amount: 0.8 }}
          className="relative w-fit h-fit"
        >
          <Image src={rectangle7} alt="Image 7" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true, amount: 0.8 }}
          className="relative w-fit h-fit -mt-[230px]"
        >
          <Image src={rectangle8} alt="Image 8" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true, amount: 0.8 }}
          className="relative w-fit h-fit -mt-[200px]"
        >
          <Image src={rectangle9} alt="Image 9" />
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
