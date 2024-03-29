import Image from "next/image";
import React from "react";

import logo from "../../../public/assets/footer/footerlogo.svg";
import whatsapp from "../../../public/assets/footer/whatsapp.svg";
import insta from "../../../public/assets/footer/insta.svg";
import mail from "../../../public/assets/footer/mail.svg";

function Footer() {
  const emailLink = encodeURIComponent(
    "mailto:getbandark@gmail.com?subject=The%20Thousand%20Lights%20website&body=Hi%2C%0A%0AI%20came%20across%20your%20exceptional%20photographs%20on%20The%20Thousand%20Lights%20website%2C%20and%20I'm%20genuinely%20impressed.%20I'd%20like%20to%20discuss%20the%20possibility%20of%20hiring%20you%20for%20an%20upcoming%20event.%20Your%20talent%20captured%20my%20attention%2C%20and%20I%20believe%20your%20unique%20vision%20would%20be%20perfect%20for%20our%20occasion.%0A%0ALooking%20forward%20to%20hearing%20from%20you%20soon.%0A%0ABest%20regards%2C"
  );

  return (
    <>
      <div className="bg-[#FDF7E4] h-fit flex flex-col py-12 border-t-4 border-[#503C16]">
        <div className="w-full flex items-center justify-center">
          <Image src={logo} alt="The Thousand Lights" />
        </div>
        <div className="flex w-full px-4 mt-6 mx-auto items-center">
          <a
            href={emailLink}
            target="_blank"
            className="flex cursor-pointer w-full md:w-1/3 items-center justify-center"
          >
            <Image src={mail} className="w-[15px] md:w-[30px]" alt="mail=" />
            <p className="font-judson text-sm md:text-xl text-[#503C16] ml-1 md:ml-2">
              shadow@gmail.com
            </p>
          </a>
          <a
            href="https://wa.me/+918838974199?text=Hi,%20I%20saw%20your%20website%20and%20would%20like%20to%20talk%20to%20you%20about%20an%20event"
            target="_blank"
            className="hidden md:flex cursor-pointer w-1/3 items-center justify-center"
          >
            <Image
              src={whatsapp}
              className="w-[15px] md:w-[30px]"
              alt="whatsapp="
            />
            <p className="font-judson text-sm md:text-xl text-[#503C16] ml-1 md:ml-2">
              9990009992
            </p>
          </a>
          <a className="hidden cursor-pointer md:flex w-1/3 items-center justify-center">
            <Image src={insta} className="w-[15px] md:w-[30px]" alt="insta=" />
            <p className="font-judson text-sm md:text-xl text-[#503C16] ml-1 md:ml-2">
              HAKUNAMATATA
            </p>
          </a>
        </div>
        <div className="w-full mt-4 flex md:hidden px-4">
          <a
            href="https://wa.me/+918838974199?text=Hi,%20I%20saw%20your%20website%20and%20would%20like%20to%20talk%20to%20you%20about%20an%20event"
            target="_blank"
            className="flex cursor-pointer w-1/2 items-center justify-center"
          >
            <Image
              src={whatsapp}
              className="w-[15px] md:w-[30px]"
              alt="whatsapp="
            />
            <p className="font-judson text-sm md:text-xl text-[#503C16] ml-1 md:ml-2">
              9990009992
            </p>
          </a>
          <a className="flex cursor-pointer w-1/2 items-center justify-center">
            <Image src={insta} className="w-[15px] md:w-[30px]" alt="insta=" />
            <p className="font-judson text-sm md:text-xl text-[#503C16] ml-1 md:ml-2">
              HAKUNAMATATA
            </p>
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
