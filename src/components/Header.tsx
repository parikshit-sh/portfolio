import { useEffect, useState } from "react";
import { gsap } from "gsap";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [bgColor, setBgColor] = useState("transparent");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Change background color based on scroll position
      if (currentScrollY > 100) {
        setBgColor("rgba(0, 0, 0, 0.8)"); // Semi-transparent background after scrolling down
      } else {
        setBgColor("transparent"); // Keep bg transparent when at the top
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    gsap.set(".navbar-link", { opacity: 0, y: 10 });

    gsap.fromTo(
      ".navbar-link",
      {
        opacity: 0,
        y: 10,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.2,
        stagger: 0.1,
        ease: "power2.out",
      }
    );


    // Add underline effect to links
    const links = document.querySelectorAll(".navbar-link a");
    links.forEach((link) => {
      const underline = document.createElement("div");
      underline.className = "underline";
      link.appendChild(underline);

      gsap.set(underline, {
        scaleX: 0,
        transformOrigin: "left",
        backgroundColor: "white",
        height: "1px",
        position: "absolute",
        bottom: "-2px",
        left: 0,
        width: "100%",
      });

      gsap.set(link, {
        position: "relative",
        overflow: "hidden",
      });

      link.addEventListener("mouseenter", () => {
        gsap.to(underline, { scaleX: 1, duration: 0.5, ease: "power2.out" });
        gsap.to(link, {
          y: -5,
          duration: 0.5,
          ease: "power2.out",
        });
      });

      link.addEventListener("mouseleave", () => {
        gsap.to(underline, { scaleX: 0, duration: 0.5, ease: "power2.out" });
        gsap.to(link, {
          y: 0,
          duration: 0.5,
          ease: "power2.out",
        });
      });
    });
  }, []);

  useEffect(() => {
    if (menuOpen) {
      gsap.to(".mobile-menu", {
        x: 0,
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(".mobile-menu-overlay", {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      });
      document.body.style.overflow = "hidden";
    } else {
      gsap.to(".mobile-menu", {
        x: "100%",
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(".mobile-menu-overlay", {
        opacity: 0,
        duration: 0.3,
        ease: "power2.out",
      });
      document.body.style.overflow = "auto";
    }

    const links = document.querySelectorAll(".mobile-menu a");
    links.forEach((link) => {
      const underline = document.createElement("div");
      underline.className = "underline";
      link.appendChild(underline);

      gsap.set(underline, {
        scaleX: 0,
        transformOrigin: "left",
        backgroundColor: "#121212",
        height: "2px",
        position: "absolute",
        bottom: "-1px",
        left: 0,
        width: "100%",
      });

      gsap.set(link, {
        position: "relative",
        overflow: "hidden",
      });

      link.addEventListener("mouseenter", () => {
        gsap.to(underline, { scaleX: 1, duration: 0.5, ease: "power2.out" });
        gsap.to(link, {
          y: -5,
          duration: 0.5,
          ease: "power2.out",
        });
      });

      link.addEventListener("mouseleave", () => {
        gsap.to(underline, { scaleX: 0, duration: 0.5, ease: "power2.out" });
        gsap.to(link, {
          y: 0,
          duration: 0.5,
          ease: "power2.out",
        });
      });
    });
  }, [menuOpen]);

  return (
    <header
      className={`navbar text-xs 
        uppercase fixed top-0 left-0 right-0
         transition-all duration-300 opacity-100`} // Keep the navbar visible
      style={{ backgroundColor: bgColor, zIndex: 1000 }} // Set z-index to ensure it overlaps other content
    >
      <nav className="flex justify-center items-center p-4">
      
        <ul className="flex space-x-2 md:space-x-6 no-underline">
        <h1 className="text-xs uppercase navbar-link">Parikshit Sharma</h1>
          <li className="navbar-link relative">
            <a
              href="https://github.com/parikshit-sh"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline hover:no-underline"
            >
              GitHub
            </a>
          </li>
          <li className="navbar-link relative text-xs">
            <a
              href="https://www.linkedin.com/in/parikshit-sh/"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
          <li className="navbar-link relative">
            <a
              href="https://parikshitblog.vercel.app/"
              target="_blank"
            >
              Blog
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
