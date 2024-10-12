import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

    // Fade out on scroll
    gsap.to(heroRef.current, {
      opacity: 0,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <section
      ref={heroRef}
      className="flex items-center justify-center mb-[20vh] lg:mb-[80vh]
      min-h-screen md:min-h-[30rem] bg-transparent text-white pt-10"
    >
      <div ref={textRef} className="text-center p-8 max-w-6xl fixed select-none">
        {/* Name Heading */}
        <h1 className="text-[clamp(1.6rem,6vw,6rem)] font-thin font-woodland leading-[1] ">
          <span className="font-gVibes font-bold">P</span>ARIKSHIT{" "}
          <span className="font-gVibes font-bold">S</span>HARMA
        </h1>

        {/* Title */}
        <h1 className="text-[clamp(2rem,7vw,7rem)] uppercase font-woodland leading-[1]">
          front end 
        </h1>
        <h1 className="text-[clamp(2rem,7vw,7rem)] uppercase font-woodland leading-[1]">
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
