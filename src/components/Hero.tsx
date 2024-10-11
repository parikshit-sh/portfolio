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
      <div ref={textRef} className="text-center p-8 max-w-6xl">
        {/* Name Heading */}
        <h1 className="text-[8vw] sm:text-[6vw]  font-thin font-mori leading-[1]">
          <span className="font-mori">P</span>ARIKSHIT{" "}
          <span className="font-mori">S</span>HARMA
        </h1>

        {/* Title */}
        <h1 className="text-[9vw] sm:text-[3em] md:text-[8vw] uppercase font-mori leading-[1]">
          front end 
          developer<span className="font-bit">✨</span>
         
        </h1>

        {/* Footer Title */}
     
          
 

        {/* Description */}
        <p className="mt-6 text-lg sm:text-xl md:text-2xl font-mono leading-none">
          Crafting seamless digital experiences.
        </p>
      </div>
    </section>
  );
};

export default Hero;
