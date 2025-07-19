import { useEffect, useRef, useState } from 'react';
import Navbar from "../components/Navbar";
import { useNavigate } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';

const Contact = () => {
    const heroRef = useRef(null);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [headline, setHeadline] = useState('');
    const fullText = "Hablemos de tu proyecto";
    const [currentIndex, setCurrentIndex] = useState(0);
    const bounceRef = useRef(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (currentIndex < fullText.length) {
            const timeout = setTimeout(() => {
                setHeadline(prev => prev + fullText[currentIndex]);
                setCurrentIndex(prev => prev + 1);
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
                heroRef.current.style.transform = `translateY(${scrollY * 0.3}px) scale(${1 + scrollY * 0.0002})`;
                if (bounceRef.current) {
                    bounceRef.current.style.opacity = opacity;
                }
            }

            const totalHeight = document.body.scrollHeight - window.innerHeight;
            setScrollProgress(Math.min(window.scrollY / totalHeight, 1));
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitSuccess(true);
            setFormData({ name: '', email: '', message: '' });
        }, 2000);
    };

    return (
        <div className="bg-dark text-light min-h-screen">
            <Navbar scrollProgress={scrollProgress} isMobile={isMobile} />
            <section className="relative h-screen overflow-hidden flex items-center justify-center bg-gradient-to-br from-dark-blue to-primary">
                <div
                    ref={heroRef}
                    className="absolute inset-0 w-full h-full"
                >
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
                            {headline}<span className="animate-pulse">|</span>
                        </span>
                    </h1>
                </div>

                <div ref={bounceRef} className="absolute bottom-20 transform -translate-x-1/2 animate-bounce">
                    <div className="w-8 h-12 border-2 border-accent rounded-full flex justify-center items-start p-1">
                        <div className="w-1 h-3 bg-accent rounded-full animate-scrollIndicator"></div>
                    </div>
                </div>
            </section>
            <section className="py-24 px-6 max-w-7xl mx-auto bg-gradient-to-b from-primary to-secondary">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    <div className="animate-fadeIn" style={{ animationDelay: '0.3s' }}>
                        <h2 className="text-4xl font-Garet mb-8 bg-clip-text text-transparent bg-gradient-to-r from-light to-accent">
                            Información de contacto
                        </h2>
                        <p className="text-light/90 text-lg font-Poppins-Medium mb-10">
                            ¿Tienes un proyecto en mente? Completa el formulario o contáctame directamente a través de estos medios.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-6 p-6 bg-secondary/50 rounded-xl backdrop-blur-sm hover:bg-secondary/70 transition-all duration-500">
                                <div className="text-3xl text-accent p-4 bg-accent/10 rounded-full">
                                    <FaIcons.FaEnvelope />
                                </div>
                                <div>
                                    <h3 className="text-xl font-Garet mb-2">Email</h3>
                                    <p className="text-light/80 font-Poppins-Medium">hola@miguelsalis.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 p-6 bg-secondary/50 rounded-xl backdrop-blur-sm hover:bg-secondary/70 transition-all duration-500">
                                <div className="text-3xl text-accent p-4 bg-accent/10 rounded-full">
                                    <FaIcons.FaMobile />
                                </div>
                                <div>
                                    <h3 className="text-xl font-Garet mb-2">Teléfono</h3>
                                    <p className="text-light/80 font-Poppins-Medium">+34 123 456 789</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 p-6 bg-secondary/50 rounded-xl backdrop-blur-sm hover:bg-secondary/70 transition-all duration-500">
                                <div className="text-3xl text-accent p-4 bg-accent/10 rounded-full">
                                    <FaIcons.FaLocationArrow />
                                </div>
                                <div>
                                    <h3 className="text-xl font-Garet mb-2">Ubicación</h3>
                                    <p className="text-light/80 font-Poppins-Medium">Madrid, España</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12">
                            <h3 className="text-xl font-Garet mb-6">Redes sociales</h3>
                            <div className="flex gap-6">
                                {[
                                    { icon: <FaIcons.FaInstagram size="24px" />, name: "Instagram" },
                                    { icon: <FaIcons.FaTiktok size="24px" />, name: "TikTok" },
                                ].map((social, index) => (
                                    <a
                                        key={index}
                                        href="#"
                                        className="flex justify-center items-center gap-2 text-center border-2 border-accent/30 px-6 py-4 rounded-xl hover:bg-accent/10 hover:border-accent/50 transition-all duration-500 animate-fadeInUp"
                                        style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                                    >
                                        <span className="text-accent">{social.icon}</span>
                                        <span className="font-Poppins-Medium text-sm">{social.name}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div
                        className="bg-secondary/50 border-2 border-accent/20 rounded-2xl p-8 backdrop-blur-md shadow-xl animate-fadeIn"
                        style={{ animationDelay: '0.6s' }}
                    >
                        <h2 className="text-3xl font-Garet mb-8 bg-clip-text text-transparent bg-gradient-to-r from-light to-accent">
                            Contáctame
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="animate-fadeInUp" style={{ animationDelay: '0.7s' }}>
                                <label htmlFor="name" className="block mb-3 text-lg font-Poppins-Medium">Nombre</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-secondary/70 border-2 border-accent/30 rounded-xl px-4 py-4 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition-all duration-500 text-light placeholder-light/50"
                                    placeholder="Tu nombre completo"
                                    required
                                />
                            </div>

                            <div className="animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
                                <label htmlFor="email" className="block mb-3 text-lg font-Poppins-Medium">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-secondary/70 border-2 border-accent/30 rounded-xl px-4 py-4 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition-all duration-500 text-light placeholder-light/50"
                                    placeholder="tu@email.com"
                                    required
                                />
                            </div>

                            <div className="animate-fadeInUp" style={{ animationDelay: '0.9s' }}>
                                <label htmlFor="message" className="block mb-3 text-lg font-Poppins-Medium">Mensaje</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="6"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full bg-secondary/70 border-2 border-accent/30 rounded-xl px-4 py-4 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition-all duration-500 text-light placeholder-light/50"
                                    placeholder="Cuéntame sobre tu proyecto..."
                                    required
                                ></textarea>
                            </div>

                            <div className="animate-fadeInUp" style={{ animationDelay: '1s' }}>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full px-8 py-5 bg-accent text-white font-Poppins-Medium hover:bg-transparent hover:text-light border-2 border-accent transition-all duration-500 rounded-xl text-lg flex items-center justify-center gap-3 group"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Enviando...
                                        </>
                                    ) : (
                                        <>
                                            Enviar
                                        </>
                                    )}
                                </button>
                            </div>

                            {submitSuccess && (
                                <div className="mt-6 p-6 bg-green-900/50 border-2 border-green-500 rounded-xl text-center animate-fadeIn flex items-center gap-3">
                                    <FaIcons.FaCheckCircle className="text-green-400 text-2xl" />
                                    <div>
                                        <h4 className="font-Garet text-lg">¡Mensaje enviado con éxito!</h4>
                                        <p className="text-light/80 text-sm font-Poppins-Medium">Me pondré en contacto contigo pronto.</p>
                                    </div>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </section>

            {/* FAQ Section - Rediseñado */}
            <section className="py-24 bg-gradient-to-b from-secondary to-purple-dark">
                <div className="max-w-5xl mx-auto px-6">
                    <h2 className="text-4xl md:text-5xl font-Garet mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-light to-purple-light">
                        Preguntas frecuentes
                    </h2>

                    <div className="space-y-6">
                        {[
                            {
                                question: "¿Cuál es tu disponibilidad?",
                                answer: "Actualmente tengo disponibilidad para nuevos proyectos a partir del próximo mes. Contacta conmigo para concretar fechas."
                            },
                            {
                                question: "¿Trabajas de forma remota?",
                                answer: "Sí, puedo trabajar en proyectos de forma remota. Para sesiones de fotografía o video, dependiendo de la ubicación, puedo viajar o trabajar con equipos locales."
                            },
                            {
                                question: "¿Cuáles son tus tarifas?",
                                answer: "Las tarifas varían según el tipo de proyecto, duración y complejidad. Después de conocer los detalles de tu proyecto, puedo proporcionarte un presupuesto personalizado."
                            },
                            {
                                question: "¿Qué tipos de proyectos aceptas?",
                                answer: "Trabajo en una amplia variedad de proyectos creativos, desde producciones audiovisuales completas hasta sesiones fotográficas puntuales. Cada proyecto es único y me adapto a tus necesidades específicas."
                            }
                        ].map((faq, i) => (
                            <div
                                key={i}
                                className="border-2 border-accent/10 bg-secondary/30 rounded-2xl p-8 hover:border-accent/30 transition-all duration-500 backdrop-blur-sm animate-fadeInUp"
                                style={{ animationDelay: `${0.3 + i * 0.1}s`, animationFillMode: 'forwards' }}
                            >
                                <h3 className="text-xl font-Garet font-bold mb-4 flex items-center gap-3">
                                    <FaIcons.FaQuestionCircle className="text-accent" />
                                    {faq.question}
                                </h3>
                                <p className="text-light/80 font-Poppins-Medium pl-9">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;