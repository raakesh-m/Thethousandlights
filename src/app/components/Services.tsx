import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

//images
import prewed from "../../../public/assets/services/prewed.png";
import wed from "../../../public/assets/services/wed.png";
import engagement from "../../../public/assets/services/engagement.png";

function Services() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className=" bg-[#DED0B6] h-fit py-20 overflow-hidden">
      <p className=" font-roboto flex items-center justify-center text-[#7A6D52] text-2xl ">
        Services
      </p>
      <motion.p
        initial={{ opacity: 1, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        className="font-judson flex items-center justify-center justify-items-center mx-auto text-center text-[#503C16] text-5xl mt-6 "
      >
        Magic in every frame
      </motion.p>
      <motion.div
        initial={{ opacity: 1, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        className="mx-auto border-b-[1.5px] border-black max-w-[40%] my-16"
      ></motion.div>
      <div className="lg:flex items-center justify-center flex-row gap-6 hidden">
        <motion.div
          initial={{ opacity: 1, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          className=" max-w-[30%]"
        >
          <p className=" font-judson text-xl text-black leading-10 text-right ">
            Thousand Lights Photography offers a variety of services to meet
            your photography and videography needs. We specialize in traditional
            and candid styles, allowing you to choose the approach that best
            suits your event.
          </p>
          <p className=" font-judson text-2xl text-[#7A6D52] py-3 text-right">
            Pre-Wedding
          </p>
          <span className="flex items-end justify-end">
            <Image src={prewed} alt="Pre-wedding" />
          </span>
        </motion.div>
        <motion.div
          initial={{ opacity: 1, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          className=" max-w-[30%]"
        >
          <Image src={wed} alt="Wedding" />
          <p className=" font-judson text-2xl text-[#7A6D52] py-3 text-center">
            Wedding
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 1, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          className=" max-w-[30%]"
        >
          <p className=" font-judson text-xl text-black leading-10 ">
            Our experienced team is also equipped to capture stunning aerial
            perspectives using drones. This opens up creative possibilities for
            showcasing landscapes, events, or adding unique angles to your
            project.
          </p>
          <p className=" font-judson text-2xl text-[#7A6D52] py-3 ">
            Engagement
          </p>
          <Image src={engagement} alt="Engagement" />
        </motion.div>
      </div>
      <div className="ld:hidden flex items-center justify-center flex-col gap-6">
        <motion.div
          initial={{ opacity: 1, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          className=" max-w-[30%]"
        >
          <p className=" font-judson text-xl text-black leading-10 text-right ">
            Thousand Lights Photography offers a variety of services to meet
            your photography and videography needs. We specialize in traditional
            and candid styles, allowing you to choose the approach that best
            suits your event.
          </p>
          <p className=" font-judson text-2xl text-[#7A6D52] py-3 text-right">
            Pre-Wedding
          </p>
          <span className="flex items-end justify-end">
            <Image src={prewed} alt="Pre-wedding" />
          </span>
        </motion.div>
        <motion.div
          initial={{ opacity: 1, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          className=" max-w-[30%]"
        >
          <Image src={wed} alt="Wedding" />
          <p className=" font-judson text-2xl text-[#7A6D52] py-3 text-center">
            Wedding
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 1, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          className=" max-w-[30%]"
        >
          <p className=" font-judson text-xl text-black leading-10 ">
            Our experienced team is also equipped to capture stunning aerial
            perspectives using drones. This opens up creative possibilities for
            showcasing landscapes, events, or adding unique angles to your
            project.
          </p>
          <p className=" font-judson text-2xl text-[#7A6D52] py-3 ">
            Engagement
          </p>
          <Image src={engagement} alt="Engagement" />
        </motion.div>
      </div>
    </div>
  );
}

export default Services;
