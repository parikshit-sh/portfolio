import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { delay: 1, duration: 1, ease: "power3.out", stagger: 0.2 } });
    tl.fromTo(
      textRef.current,
      { opacity: 0, y: 150 },
      { opacity: 1, y: 0 }
    );

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
      className="flex flex-col items-start justify-center 
      min-h-screen bg-transparent text-white p-8 md:p-16 lg:p-24"
    >
      <div ref={textRef} className="w-full max-w-[1400px] mx-auto select-none">
        <h1 className="text-[clamp(3rem,12vw,12rem)] font-editorial leading-[0.9] mb-4">
          <span className="font-gVibes text-[1.2em]">P</span>ARIKSHIT
        </h1>
        <h1 className="text-[clamp(3rem,12vw,12rem)] font-editorial leading-[0.9] mb-4">
          <span className="font-gVibes text-[1.2em]">S</span>HARMA
        </h1>

        <div className="mt-8 md:mt-16">
          <h2 className="text-[clamp(1.5rem,8vw,12rem)] uppercase font-editorial leading-[1.1]">
            front end
          </h2>
          <h2 className="text-[clamp(1.5rem,8vw,12rem)] uppercase font-editorial leading-[1.1] flex items-center">
            developer
            <span className="font-bit text-[1.3em] ml-2">✨</span>
          </h2>
        </div>

        <p className="mt-8 md:mt-16 text-[clamp(1rem,2vw,1.5rem)] font-mono max-w-2xl">
          Crafting seamless digital experiences.
        </p>
      </div>
    </section>
  );
};

export default Hero;