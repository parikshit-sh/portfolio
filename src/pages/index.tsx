'use client';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import About from "@app/components/About";
import Header from "@app/components/Header";
import Hero from "@app/components/Hero";
import Projects from "@app/components/Projects";
import Footer from "@app/components/Footer";
import styles from '@app/page.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [contentVisible, setContentVisible] = useState(false); // State to control main content visibility
  const loader = useRef<HTMLDivElement | null>(null);
  const path = useRef<SVGPathElement | null>(null);
  const initialCurve = 200;
  const duration = 600;
  let start: number | undefined;

  useEffect(() => {
    setPath(initialCurve);
    setTimeout(() => {
      requestAnimationFrame(animate);
    }, 500);
  }, []);

  const animate = (timestamp: number) => {
    if (start === undefined) {
      start = timestamp;
    }
    const elapsed = timestamp - start;

    const newCurve = easeOutQuad(elapsed, initialCurve, -200, duration);
    setPath(newCurve);

    if (loader.current) {
      loader.current.style.top = easeOutQuad(elapsed, 0, -loaderHeight(), duration) + "px";
    }

    if (elapsed < duration) {
      requestAnimationFrame(animate);
    } else {
      if (loader.current) {
        loader.current.style.opacity = '0'; // Fade out loader
        setTimeout(() => {
          if (loader.current) {
            loader.current.style.display = 'none'; // Hide after fade out
            setContentVisible(true); // Show the main content
          }
        }, 300);
      }
    }
  };

  const easeOutQuad = (time: number, start: number, end: number, duration: number) => {
    return -end * (time /= duration) * (time - 2) + start;
  };

  const setPath = (curve: number) => {
    const width = window.innerWidth;
    const height = loaderHeight();

    if (path.current) {
      path.current.setAttributeNS(
        null,
        "d",
        `M0 0 L${width} 0 L${width} ${height} Q${width / 2} ${height - curve} 0 ${height} L0 0`
      );
    }
  };

  const loaderHeight = () => {
    if (!loader.current) return 0;
    const loaderBounds = loader.current.getBoundingClientRect();
    return loaderBounds.height;
  };

  return (
    <>
      {/* Preloader */}
      <div ref={loader} className={styles.loader}>
        <svg className="w-full h-full">
          <path ref={path} fill="#eeff82"></path>
        </svg>
      </div>

      {/* Main content */}
      <div className={`${styles.mainContent} ${contentVisible ? 'show' : ''} grid items-center 
        justify-items-center min-h-screen pb-20 gap-16
        sm:p-10 sm:pt-20 bg-background transition-opacity duration-300`}>
        <Header />
        <Hero />
        <About />
        <Projects />
        <Footer />
      </div>
    </>
  );
}
