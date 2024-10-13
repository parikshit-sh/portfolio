import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

interface Project {
  id: string;
  title: string;
  techUsed: string[];
  date: string;
  description: string;
  liveLink: string;
  images: (string | StaticImport)[];
}

const Projects = ({ projects = [
  {
    title: "Plants Oasis",
    id: "01",
    description:
      "Ecommerce Plant Shop with sleek interface and responsive design. Offering a wide range of plants and planters for your home or office.",
    images: [
      "/oasis1.webp",
      "/oasis2.webp",
      "/oasis3.webp"
    ],
    techUsed: ["ReactJS", "TailwindCSS", "Redux"],
    liveLink: "https://plants-oasis.vercel.app/",
    date: "2024",
  },
  {
    title: "Rentals",
    id: "02",
    description:
      "Rentals is a modern electronic car rental platform that offers a seamless user experience. Enjoy an intuitive design that adapts to all devices, allowing users to easily browse and reserve their ideal vehicle with minimal effort.",
    images: [
      "/rentals.webp",
      "/rentals2.webp",
      "/rentals3.webp"
    ],
    techUsed: ["ReactJS", "TailwindCSS"],
    liveLink: "https://rentals-car.vercel.app/",
    date: "2024",
  },
  {
    title: "Token Stats",
    id: "03",
    description:
      "TokenStats is a cryptocurrency tracker. It provides real-time updates on cryptocurrency prices, market caps, and other essential metrics. With a minimal interface and responsive design.",
    images: [
      "/token.webp",
      "/tokenstats.webp",
      "/tokens2.png"
    ],
    techUsed: ["NextJS", "TailwindCSS", "CoinGeckoAPI"],
    liveLink: "https://coinyard.vercel.app/",
    date: "2023",
  },
]}: { projects?: Project[] }) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [activeProject, setActiveProject] = useState<string | null>(null);

  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  const borderRefs = useRef<(HTMLDivElement | null)[]>([]);
  const animationCompletedRef = useRef<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    if (typeof window !== "undefined") {
      handleResize();
      window.addEventListener("resize", handleResize);
    }

    // Animate border lines on scroll only once
    if (!animationCompletedRef.current) {
      borderRefs.current.forEach((border, index) => {
        gsap.fromTo(
          border,
          { width: 0 },
          {
            width: "100%",
            duration: 0.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: border,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none none",
            },
            delay: index * 0.1, // Stagger effect
            onComplete: () => {
              if (index === borderRefs.current.length - 1) {
                animationCompletedRef.current = true;
              }
            },
          }
        );
      });
    }

    if (activeProject !== null) {
      gsap.to(`#project-details-${activeProject}`, {
        height: "auto",
        duration: 0.6,
        ease: "power2.inOut",
        onComplete: () => {
          if (isMobile) {
            gsap.to(window, {
              duration: 1,
              scrollTo: { y: `#project-${activeProject}`, offsetY: 50 },
              ease: "power2.inOut"
            });
          }
        }
      });
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [activeProject, isMobile]);

  const handleProjectClick = (id: string) => {
    if (activeProject === id) {
      gsap.to(`#project-details-${id}`, {
        height: 0,
        duration: 0.6,
        ease: "power2.inOut",
        onComplete: () => setActiveProject(null),
      });
    } else {
      if (activeProject !== null) {
        gsap.to(`#project-details-${activeProject}`, {
          height: 0,
          duration: 0.6,
          ease: "power2.inOut",
        });
      }
      setActiveProject(id);
      gsap.to(`#project-details-${id}`, {
        height: "auto",
        duration: 0.6,
        ease: "power2.inOut",
        onComplete: () => {
          if (isMobile) {
            gsap.to(window, {
              duration: 1,
              scrollTo: { y: `#project-${id}`, offsetY: 50 },
              ease: "power2.inOut"
            });
          }
        }
      });
    }
  };

  return (
    <section className="projects-section py-10 pt-20  flex flex-col items-center" id="projects_">
      <div className="max-w-[89.2rem] w-full px-8 md:px-16 lg:px-24">
        <h1 className="text-4xl md:text-5xl lg:text-6xl px-4  font-mori mb-12 uppercase" id="prod">
          Projects
        </h1>
      </div>

      <div className="w-full px-4 lg:px-0 p-4">
        <div className="flex flex-col">
          {projects.map((project: Project, index: number) => (
            <div key={project.id} className="project-container" id={`project-${project.id}`}>
              <div
                ref={(el) => {
                  borderRefs.current[index] = el;
                }}
                className="border-t border-white w-0"
              />
              <div
                ref={(el) => {
                  projectRefs.current[parseInt(project.id) - 1] = el; // Adjust index based on id
                }}
                className={`project-row cursor-pointer 
                  flex justify-between
                  items-center text-white hover:bg-[#202020] hover:text-[#eeff82] `}
                onClick={() => handleProjectClick(project.id)}
              >
                <h2 className="text-base p-4">{project.title}</h2>
                <div className="flex items-center gap-10">
                  <div className="tech-used hidden md:block text-base">
                    {project.techUsed.map((tech: string, techIndex: number) => (
                      <span key={techIndex} className="text-sm rounded-full px-2 py-1">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <span className="text-base px-4">{project.date}</span>
                </div>
              </div>
              <div
                id={`project-details-${project.id}`}
                className="project-details overflow-hidden h-0"
              >
                <div className="py-6 p-4">
                  <p className="mb-4 text-[1.3rem] max-w-4xl md:text-3xl">{project.description}</p>
                  <ol className="tech-used flex flex-wrap text-9xl md:hidden p-3">
                    {project.techUsed.map((tech: string, techIndex: number) => (
                      <li key={techIndex} className="text-sm px-2 py-1 mb-2 mr-2
                       before:content-['●'] before:mr-2 before:text-lg before:text-[#eeff82]">
                        {tech}
                      </li>
                    ))}
                  </ol>
                  <div className="flex mb-6">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full text-black bg-white
                       px-5 py-2 text-base transition-all duration-300 ease-in-out
                        hover:bg-[#eeff82] transform hover:-translate-y-1"
                    >
                      See Website
                    </a>
                  </div>
                  <div className="project-images gap-3 overflow-x-auto grid
                   grid-cols-1 lg:grid-cols-3">
                    {project.images.slice(0, 3).map
                    ((image: string | StaticImport, imageIndex: number) => (
                      <div key={imageIndex} className="overflow-hidden">
                        <Image 
                          src={image}
                          alt={`Project ${project.title} Image ${imageIndex + 1}`}
                          width={600}
                          height={400}
                          className="object-cover w-full 
                          h-full"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;