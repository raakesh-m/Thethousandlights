import Image from "next/image";
import footer from "../../../public/assets/footer/footer.png";
function Footer() {
  return (
    <>
      <div className="absolute">
        <Image src={footer} alt="footer" />
      </div>
      <div>
        <p></p>
      </div>
    </>
  );
}
export default Footer;
