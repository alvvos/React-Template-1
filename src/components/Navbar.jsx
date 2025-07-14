import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [showContent, setShowContent] = useState(false);
    const navigate = useNavigate()

    useEffect(() => {
        const timer = setTimeout(() => setShowContent(true), 300);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLinkClick = (sectionId) => {
        navigate(`/${sectionId}`)
    };

    return (
        <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/90 backdrop-blur-md py-2' : 'bg-transparent py-4'}`}>
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div
                    className={`transition-all duration-1000 ${showContent ? 'opacity-100' : 'opacity-0 translate-y-2'}`}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    <h1 className="font-Garet font-bold text-xl md:text-2xl tracking-wide cursor-pointer hover:text-gray-300 transition-colors">
                        Miguel Salís
                        <span className="text-gray-400 font-normal ml-2 hidden md:inline">| Filmmaker</span>
                    </h1>
                </div>
                <div className={`hidden md:flex space-x-8 items-center transition-opacity duration-700 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
                    {[
                        { name: 'Portfolio', id: '' },
                        { name: 'Contacto', id: 'contacto' }
                    ].map((item) => (
                        <button
                            key={item.id}
                            onClick={() => handleLinkClick(item.id)}
                            className="text-white/80 hover:text-white text-sm uppercase tracking-wider transition-colors duration-300 relative group"
                        >
                            {item.name}
                            <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
                        </button>
                    ))}
                </div>
                <div className="md:hidden">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="text-white focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        <div className={`w-6 flex flex-col items-end space-y-1 mb-2 transition-all duration-300 ${menuOpen ? 'rotate-180' : ''}`}>
                            <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'w-6 rotate-45 translate-y-1.5' : 'w-6'}`}></span>
                            <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : 'w-4'}`}></span>
                            <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'w-6 -rotate-45 -translate-y-1.5' : 'w-5'}`}></span>
                        </div>
                    </button>
                </div>
            </div>
            <div className={`md:hidden fixed inset-0 bg-black/90 backdrop-blur-md z-40 transition-all duration-500 ease-in-out ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <div className="flex flex-col items-center justify-center h-full space-y-8">
                    {[
                        { name: 'Portfolio', id: 'portfolio' },
                        { name: 'Contacto', id: 'contacto' }
                    ].map((item, index) => (
                        <button
                            key={item.id}
                            onClick={() => handleLinkClick(item.id)}
                            className={`text-2xl text-white/80 hover:text-white transition-all duration-300 transform ${menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}
                            style={{ transitionDelay: menuOpen ? `${0.1 * index}s` : '0s' }}
                        >
                            {item.name}
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;