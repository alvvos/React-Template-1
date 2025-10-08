import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ scrollProgress, isMobile }) => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [showContent, setShowContent] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
        };
    }, [menuOpen]);

    useEffect(() => {
        const timer = setTimeout(() => setShowContent(true), 300);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (!menuOpen) {
                setScrolled(window.scrollY > 10);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [menuOpen]);

    const handleLinkClick = (sectionId) => {
        setMenuOpen(false);
        navigate(`/${sectionId}`);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/90 backdrop-blur-md py-3' : 'bg-transparent py-5'}`}>
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <div
                        className={`transition-all duration-1000 ${showContent ? 'opacity-100' : 'opacity-0 translate-y-2'}`}
                        onClick={scrollToTop}
                    >
                        <h1 className="font-Garet font-bold text-2xl md:text-3xl tracking-tight cursor-pointer hover:text-gray-300 transition-colors">

                            {!isMobile && (
                                <span className="text-gray-400 font-normal ml-2">| Garantía Turnitin</span>
                            )}
                        </h1>
                    </div>
                    <div className={`hidden md:flex space-x-8 items-center font-Garet transition-opacity duration-700 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
                        {[
                            { name: 'Inicio', id: '' },
                            { name: 'Contacto', id: 'contacto' }
                        ].map((item) => (
                            <button
                                key={item.id}
                                onClick={() => handleLinkClick(item.id)}
                                className="text-white/85 hover:text-white text-sm uppercase tracking-widest transition-colors duration-300 relative group"
                            >
                                {item.name}
                                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent transition-all duration-500 group-hover:w-full"></span>
                            </button>
                        ))}
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-white focus:outline-none p-2 -mr-2 group"
                            aria-label="Toggle menu"
                            aria-expanded={menuOpen}
                        >
                            <div className={`w-7 flex flex-col items-center space-y-1.5 transition-all duration-400 ${menuOpen ? 'rotate-180' : ''}`}>
                                <span className={`block h-[2px] w-6 bg-white transition-all duration-400 ${menuOpen ? 'rotate-45 translate-y-[9px] w-7 bg-accent' : ''}`}></span>
                                <span className={`block h-[2px] w-5 bg-white transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`}></span>
                                <span className={`block h-[2px] w-4 bg-white transition-all duration-400 ${menuOpen ? '-rotate-45 -translate-y-[9px] w-7 bg-accent' : ''}`}></span>
                            </div>
                        </button>
                    </div>
                </div>
                {isMobile && (
                    <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gray-800/50">
                        <div
                            className="h-full bg-gradient-to-r from-accent to-purple-500 transition-all duration-300"
                            style={{ width: `${scrollProgress * 100}%` }}
                        ></div>
                    </div>
                )}
            </nav>
            <div
                className={`md:hidden fixed top-0 right-0 h-full w-72 bg-gradient-to-b from-gray-900 to-gray-800 backdrop-blur-xl z-40 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'} shadow-[0_0_30px_10px_rgba(0,0,0,0.3)] border-l border-gray-700/50`}
                style={{
                    top: scrolled ? '72px' : '88px',
                    height: `calc(100vh - ${scrolled ? '72px' : '88px'})`
                }}
            >
                <div className="flex flex-col items-start justify-start h-full pt-12 pl-10 space-y-8">
                    {[
                        { name: 'Inicio', id: '' },
                        { name: 'Contacto', id: 'contacto' }
                    ].map((item, index) => (
                        <button
                            key={item.id}
                            onClick={() => handleLinkClick(item.id)}
                            className={`text-2xl font-medium text-white/90 hover:text-accent transition-all duration-500 transform ${menuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}
                            style={{
                                transitionDelay: menuOpen ? `${0.15 + index * 0.1}s` : '0s',
                                fontFamily: "'Garet', sans-serif"
                            }}
                        >
                            <span className="relative group">
                                {item.name}
                                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent transition-all duration-500 group-hover:w-full"></span>
                            </span>
                        </button>
                    ))}
                </div>
                <div className={`absolute bottom-8 left-10 right-10 transition-all duration-700 ${menuOpen ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="h-px w-full bg-gray-700/50 mb-6"></div>
                    <p className="text-gray-400 text-sm font-light">
                        © {new Date().getFullYear()} Álvaro Salís
                    </p>
                </div>
            </div>

            <div
                className={`md:hidden fixed inset-0 bg-black/50 z-30 transition-opacity duration-500 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onClick={toggleMenu}
            />
        </>
    );
};

export default Navbar;