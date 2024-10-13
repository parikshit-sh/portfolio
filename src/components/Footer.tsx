import { useState } from "react";
import emailjs from "@emailjs/browser";
import gsap from "gsap";

interface FormData {
  from_name: string;
  email: string;
  message: string;
}

const Footer = () => {
  const [formData, setFormData] = useState<FormData>({
    from_name: "",
    email: "",
    message: "",
  });
  const [showNotification, setShowNotification] = useState<boolean>(false);
  const [showCopyHint, setShowCopyHint] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? '',
        formData as unknown as Record<string, unknown>,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? ''
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          setShowNotification(true);
          setFormData({ from_name: "", email: "", message: "" });
          setTimeout(() => setShowNotification(false), 3000);
        },
        (error) => {
          console.error("Failed to send email:", error);
          alert("Failed to send message. Please try again.");
        }
      );
  };
  
  return (
    <>
    <section className="flex flex-col items-center justify-center xl:flex-row z-[20]">
    <div>
        <div className="lg:text-7xl text-4xl xl:max-w-lg
        md:text-7xl mx-auto uppercase text-center py-8
        ">
          <h1 className="font-edgy select-none">
          GET IN TOUCH<span className="font-bit">✨</span> {" "}
          <span></span>
          </h1>

          <div className="relative inline-block px-20">
            <h1 
              className="text-2xl md:text-3xl
               text-[#eeff82] lowercase cursor-pointer transition-all 
               duration-300 ease-in-out"
              onClick={() => {
                navigator.clipboard.writeText("parikshitshadn@gmail.com");
                gsap.to(".copy-notification", {
                  opacity: 1,
                  y: -20,
                  duration: 0.5,
                  onComplete: () => {
                    gsap.to(".copy-notification", {
                      opacity: 0,
                      y: 0,
                      duration: 0.5,
                      delay: 1.5
                    });
                  }
                });
              }}
              onMouseEnter={() => setShowCopyHint(true)}
              onMouseLeave={() => setShowCopyHint(false)}
            >
              parikshitshadn@gmail.com
              {showCopyHint && (
                <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-11 uppercase bg-[#eeff82] text-black py-1 px-3 rounded text-xs">
                  copy
                </span>
              )}
            </h1>
            <span className="copy-notification absolute left-1/2 transform -translate-x-1/2 -bottom-16 bg-[#eeff82] text-black py-1 px-3 rounded opacity-0 text-xs">
              Email copied!
            </span>
          </div>
        </div>
      </div>

      <footer className="footer py-20 bg-transparent">
      <div className="max-w-full  w-full mx-auto px-2">
        <h2 className="select-none
         mb-8 text-center about-head lg:text-7xl text-4xl
        md:text-7xl 
         uppercase p-6 font-edgy">drop a message</h2>
        <form onSubmit={handleSubmit} className="space-y-4 p-0 md:p-8">
          <input
            type="text"
            name="from_name"
            value={formData.from_name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full p-2 border-b bg-transparent border-white focus:outline-none placeholder:uppercase text-xs md:text-lg" 
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full p-2 border-b autofill:bg-black bg-transparent border-white focus:outline-none text-xs md:text-lg placeholder:uppercase" 
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            className="w-full p-2 border-b bg-transparent border-white focus:outline-none placeholder:uppercase text-xs md:text-lg"  
            required
          ></textarea>
          <div className="px-10">
            <button
              type="submit"
              className="btns text-lg md:text-2xl bg-white mx-auto
              text-black w-1/2 py-3 px-8  uppercase flex justify-center items-center
               transition-all duration-300 ease-in-out
                 hover:bg-[#eeff82] transform hover:-translate-y-1 hover:no-underline 
            text-center"
            >
              Send
            </button>
          </div>
        </form>
        {showNotification && (
          <div className="fixed bottom-4 right-4 bg-[#eeff82] text-black py-2 px-4 rounded shadow-lg transition-opacity duration-300">
            Message sent successfully
          </div>
        )}
       
      </div>
    
    </footer>
    </section>
    <div className="text-white pt-24 text-center pb-10">
      <div className="">
        <p className="text-xl md:text-2xl lg:text-3xl" style={{ fontFamily: 'PPMondwest' }}>
          &copy; {new Date().getFullYear()} FOLIO 
        </p>
      </div>
    </div>
   </>
  );
};

export default Footer;
