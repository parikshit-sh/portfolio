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
      { opacity: 1, y: 0 } // End statey
    );
  }, []);

  return (
    <section
      ref={heroRef}
      className="flex items-center justify-center 
      min-h-screen md:min-h-[30rem] bg-transparent text-white pt-10"
    >
      <div ref={textRef} className="text-center p-8 max-w-6xl">
        {/* Name Heading */}
        <h1 className="text-[clamp(1.6rem,6vw,6rem)] font-thin font-mori leading-[1]">
          <span className="font-mori">P</span>ARIKSHIT{" "}
          <span className="font-mori">S</span>HARMA
        </h1>

        {/* Title */}
        <h1 className="text-[clamp(2rem,7vw,7rem)] uppercase font-mori leading-[1]">
          front end 
        </h1>
        <h1 className="text-[clamp(2rem,7vw,7rem)] uppercase font-mori leading-[1]">
        developer<span className="font-bit">✨</span>
        </h1>

        {/* Description */}
        <p className="mt-6 text-[clamp(1rem,2vw,2rem)] font-mono leading-none">
          Crafting seamless digital experiences.
        </p>
      </div>
    </section>
  );
};

export default Hero;
