const About = () => {
  return (
    <section className="about-section py-8 flex flex-col items-center p-8 md:p-16 lg:p-24">
      <div className="max-w-[89.2rem] w-full">
      <div className="flex flex-col 
      justify-center flex-grow">
        
        <div className="flex justify-center mb-8">
          <div className="w-full lg:w-full z-50">
            <p className="text-sm  md:text-3xl lg:text-4xl px-4 ">
              Hi, I&apos;m  a Web Developer with a passion for
              crafting exceptional digital experiences. With a solid background
              in front-end technologies like React and NextJS, JavaScript, 
              TailwindCSS,
              and a keen eye for design.
            </p>
          </div>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center z-20
        gap-4 sm:gap-6 px-10">
          <a
            href="mailto:parikshitshadn@gmail.com?subject=Work Inquiry"
            className="btns inline-block text-lg md:text-2xl bg-white border-2 
              text-black w-full py-3 px-8 hover:bg-transparent uppercase
               hover:text-white hover:border-white 
            transition-all duration-300 ease-in-out hover:no-underline md:w-52 
            text-center"
          >
            Contact
          </a>
          <a
            href="/resume.jpg"
            download="resume.jpg"
            className="btns inline-block text-lg md:text-2xl bg-transparent uppercase border-2
             border-white text-whtie hover:bg-white
              hover:text-black transition-all duration-300 
              ease-in-out hover:no-underline w-full py-3 px-8 md:w-52 text-center"
          >
            Resume
          </a>
        </div>
        </div>
      </div>
    </section>
  );
};

export default About;