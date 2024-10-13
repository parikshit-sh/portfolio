import "@styles/globals.css";
import type { AppProps } from "next/app";
import SmoothScrolling from "@app/components/SmoothScrolling";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

function MyApp({ Component, pageProps }: AppProps) {
  const pageRevealRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const pageReveal = pageRevealRef.current;
    if (pageReveal) {
      gsap.set(pageReveal, { y: 0 });
      gsap.to(pageReveal, {
        y: "-100%",
        duration: 1,
        ease: "power3.inOut",
        delay: 0.5,
      });
    }
  }, []);

  return (
    <>
      <div
        ref={pageRevealRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "#121212", 
          zIndex: 9999,
        }}
      />
      <SmoothScrolling>
        <Component {...pageProps} />
      </SmoothScrolling>
    </>
  );
}

export default MyApp;
