import React, { useState, useEffect, useRef } from "react";

const WorkProcess = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [, setScrollLeft] = useState(0);
  const carouselRef = useRef(null);

  const steps = [
    {
      id: 1,
      number: "01",
      title: "Solicita tu cotización",
      description:
        "Completa nuestro formulario detallando tus requerimientos: plazos, alcance, temática, metodología y comparte cualquier archivo relevante.",
      highlight:
        "En menos de 24 horas recibirás una propuesta personalizada con garantías por escrito.",
    },
    {
      id: 2,
      number: "02",
      title: "Iniciamos el proyecto",
      description:
        "Una vez aprobada la cotización, procede con el pago inicial y accede a tu espacio de trabajo exclusivo.",
      highlight: "Comunicación directa 24/7 con nuestro equipo especializado.",
    },
    {
      id: 3,
      number: "03",
      title: "Avances progresivos",
      description:
        "Recibe entregas parciales según tu cronograma preferido con revisiones ilimitadas sin costos adicionales.",
      highlight: "Al 90% de avance: primer análisis de originalidad incluido.",
    },
    {
      id: 4,
      number: "04",
      title: "Desarrollo continuo",
      description:
        "Continuamos trabajando hasta completar todos los objetivos establecidos en tu proyecto.",
      highlight: "Solicita entregas intermedias cuando lo necesites.",
    },
    {
      id: 5,
      number: "05",
      title: "Revisión final",
      description:
        "Recibe el borrador completo antes de la fecha límite con verificación de originalidad.",
      highlight: "30 días de soporte post-entrega para ajustes y consultas.",
    },
    {
      id: 6,
      number: "06",
      title: "Finalización",
      description:
        "Confirma la satisfacción con los resultados y cerramos el proyecto de manera segura.",
      highlight:
        "Servicios complementarios disponibles bajo cotización separada.",
    },
  ];

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.touches[0].pageX;
    const walk = (x - startX) * 2;

    if (Math.abs(walk) > 50) {
      if (walk > 0 && currentStep > 0) {
        setCurrentStep(currentStep - 1);
        setIsDragging(false);
      } else if (walk < 0 && currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1);
        setIsDragging(false);
      }
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prev) => (prev === steps.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [steps.length]);

  return (
    <div className="min-h-screen bg-primary py-24 px-4 sm:px-6 lg:px-8 flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-16 lg:mb-20">
          <h1 className="text-3xl lg:text-4xl font-Garet font-bold text-light mb-4 lg:mb-6">
            Hoja de ruta
          </h1>
          <div className="h-px bg-accent/30 w-24 mx-auto mb-6"></div>
          <p className="text-base lg:text-lg font-Poppins-Medium text-light/60 mx-auto">
            Un método probado que garantiza calidad, originalidad y cumplimiento
            de plazos
          </p>
        </div>

        <div className="lg:hidden">
          <div
            ref={carouselRef}
            className="overflow-hidden rounded-2xl bg-secondary/50"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentStep * 100}%)` }}
            >
              {steps.map((step) => (
                <div key={step.id} className="w-full flex-shrink-0 p-6">
                  <div className="text-center mb-6">
                    <div className="text-accent font-Garet font-bold text-lg mb-2">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-Garet font-bold text-light mb-4">
                      {step.title}
                    </h3>
                  </div>

                  <div className="h-px bg-accent/30 w-16 mx-auto mb-6"></div>

                  <p className="text-light/80 font-Poppins-Medium text-sm mb-6 leading-relaxed text-center">
                    {step.description}
                  </p>

                  <div className="border-l-4 border-accent pl-4 py-2">
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
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentStep ? "bg-accent scale-125" : "bg-light/30"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="overflow-hidden rounded-2xl bg-secondary/50 p-8">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentStep * 100}%)` }}
            >
              {steps.map((step) => (
                <div key={step.id} className="w-full flex-shrink-0 p-9">
                  <div className="grid grid-cols-12 gap-8 items-start">
                    <div className="col-span-4">
                      <div className="text-left">
                        <div className="text-accent font-Garet font-bold text-3xl mb-3">
                          {step.number}
                        </div>
                        <h3 className="text-2xl font-Garet font-bold text-light mb-6">
                          {step.title}
                        </h3>
                        <div className="h-px bg-accent/40 w-20 mb-8"></div>
                      </div>
                    </div>

                    <div className="col-span-8">
                      <p className="text-light/80 font-Poppins-Medium text-lg mb-8 leading-relaxed">
                        {step.description}
                      </p>

                      <div className="border-l-4 border-accent pl-6 py-4 bg-accent/5 rounded-r-lg">
                        <span className="text-accent font-Poppins-Medium text-base">
                          {step.highlight}
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
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentStep ? "bg-accent scale-125" : "bg-light/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkProcess;
