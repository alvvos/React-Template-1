import { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import datos from "../data/data.json";
import Review from "./Review";

const Reviews = ({ isMobile }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const itemsToShow = isMobile ? 1 : 2;
  const { reviews } = datos;
  const totalItems = reviews?.length || 6;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsToShow >= totalItems ? 0 : prevIndex + itemsToShow
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - itemsToShow < 0
        ? totalItems - itemsToShow
        : prevIndex - itemsToShow
    );
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    if (distance > 50) {
      nextSlide();
    } else if (distance < -50) {
      prevSlide();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex + itemsToShow >= totalItems ? 0 : prevIndex + itemsToShow
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [itemsToShow, totalItems]);

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-purple-dark to-dark-blue relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative">
        <h2 className="text-3xl md:text-5xl font-Garet mb-8 md:mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-light to-accent">
          Testimonios
        </h2>
        <div className="relative">
          <button
            onClick={prevSlide}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 w-12 h-12 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm border border-gray-700 items-center justify-center text-white hover:text-accent transition-all duration-300 group"
            aria-label="Anterior"
          >
            <FiChevronLeft className="w-6 h-6 group-hover:scale-125 transition-transform" />
          </button>

          <button
            onClick={nextSlide}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 w-12 h-12 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm border border-gray-700 items-center justify-center text-white hover:text-accent transition-all duration-300 group"
            aria-label="Siguiente"
          >
            <FiChevronRight className="w-6 h-6 group-hover:scale-125 transition-transform" />
          </button>
          <div
            className="relative overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / itemsToShow)
                }%)`,
              }}
            >
              {reviews?.map((review, i) => (
                <div
                  key={i}
                  className={`flex-shrink-0 w-full ${
                    isMobile ? "" : "md:w-1/2"
                  } px-2 md:px-4`}
                >
                  <div className="group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                    <Review
                      texto={review.texto}
                      estrellas={review.estrellas}
                      autor={review.autor}
                      carrera={review.carrera}
                      proyecto={review.proyecto}
                      fecha={review.fecha}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(totalItems / itemsToShow) }).map(
              (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index * itemsToShow)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === Math.floor(currentIndex / itemsToShow)
                      ? "bg-accent w-6"
                      : "bg-gray-600"
                  }`}
                  aria-label={`Ir a slide ${index + 1}`}
                />
              )
            )}
          </div>
        </div>
      </div>
      <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-accent/20 blur-3xl animate-pulse-glow -z-0"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full animate-pulse-glow -z-0"></div>
    </section>
  );
};

export default Reviews;
