import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

//images large
import rectangle1 from "../../../public/assets/grid/collagepc1.svg";
import rectangle2 from "../../../public/assets/grid/collagepc2.svg";
import rectangle3 from "../../../public/assets/grid/collagepc3.svg";
import rectangle4 from "../../../public/assets/grid/collagepc4.svg";
import rectangle5 from "../../../public/assets/grid/collagepc5.svg";
import rectangle6 from "../../../public/assets/grid/collagepc6.svg";
import rectangle7 from "../../../public/assets/grid/collagepc7.svg";
import rectangle8 from "../../../public/assets/grid/collagepc8.svg";
import rectangle9 from "../../../public/assets/grid/collagepc9.svg";

//images large
import collagemob1 from "../../../public/assets/grid/collage1.svg";
import collagemob2 from "../../../public/assets/grid/collage2.svg";
import collagemob3 from "../../../public/assets/grid/collage3.svg";
import collagemob4 from "../../../public/assets/grid/collage4.svg";
import collagemob5 from "../../../public/assets/grid/collage5.svg";
import collagemob6 from "../../../public/assets/grid/collage6.svg";
import collagemob7 from "../../../public/assets/grid/collage7.svg";
import collagemob8 from "../../../public/assets/grid/collage8.svg";
import collagemob9 from "../../../public/assets/grid/collage9.svg";

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
    <div className=" bg-[#DED0B6] h-fit py-12 md:py-20 ">
      <p className=" font-roboto flex items-center justify-center text-[#7A6D52] xl:text-2xl md:text-xl text-lg">
        Get Started
      </p>
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        className="font-judson flex items-center justify-center justify-items-center mx-auto text-center text-[#503C16] xl:text-5xl md:text-3xl text-xl md:mt-6 mt-3 xl:max-w-[53%] max-w-[70%] xmd:max-w-[80%] "
      >
        Delivering the most memorable weddings, in the least amount of time.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        className="mx-auto border-b-[1.5px] border-[#503C16] md:max-w-[40%] max-w-[70%] md:my-16 my-6"
      ></motion.div>
      <div className=" w-[750px] h-[915px] mx-auto px-6 relative hidden lg:block ">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true, amount: 0.5 }}
          className=" w-fit h-fit absolute top-0 left-0"
        >
          <Image src={rectangle1} alt="Image 1" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true, amount: 1 }}
          className=" w-fit h-fit absolute top-0 left-[254px]"
        >
          <Image src={rectangle2} alt="Image 2" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true, amount: 0.5 }}
          className=" w-fit h-fit absolute top-0 right-0"
        >
          <Image src={rectangle3} alt="Image 3" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true, amount: 0.01 }}
          className=" w-fit h-fit absolute left-0 top-[376px] "
        >
          <Image src={rectangle4} alt="Image 4" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true, amount: 0.5 }}
          className=" w-fit h-fit absolute top-[177px] left-[254px]"
        >
          <Image src={rectangle5} alt="Image 5" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true, amount: 0.01 }}
          className=" w-fit h-fit absolute top-[380px] right-0"
        >
          <Image src={rectangle6} alt="Image 6 " />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true, amount: 0.01 }}
          className=" w-fit h-fit absolute bottom-0 left-0"
        >
          <Image src={rectangle7} alt="Image 7" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true, amount: 0.5 }}
          className=" w-fit h-fit absolute bottom-0 left-[254px] "
        >
          <Image src={rectangle8} alt="Image 8" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true, amount: 0.4 }}
          className=" w-fit h-fit absolute right-0 bottom-0 "
        >
          <Image src={rectangle9} alt="Image 9" />
        </motion.div>
      </div>
      <div className=" w-[356.25px] h-[434.63px] mx-auto px-6 relative flex lg:hidden ">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true, amount: 0.5 }}
          className=" w-fit h-fit absolute top-0 left-0"
        >
          <Image src={collagemob1} alt="Image 1" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true, amount: 1 }}
          className=" w-fit h-fit absolute top-0 left-[120px]"
        >
          <Image src={collagemob2} alt="Image 2" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true, amount: 0.5 }}
          className=" w-fit h-fit absolute top-0 right-0"
        >
          <Image src={collagemob3} alt="Image 3" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true, amount: 0.01 }}
          className=" w-fit h-fit absolute left-0 top-[179px] "
        >
          <Image src={collagemob4} alt="Image 4" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true, amount: 0.5 }}
          className=" w-fit h-fit absolute top-[84px] left-[119.9px]"
        >
          <Image src={collagemob5} alt="Image 5" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true, amount: 0.01 }}
          className=" w-fit h-fit absolute top-[179px] right-0"
        >
          <Image src={collagemob6} alt="Image 6 " />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true, amount: 0.01 }}
          className=" w-fit h-fit absolute bottom-0 left-0"
        >
          <Image src={collagemob7} alt="Image 7" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true, amount: 0.5 }}
          className=" w-fit h-fit absolute bottom-0 left-[119.9px] "
        >
          <Image src={collagemob8} alt="Image 8" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true, amount: 0.4 }}
          className=" w-fit h-fit absolute right-0 bottom-0 "
        >
          <Image src={collagemob9} alt="Image 9" />
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
