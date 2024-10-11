import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import About from "@app/components/About";
import Header from "@app/components/Header";
import Hero from "@app/components/Hero";
import Projects from "@app/components/Projects";
import Footer from "@app/components/Footer";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

export default function Home() {

  const [showNavbar] = useState(false);

  


  // Preloader effect
  
  // Smooth scrolling effect using ScrollTrigger
  useEffect(() => {
    if (showNavbar) {
      // Setting up scroll triggers for each section
      const sections = document.querySelectorAll(".fade-in-section");

      sections.forEach((section) => {
        gsap.from(section, {
          opacity: 0,
          y: 50,
          scrollTrigger: {
            trigger: section,
            start: "top 80%", // Adjust this to trigger when the section is near the viewport
            toggleActions: "play none none reverse",
          },
        });
      });
    }
  }, [showNavbar]);

  return (
    <>
  
      <div className="grid items-center justify-items-center min-h-screen pb-20 gap-16 sm:p-20">
        <Header />
        <Hero />
        <About />
        <Projects />
        <Footer />
      </div>
    </>
  );
}
