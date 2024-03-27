import Image from "next/image";
import logo from "../../../public/assets/logofooter.svg";

function Footer() {
  return (
    <>
      <div className="bg-[#FDF7E4] h-fit flex flex-col py-12">
        <div className="w-full flex items-center justify-center">
          <Image src={logo} alt="The Thousand Lights" />
        </div>
        <div></div>
      </div>
    </>
  );
}
export default Footer;
