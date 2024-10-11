import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Hero = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);

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
        {/* Name Heading */}
        <h1 className="text-[8vw] sm:text-[6vw]  lg:text-[5rem] font-thin font-mori leading-[1]">
          <span className="font-mori">P</span>ARIKSHIT{" "}
          <span className="font-mori">S</span>HARMA
        </h1>

        {/* Title */}
        <h1 className="text-[9vw] sm:text-[6vw]  lg:text-[4.5rem] uppercase font-mori leading-[1]">
          front end <span className="font-bit text-[10.2vw] sm:text-[6.6vw]  lg:text-[5rem]">
          developer
            </span>
        </h1>

        {/* Footer Title */}
        <h1 className="text-[8vw] sm:text-[6vw]  lg:text-[5rem] uppercase font-thin leading-[1]">
          Folio<span className="font-bit">©</span>2024
          <span className="font-bit">⚗✨</span>
        </h1>

        {/* Description */}
        <p className="mt-6 text-lg sm:text-xl md:text-2xl font-mono leading-none">
          Crafting seamless digital experiences.
        </p>
      </div>
    </section>
  );
};

export default Hero;
