'use client';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import About from "@app/components/About";
import Header from "@app/components/Header";
import Hero from "@app/components/Hero";
import Projects from "@app/components/Projects";
import Footer from "@app/components/Footer";


gsap.registerPlugin(ScrollTrigger);

export default function Home() {



  

  return (
    <>

      {/* Main content */}
      <div className="grid items-center 
        justify-items-center min-h-screen pb-20 gap-16
        sm:p-10 sm:pt-20 transition-opacity duration-300">
        <Header />
        <Hero />
        <About />
        <Projects />
        <Footer />
      </div>
    </>
  );
}