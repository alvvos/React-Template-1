import { useEffect, useRef, useState } from 'react';
import Navbar from "../components/Navbar";
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const heroRef = useRef(null);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [headline, setHeadline] = useState('');
    const fullText = "Filmmaker and Photography";
    const [currentIndex, setCurrentIndex] = useState(0);
    const bounceRef = useRef(null);
    const navigate = useNavigate();

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
                bounceRef.current.style.opacity = opacity;
            }

            const totalHeight = document.body.scrollHeight - window.innerHeight;
            setScrollProgress(Math.min(window.scrollY / totalHeight, 1));
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
                        <source src="/video_2.mp4" type="video/mp4" />

                    </video>
                    <div className="absolute inset-0 bg-black opacity-30 pointer-events-none"></div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                <div className="relative z-10 text-center text-white px-4">
                    <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-tight">
                        <span className="block font-bold mb-2">SALÍSTUDIOS</span>
                        <span className="text-xl md:text-3xl font-mono border-t pt-4 border-white/20">
                            {headline}<span className="animate-pulse">|</span>
                        </span>
                    </h1>

                    <button onClick={() => window.scrollTo({ top: 1650, behavior: 'smooth' })} className="mt-12 px-8 py-3 border border-white/50 hover:border-white/100 hover:bg-white/10 transition-all duration-500 rounded-full text-lg">
                        Ver Portfolio
                    </button>
                </div>
                <div ref={bounceRef} className="absolute bottom-20 transform -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                        <div className="w-1 h-2 bg-white mt-2 rounded-full animate-scrollIndicator"></div>
                    </div>
                </div>
            </section>
            <section className="pt-12 md:pt-20 px-4 w-full max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-5xl mb-12 md:mb-20 text-center font-Garet animate-fadeIn [animation-fill-mode:forwards] [animation-delay:0.5s]">
                    Lo que ofrezco
                </h2>
                <div className="flex justify-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                        {[
                            { title: "Estudiamos tus proyectos y tus ideas juntos", desc: "Analizamos detalladamente tu caso, vemos en que consiste, tu negocio, producto, que enfoque buscas y que necesitas.", icon: "/icons/book.png" },
                            { title: "Proyectamos como lo vamos hacer", desc: "Le explicaré que proceso vamos a llevar acabo juntos para su proyecto, siempre trabajando de manera eficaz para el mayor rendimiento posible.", icon: "/icons/creative.png" },
                            { title: "Trabajamos juntos en ello", desc: "Daremos nuestro 100% en el momento de la verdad, un trabajo en un ambiente agradable y dinámico.", icon: "/icons/hands.png" },
                            { title: "Disfrutar del buen resultado", desc: "No existe mejor fórmula que una buena proyección y encontrar la incógnita de un buen proyecto realizado.", icon: "/icons/verified.png" }
                        ].map((service, i) => (
                            <div
                                key={i}
                                className="w-full text-center min-h-auto border border-white/20 p-6 rounded-lg backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-500 opacity-0 animate-fadeInUp"
                                style={{ animationDelay: `${0.5 + i * 0.2}s`, animationFillMode: 'forwards' }}
                            >
                                {service.icon && (
                                    <div className="mb-4 flex justify-center">
                                        <img src={service.icon} alt="" className="w-35 h-20" />
                                    </div>
                                )}
                                <h3 className="text-lg md:text-xl font-medium mb-2">{service.title}</h3>
                                <p className="text-white/80 text-sm md:text-base">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="pb-20 bg-black/90 mt-20">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl md:text-5xl font-Garet mb-20 text-center">Clientes destacados</h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {Array.from({ length: 6 }).map((_, i) => (
                            <div
                                key={i}
                                className="group relative aspect-video overflow-hidden rounded-lg"
                            >
                                <img
                                    src={`/project-${i + 1}.jpg`}
                                    alt={``}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 flex items-center justify-center transition-all duration-500">
                                    <span className="text-xl opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                        Ver proyecto
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="w-full min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-black to-gray-900/80">
                <div className="text-center max-w-4xl px-4">
                    <h2 className="text-3xl font-Garet md:text-3xl mb-8">¿Listo para crear algo increíble?</h2>
                    <p className="text-xl mb-12 text-white/80 max-w-lg mx-auto">
                        Hablemos sobre cómo puedo ayudar a llevar tu visión a la pantalla.
                    </p>
                    <button onClick={() => { setTimeout(() => { navigate(`/contacto`) }, 500) }} className="px-10 py-4 bg-white text-black hover:bg-transparent hover:text-white border border-white transition-all duration-500 rounded-full text-lg font-medium">
                        Contactar
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Home;