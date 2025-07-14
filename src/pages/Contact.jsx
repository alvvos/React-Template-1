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

    };

    return (
        <div className="bg-black text-white min-h-screen">
            <Navbar scrollProgress={scrollProgress} />
            <section className="relative h-screen overflow-hidden flex items-center justify-center">
                <div
                    ref={heroRef}
                    className="absolute inset-0 w-full h-full"
                >
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover opacity-70"
                    >
                        <source src="/video.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-black opacity-40 pointer-events-none"></div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-tight">
                        <span className="block font-bold mb-2">Contacto</span>
                        <span className="text-xl md:text-3xl font-mono border-t pt-4 border-white/20">
                            {headline}<span className="animate-pulse">|</span>
                        </span>
                    </h1>
                </div>
                <div ref={bounceRef} className="absolute bottom-20 transform -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                        <div className="w-1 h-2 bg-white mt-2 rounded-full animate-scrollIndicator"></div>
                    </div>
                </div>
            </section>

            <section className="py-20 px-4 max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="animate-fadeIn [animation-fill-mode:forwards] [animation-delay:0.3s]">
                        <h2 className="text-3xl md:text-4xl mb-6 font-Garet">Información</h2>
                        <p className="text-white/80 mb-8">
                            ¿Tienes un proyecto en mente? Completa el formulario o contáctame directamente a través de estos medios.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="text-2xl mt-1"><FaIcons.FaEnvelope /></div>
                                <div>
                                    <h3 className="font-medium">Email</h3>
                                    <p className="text-white/80">hola@miguelsalis.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="text-2xl mt-1"><FaIcons.FaMobile /></div>
                                <div>
                                    <h3 className="font-medium">Teléfono</h3>
                                    <p className="text-white/80">+34 123 456 789</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="text-2xl mt-1"><FaIcons.FaLocationArrow /></div>
                                <div>
                                    <h3 className="font-medium">Ubicación</h3>
                                    <p className="text-white/80">Madrid, España</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12">
                            <h3 className="font-medium mb-4 font-Garet">Redes sociales</h3>
                            <div className="flex gap-4">
                                <a
                                    href="#"
                                    className="flex justify-center gap-2 text-center border border-white/20 px-4 py-4 rounded-full hover:bg-white/10 transition-all duration-300"
                                >
                                    <FaIcons.FaInstagram size="24px" />
                                </a>
                                <a
                                    href="#"
                                    className="flex justify-center gap-2 text-center border border-white/20 px-4 py-4 rounded-full hover:bg-white/10 transition-all duration-300"
                                >
                                    <FaIcons.FaTiktok size="24px" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="animate-fadeIn [animation-fill-mode:forwards] [animation-delay:0.6s]">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium">Nombre</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-white/50 transition-all"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-white/50 transition-all"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block mb-2 text-sm font-medium">Mensaje</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-white/50 transition-all"
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full px-6 py-3 bg-white text-black hover:bg-transparent hover:text-white border border-white transition-all duration-500 rounded-full text-lg font-medium flex items-center justify-center gap-2"
                            >
                                {isSubmitting ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Enviando...
                                    </>
                                ) : 'Enviar mensaje'}
                            </button>

                            {submitSuccess && (
                                <div className="mt-4 p-4 bg-green-900/50 border border-green-500 rounded-lg text-center animate-fadeIn">
                                    ¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gradient-to-br from-black to-gray-900/80">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-2xl md:text-2xl mb-12 text-center font-Garet">Preguntas frecuentes</h2>

                    <div className="max-w-3xl mx-auto space-y-4">
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
                            }
                        ].map((faq, i) => (
                            <div
                                key={i}
                                className="border-b border-white/10 pb-4 animate-fadeInUp"
                                style={{ animationDelay: `${0.3 + i * 0.1}s`, animationFillMode: 'forwards' }}
                            >
                                <h3 className="text-l font-Garet font-bold mb-2">{faq.question}</h3>
                                <p className="text-white/80">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;