import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroImg from "public/black_.webp";
import Image from "next/image";

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
      
      className="flex items-center justify-center 
      min-h-screen md:min-h-[30rem] bg-transparent text-white pt-10"
    >
      <div ref={heroRef} className="w-full h-full fixed top-0 bg-black">
        <Image src={heroImg} alt="hero" 
        className="object-cover w-full h-full top-0 left-0 min-h-screen opacity-50" 
        width={1000} height={1000} />
      </div>
      <div ref={textRef} className="text-center p-6 max-w-6xl select-none">
        {/* Name Heading */}
        <h1 className="text-[clamp(1.4rem,7vw,7rem)] md:text-[clamp(1.8rem,6vw,6rem)] font-editorial leading-[1] ">
         <span className="font-gVibes text-[clamp(1.7rem,8vw,8rem)] md:text-[clamp(2rem,7vw,7rem)] ">P</span>ARIKSHIT{" "}
        <span className="font-gVibes text-[clamp(1.7rem,8vw,8rem)] md:text-[clamp(2rem,7vw,7rem)] ">S</span>HARMA
        </h1>

        {/* Title */}
        <h1 className="text-[clamp(1.4rem,7vw,7rem)] md:text-[clamp(1.8rem,6vw,6rem)] uppercase font-editorial leading-[1]">
          front end 
        </h1>
        <h1 className="text-[clamp(1.4rem,7vw,7rem)] md:text-[clamp(1.8rem,6vw,6rem)] uppercase font-editorial leading-[1]">
        developer<span className="font-bit">✨</span>
        </h1>

        {/* Description */}
        <p className="md:mt-6 text-[clamp(1rem,2vw,2rem)] font-mono leading-none p-6">
          Crafting seamless digital experiences.
        </p>
      </div>
    </section>
  );
};

export default Hero;
