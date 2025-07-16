import { useNavigate } from 'react-router-dom';

export default function NotFound() {
    const navigate = useNavigate();

    return (
        <section
            className="min-h-screen flex flex-col items-center justify-center px-4 text-center"
            style={{
                animation: 'gradient-shift 15s ease infinite',
                background: 'linear-gradient(-45deg, #0a192f, #112240, #0f172a, #1e293b)',
                backgroundSize: '400% 400%'
            }}
        >
            <div
                className="max-w-2xl w-full border border-blue-900/50 p-8 md:p-12 rounded-lg backdrop-blur-sm bg-slate-900/70 animate-float"
                style={{ animationDuration: '6s' }}
            >
                <h1
                    className="text-6xl md:text-8xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500 animate-slide-in"
                    style={{ animationDelay: '0.3s' }}
                >
                    404
                </h1>

                <h2
                    className="text-2xl md:text-3xl mb-8 font-Garet text-blue-100 animate-gentle-blink"
                    style={{ animationDuration: '3s', animationIterationCount: 'infinite' }}
                >
                    ¡Ups! Página no encontrada
                </h2>

                <p className="text-blue-200/80 mb-10 text-lg animate-fade-in" style={{ animationDelay: '0.6s' }}>
                    La página que estás buscando podría haber sido eliminada, haber cambiado de nombre o no está disponible temporalmente.
                </p>

                <div className="animate-fade-in" style={{ animationDelay: '0.9s' }}>
                    <button
                        onClick={() => navigate('/')}
                        className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-800 text-blue-50 font-medium hover:animate-pulse-glow transition-all duration-300 hover:scale-105"
                    >
                        Volver al Inicio
                    </button>
                </div>
            </div>

            <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes pulse-glow {
          0% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.7); }
          70% { box-shadow: 0 0 0 15px rgba(59, 130, 246, 0); }
          100% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0); }
        }
        @keyframes slide-in {
          from { transform: translateY(-50px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes gentle-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
        </section>
    );
}