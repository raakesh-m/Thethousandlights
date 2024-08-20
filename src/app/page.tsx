import { Navbar } from "@/app/components/Navbar";
import Hero from "./components/Hero";
import Aboutus from "./components/Aboutus";
import Services from "./components/Services";
import Contact from "./components/Contact";
import ImageSlider from "./components/ImageSlider";
import ImageSlider2 from "./components/ImageSlider2";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div id="slider">
        <ImageSlider />
        <ImageSlider2 />
      </div>
      <Hero />
      <Aboutus />
      <Services />
      <Contact />
    </main>
  );
}
