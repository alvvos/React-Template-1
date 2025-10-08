import React, { useState, useEffect } from 'react';

const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkDevice = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkDevice();
        window.addEventListener('resize', checkDevice);

        return () => {
            window.removeEventListener('resize', checkDevice);
        };
    }, []);

    return isMobile;
};

const WorkProcess = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const isMobile = useIsMobile();

    const steps = [
        {
            id: 1,
            number: "01",
            title: "Solicita tu cotización",
            description: "Completa nuestro formulario detallando tus requerimientos: plazos, alcance, temática, metodología y comparte cualquier archivo relevante.",
            highlight: "En menos de 24 horas recibirás una propuesta personalizada con garantías por escrito.",
            icon: "📋"
        },
        {
            id: 2,
            number: "02",
            title: "Iniciamos el proyecto",
            description: "Una vez aprobada la cotización, procede con el pago inicial y accede a tu espacio de trabajo exclusivo.",
            highlight: "Comunicación directa 24/7 con nuestro equipo especializado.",
            icon: "🚀"
        },
        {
            id: 3,
            number: "03",
            title: "Avances progresivos",
            description: "Recibe entregas parciales según tu cronograma preferido con revisiones ilimitadas sin costos adicionales.",
            highlight: "Al 90% de avance: primer análisis de originalidad incluido.",
            icon: "📊"
        },
        {
            id: 4,
            number: "04",
            title: "Desarrollo continuo",
            description: "Continuamos trabajando hasta completar todos los objetivos establecidos en tu proyecto.",
            highlight: "Solicita entregas intermedias cuando lo necesites.",
            icon: "⚡"
        },
        {
            id: 5,
            number: "05",
            title: "Revisión final",
            description: "Recibe el borrador completo antes de la fecha límite con verificación de originalidad.",
            highlight: "30 días de soporte post-entrega para ajustes y consultas.",
            icon: "✅"
        },
        {
            id: 6,
            number: "06",
            title: "Finalización",
            description: "Confirma la satisfacción con los resultados y cerramos el proyecto de manera segura.",
            highlight: "Servicios complementarios disponibles bajo cotización separada.",
            icon: "🎯"
        }
    ];

    const nextStep = () => {
        setCurrentStep((prev) => (prev === steps.length - 1 ? 0 : prev + 1));
    };

    const prevStep = () => {
        setCurrentStep((prev) => (prev === 0 ? steps.length - 1 : prev - 1));
    };

    const goToStep = (index) => {
        setCurrentStep(index);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            nextStep();
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const MobileCarousel = () => (
        <div className="relative h-full">
            <div className="overflow-hidden rounded-2xl bg-secondary">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentStep * 100}%)` }}
                >
                    {steps.map((step, index) => (
                        <div key={step.id} className="w-full flex-shrink-0 p-6">
                            <div className="text-center mb-6">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-purple-light flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">{step.icon}</span>
                                </div>
                                <div className="text-accent font-Garet font-bold text-sm mb-2">
                                    {step.number}
                                </div>
                                <h3 className="text-xl font-Garet font-bold text-light mb-4">
                                    {step.title}
                                </h3>
                            </div>

                            <p className="text-light/80 font-Poppins-Medium text-sm mb-6 leading-relaxed text-center">
                                {step.description}
                            </p>

                            <div className="bg-accent/20 border border-accent/30 rounded-xl p-4 text-center">
                                <span className="text-accent font-Poppins-Medium text-sm">
                                    {step.highlight}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-center mt-6 space-x-2">
                {steps.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToStep(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentStep ? 'bg-accent scale-125' : 'bg-secondary'
                            }`}
                    />
                ))}
            </div>

            <div className="flex justify-between mt-6">
                <button
                    onClick={prevStep}
                    className="px-6 py-3 bg-accent text-light rounded-xl font-Poppins-Medium shadow-lg shadow-accent/30"
                >
                    Anterior
                </button>
                <button
                    onClick={nextStep}
                    className="px-6 py-3 bg-accent text-light rounded-xl font-Poppins-Medium shadow-lg shadow-accent/30"
                >
                    Siguiente
                </button>
            </div>
        </div>
    );

    const DesktopCarousel = () => (
        <div className="relative">
            <div className="overflow-hidden rounded-2xl bg-secondary/50 p-8">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentStep * 100}%)` }}
                >
                    {steps.map((step, index) => (
                        <div key={step.id} className="w-full flex-shrink-0">
                            <div className="grid grid-cols-12 gap-8 items-center">
                                <div className="col-span-4 text-center">
                                    <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-accent to-purple-light flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-accent/40">
                                        <span className="text-5xl">{step.icon}</span>
                                    </div>
                                    <div className="text-accent font-Garet font-bold text-2xl mb-2">
                                        {step.number}
                                    </div>
                                    <h3 className="text-3xl font-Garet font-bold text-light mb-6">
                                        {step.title}
                                    </h3>
                                </div>

                                <div className="col-span-8">
                                    <p className="text-light/80 font-Poppins-Medium text-xl mb-8 leading-relaxed">
                                        {step.description}
                                    </p>

                                    <div className="bg-accent/20 border-2 border-accent/40 rounded-2xl p-6">
                                        <span className="text-accent font-Poppins-Medium text-lg">
                                            ✨ {step.highlight}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-center mt-8 space-x-3">
                {steps.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToStep(index)}
                        className={`w-4 h-4 rounded-full transition-all duration-300 ${index === currentStep ? 'bg-accent scale-125' : 'bg-secondary'
                            }`}
                    />
                ))}
            </div>

            <div className="flex justify-between mt-8">
                <button
                    onClick={prevStep}
                    className="px-8 py-4 bg-accent text-light rounded-2xl font-Poppins-Medium text-lg shadow-2xl shadow-accent/30 hover:scale-105 transition-transform duration-300"
                >
                    ← Anterior
                </button>
                <button
                    onClick={nextStep}
                    className="px-8 py-4 bg-accent text-light rounded-2xl font-Poppins-Medium text-lg shadow-2xl shadow-accent/30 hover:scale-105 transition-transform duration-300"
                >
                    Siguiente →
                </button>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-primary py-8 px-4 sm:px-6 lg:px-8 flex items-center">
            <div className="max-w-6xl mx-auto w-full">
                <div className="text-center mb-12 lg:mb-16">
                    <h1 className="text-3xl lg:text-5xl font-Garet font-bold text-light mb-4 lg:mb-6">
                        Nuestro Proceso de Trabajo
                    </h1>
                    <p className="text-lg lg:text-xl font-Poppins-Medium text-light/80 max-w-2xl mx-auto">
                        Un método probado que garantiza calidad, originalidad y cumplimiento de plazos
                    </p>
                </div>

                {isMobile ? <MobileCarousel /> : <DesktopCarousel />}
            </div>
        </div>
    );
};

export default WorkProcess;