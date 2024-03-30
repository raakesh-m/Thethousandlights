import { Navbar } from "@/app/components/Navbar";
import ImageSlider from "./components/ImageSlider";
import Hero from "./components/Hero";
import Aboutus from "./components/Aboutus";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ImageSlider2 from "./components/ImageSlider2";

export default function Home() {
  return (
    <main>
      <Navbar />
      <ImageSlider />
      <ImageSlider2 />
      <Hero />
      <Aboutus />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
