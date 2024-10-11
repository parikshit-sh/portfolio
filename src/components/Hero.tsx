import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP animation
    const tl = gsap.timeline({ defaults: { duration: 1, ease: "power3.out" } });
    tl.fromTo(
      textRef.current,
      { opacity: 0, y: 50 }, // Initial state
      { opacity: 1, y: 0 } // End state
    );
  }, []);

  return (
    <section
      ref={heroRef}
      className="flex items-center justify-center 
      min-h-screen md:min-h-[30rem] bg-transparent text-white pt-10"
    >
      <div ref={textRef} className="text-center p-4">
        <h1 className="text-[9vw] md:text-7xl font-thin font-mori leading-[1]">
          <span className="font-mori">P</span>ARIKSHIT{" "}
          <span className="font-mori">S</span>HARMA
        </h1>
        <h1 className="text-[9vw] sm:text-6xl md:text-7xl font-mori uppercase leading-[1]">
          front end developer
        </h1>
        <h1 className="text-[9vw] md:text-7xl font-mori
        uppercase font-thin leading-[1]">
          Folio<span className="font-bit">©</span>2024
          <span className="font-bit">⚗✨</span>
        </h1>
        <p className="mt-4 text-lg sm:text-xl md:text-2xl font-mono leading-[1]">
          Crafting seamless digital experiences.
        </p>
      </div>
    </section>
  );
};

export default Hero;
