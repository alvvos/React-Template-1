import { useEffect, useRef, useState } from 'react';
import Navbar from "../components/Navbar";
import { useNavigate } from 'react-router-dom';
import Reviews from '../components/Reviews'
import WorkProcess from '../components/WorkProcess';

const Home = () => {
    const heroRef = useRef(null);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [headline, setHeadline] = useState('');
    const fullText = "Solicita tu presupuesto";
    const [currentIndex, setCurrentIndex] = useState(0);
    const bounceRef = useRef(null);
    const navigate = useNavigate();
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const Counter = ({ value, duration }) => {
        const [count, setCount] = useState(0);

        useEffect(() => {
            let start = 0;
            const end = value;
            const incrementTime = (duration * 1000) / end;

            const timer = setInterval(() => {
                start += 1;
                setCount(start);
                if (start >= end) clearInterval(timer);
            }, incrementTime);

            return () => clearInterval(timer);
        }, [value, duration]);

        return count;
    };

    useEffect(() => {
        if (currentIndex < fullText.length) {
            const timeout = setTimeout(() => {
                setHeadline(prev => prev + fullText[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, isMobile ? 150 : 100);

            return () => clearTimeout(timeout);
        }
    }, [currentIndex, isMobile]);

    useEffect(() => {
        const handleScroll = () => {
            if (heroRef.current) {
                const scrollY = window.scrollY;
                const maxScroll = isMobile ? 300 : 500;
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
    }, [isMobile]);

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
                    <div className="absolute w-48 h-48 md:w-64 md:h-64 rounded-full bg-accent/20 blur-3xl animate-pulse-glow"></div>
                </div>

                <div className="relative z-10 text-center px-4 md:px-6 max-w-4xl">
                    <h1 className="text-4xl md:text-7xl font-Garet mb-4 md:mb-6 tracking-tight">
                        <span className="block font-bold mb-2 md:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-light to-accent animate-gentle-blink">
                            Te ayudamos con tu TFG o TFM
                        </span>
                        <span className="text-lg md:text-3xl font-Poppins-Medium border-t pt-4 md:pt-6 border-accent/30">
                            {headline}<span className="animate-pulse">|</span>
                        </span>
                    </h1>

                    <button
                        onClick={() => window.scrollTo({ top: isMobile ? 1200 : 1650, behavior: 'smooth' })}
                        className="mt-10 md:mt-16 px-8 py-3 md:px-10 md:py-4 bg-accent text-dark font-Poppins-Medium hover:bg-transparent hover:text-light border-2 border-accent transition-all duration-500 rounded-full text-base md:text-lg animate-scale-up hover:animate-waving"
                    >
                        Formulario
                    </button>
                </div>

                {!isMobile && (
                    <div ref={bounceRef} className="absolute bottom-20 transform -translate-x-1/2 animate-bounce">
                        <div className="w-8 h-12 border-2 border-accent rounded-full flex justify-center items-start p-1">
                            <div className="w-1 h-3 bg-accent rounded-full animate-scrollIndicator"></div>
                        </div>
                    </div>
                )}
            </section>

            <WorkProcess />


            <section className="py-12 md:py-20 px-4 md:px-24 w-full bg-gradient-to-b from-primary to-secondary">
                <h2 className="text-3xl md:text-5xl mb-8 md:mb-16 text-center font-Garet bg-clip-text text-transparent bg-gradient-to-r from-light to-accent animate-fadeIn">
                    Lo que ofrezco
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 p-4">
                    {[

                        {
                            "title": "Tu visión es nuestra prioridad",
                            "desc": "Analizamos cada detalle de tus necesidades para ofrecerte la mejor solución.",
                            "icon": "/icons/book.png",
                            "color": "from-purple-light to-accent"
                        },
                        {
                            "title": "Expertise genuino al servicio de tu proyecto",
                            "desc": "Te explicamos el proceso y aplicamos nuestros conocimientos prácticos para maximizar tu éxito.",
                            "icon": "/icons/creative.png",
                            "color": "from-accent to-purple-dark"
                        },
                        {
                            "title": "Colaboración efectiva y amena",
                            "desc": "Creamos un entorno dinámico donde cada idea cuenta y cada proyecto brilla.",
                            "icon": "/icons/hands.png",
                            "color": "from-purple-dark to-secondary"
                        },
                        {
                            "title": "Logros sobresalientes garantizados",
                            "desc": "Combinamos planificación estratégica con ejecución impecable para resultados excepcionales.",
                            "icon": "/icons/verified.png",
                            "color": "from-secondary to-dark-blue"
                        }


                    ].map((service, i) => (
                        <div
                            key={i}
                            className={`bg-gradient-to-br ${service.color} p-4 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 opacity-0 animate-fadeInUp`}
                            style={{ animationDelay: `${0.5 + i * 0.2}s`, animationFillMode: 'forwards' }}
                        >
                            <div className="mb-4 md:mb-6 flex justify-center">
                                <div className="p-2 md:p-4 bg-light/10 rounded-full backdrop-blur-sm">
                                    <img src={service.icon} alt="" style={{ width: "10em" }} />
                                </div>
                            </div>
                            <h3 className="text-lg md:text-3xl font-Poppins-Medium mb-2 md:mb-4 text-center">{service.title}</h3>
                            <p className="text-light/80 text-xs md:text-xl text-center">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="py-12 md:py-24 bg-gradient-to-b from-primary to-purple-dark relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute top-20 left-10 w-20 md:w-32 h-20 md:h-32 rounded-full bg-accent animate-float" style={{ animationDelay: '0.5s' }}></div>
                    <div className="absolute bottom-40 right-10 md:right-20 w-32 md:w-48 h-32 md:h-48 rounded-full bg-purple-light animate-float" style={{ animationDelay: '1s' }}></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-8 md:gap-12">
                        <div className="text-center lg:text-left max-w-2xl">
                            <h2 className="text-3xl md:text-5xl font-Garet mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-light to-accent animate-fadeIn">
                                Experiencia que cuenta
                            </h2>
                            <p className="text-light/90 text-base md:text-lg font-Poppins-Medium mb-6 md:mb-8 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
                                Cada número representa una historia de éxito y un proyecto entregado con excelencia.
                            </p>

                            <div className="bg-secondary/50 border border-accent/30 rounded-xl p-4 md:p-6 backdrop-blur-md animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
                                <p className="text-light/80 font-Poppins-Medium text-sm md:text-base">
                                    "La calidad no es un acto, es un hábito que cultivamos en cada proyecto."
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 md:gap-8 w-full max-w-2xl animate-fadeIn" style={{ animationDelay: '0.9s' }}>
                            {[
                                { number: 60, label: "Proyectos completados", color: "bg-purple-light", color_text: "dark" },
                                { number: 6, label: "Menciones de honor", color: "bg-accent", color_text: "white" },
                                { number: 50, label: "Clientes totales", color: "bg-light", color_text: "dark" },
                                { number: 5, label: "Años de experiencia", color: "bg-dark-blue", color_text: "white" }
                            ].map((stat, index) => (
                                <div
                                    key={index}
                                    className={`${stat.color} p-4 md:p-6 rounded-xl md:rounded-2xl shadow-lg transform transition-all duration-700 hover:scale-105 hover:shadow-xl`}
                                    style={{
                                        animation: `fadeInUp 0.8s ease-out ${0.3 + index * 0.2}s forwards`,
                                        opacity: 0
                                    }}
                                >
                                    <span className={`text-2xl md:text-5xl text-${stat.color_text} font-bold block mb-1 md:mb-2 text-dark`}>
                                        <Counter value={stat.number} duration={2} />+
                                    </span>
                                    <span className={`text-xs md:text-sm font-Poppins-Medium text-${stat.color_text}`}>{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Reviews isMobile={isMobile} />

            <section className="w-full min-h-[50vh] md:min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-dark-blue to-primary relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute top-1/3 left-1/4 w-32 md:w-64 h-32 md:h-64 rounded-full bg-accent/30 blur-3xl animate-pulse-glow"></div>
                    <div className="absolute bottom-1/4 right-1/3 w-24 md:w-48 h-24 md:h-48 rounded-full bg-purple-light/30 blur-3xl animate-pulse-glow" style={{ animationDelay: '3s' }}></div>
                </div>

                <div className="text-center max-w-4xl px-4 md:px-6 relative">
                    <h2 className="text-3xl p-2 md:p-4 md:text-5xl font-Garet mb-4 md:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-light to-accent">
                        ¿Listo para crear algo increíble?
                    </h2>
                    <p className="text-base md:text-xl mb-8 md:mb-12 text-light/80 max-w-2xl mx-auto font-Poppins-Medium">
                        Hablemos sobre cómo puedo ayudar a llevar tu visión a la pantalla con resultados excepcionales.
                    </p>
                    <button
                        onClick={() => { setTimeout(() => { navigate(`/contacto`) }, 500) }}
                        className="px-8 py-3 md:px-12 md:py-5 bg-accent text-dark font-Poppins-Medium hover:bg-transparent hover:text-light border-2 border-accent transition-all duration-500 rounded-full text-base md:text-lg animate-gentle-blink hover:animate-waving"
                    >
                        Contactar ahora
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Home;