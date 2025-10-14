import { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import * as FaIcons from "react-icons/fa";
import ContactSection from "../components/ContactSection";
import FAQSection from "../components/FAQSection";

const Contact = () => {
  const heroRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [headline, setHeadline] = useState("");
  const fullText = "Hablemos de tu proyecto";
  const [currentIndex, setCurrentIndex] = useState(0);
  const bounceRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setHeadline((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        const maxScroll = 500;
        const opacity = 1 - Math.min(scrollY / maxScroll, 1);
        heroRef.current.style.transform = `translateY(${scrollY * 0.3
          }px) scale(${1 + scrollY * 0.0002})`;
        if (bounceRef.current) {
          bounceRef.current.style.opacity = opacity;
        }
      }

      const totalHeight = document.body.scrollHeight - window.innerHeight;
      setScrollProgress(Math.min(window.scrollY / totalHeight, 1));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    }, 2000);
  };

  return (
    <div className="bg-dark text-light min-h-screen">
      <Navbar scrollProgress={scrollProgress} isMobile={isMobile} />
      <section className="relative h-screen overflow-hidden flex items-center justify-center bg-gradient-to-br from-dark-blue to-primary">
        <div ref={heroRef} className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
          >
            <source src="/video_2.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-90"></div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute w-64 h-64 rounded-full bg-accent/20 blur-3xl animate-pulse-glow"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-Garet mb-6 tracking-tight">
            <span className="block font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-light to-accent animate-gentle-blink">
              Contacto
            </span>
            <span className="text-xl md:text-3xl font-Poppins-Medium border-t pt-6 border-accent/30">
              {headline}
              <span className="animate-pulse">|</span>
            </span>
          </h1>
        </div>

        <div
          ref={bounceRef}
          className="absolute bottom-20 transform -translate-x-1/2 animate-bounce"
        >
          <div className="w-8 h-12 border-2 border-accent rounded-full flex justify-center items-start p-1">
            <div className="w-1 h-3 bg-accent rounded-full animate-scrollIndicator"></div>
          </div>
        </div>
      </section>
      <ContactSection />
      <FAQSection />
    </div>
  );
};

export default Contact;
