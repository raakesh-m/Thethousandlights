import { Navbar } from "@/app/components/Navbar";
import Hero from "./components/Hero";
import Aboutus from "./components/Aboutus";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Slider from "./components/Slider";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Slider />
      <Hero />
      <Aboutus />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
