import { useEffect, useRef, useState } from 'react';
import Navbar from "../components/navbar";

const Home = () => {
    const heroRef = useRef(null);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [headline, setHeadline] = useState('');
    const fullText = "Contando historias a través de la luz";
    const [currentIndex, setCurrentIndex] = useState(0);

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
                heroRef.current.style.transform = `translateY(${scrollY * 0.3}px) scale(${1 + scrollY * 0.0002})`;
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
                        <source src="/video.mp4" type="video/mp4" />

                    </video>
                    <div className="absolute inset-0 bg-black opacity-40 pointer-events-none"></div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-tight">
                        <span className="block font-bold mb-2">Miguel Salís</span>
                        <span className="text-xl md:text-3xl font-mono border-t pt-4 border-white/20">
                            {headline}<span className="animate-pulse">|</span>
                        </span>
                    </h1>

                    <button onClick={() => window.scrollTo({ top: 30, behavior: 'smooth' })} className="mt-12 px-8 py-3 border border-white/50 hover:border-white/100 hover:bg-white/10 transition-all duration-500 rounded-full text-lg">
                        Ver Portfolio
                    </button>
                </div>
                <div className="absolute bottom-10 transform -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                        <div className="w-1 h-2 bg-white mt-2 rounded-full animate-scrollIndicator"></div>
                    </div>
                </div>
            </section>
            <section className="py-20 px-4 max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl mb-16 text-center opacity-0 animate-fadeIn [animation-fill-mode:forwards] [animation-delay:0.5s]">
                    Lo que ofrezco
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { title: "Videografía", desc: "Narrativas visuales que capturan la esencia de tu historia", icon: "🎥" },
                        { title: "Edición", desc: "Ritmo y emoción en cada corte, puliendo cada detalle", icon: "✂️" },
                        { title: "Colorización", desc: "Atmósferas únicas a través de la gradación de color", icon: "🎨" }
                    ].map((service, i) => (
                        <div
                            key={i}
                            className="border border-white/20 p-8 rounded-lg backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-500 opacity-0 animate-fadeInUp"
                            style={{ animationDelay: `${0.8 + i * 0.2}s`, animationFillMode: 'forwards' }}
                        >
                            <div className="text-4xl mb-4">{service.icon}</div>
                            <h3 className="text-xl font-medium mb-2">{service.title}</h3>
                            <p className="text-white/80">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
            <section className="py-20 bg-black/90">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl mb-16 text-center">Proyectos destacados</h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {Array.from({ length: 6 }).map((_, i) => (
                            <div
                                key={i}
                                className="group relative aspect-video overflow-hidden rounded-lg"
                            >
                                <img
                                    src={`/project-${i + 1}.jpg`}
                                    alt={`Proyecto ${i + 1}`}
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
            <section className="min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-black to-gray-900/80">
                <div className="text-center max-w-2xl px-4">
                    <h2 className="text-4xl md:text-5xl mb-8">¿Listo para crear algo increíble?</h2>
                    <p className="text-xl mb-12 text-white/80 max-w-lg mx-auto">
                        Hablemos sobre cómo puedo ayudar a llevar tu visión a la pantalla.
                    </p>
                    <button className="px-10 py-4 bg-white text-black hover:bg-transparent hover:text-white border border-white transition-all duration-500 rounded-full text-lg font-medium">
                        Contactar
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Home;