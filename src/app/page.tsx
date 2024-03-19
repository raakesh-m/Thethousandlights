"use client";
import { Navbar } from "@/app/components/Navbar";
import ImageSlider from "./components/ImageSlider";
import Hero from "./components/Hero";
import Aboutus from "./components/Aboutus";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <ImageSlider />
      <Hero />
      <Aboutus />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
