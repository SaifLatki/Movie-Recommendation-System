import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Play, ChevronLeft, ChevronRight, Pause } from "lucide-react";

export default function RotatingFeatured({ movies = [] }) {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(1);

  const goToNext = useCallback(() => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % movies.length);
  }, [movies.length]);

  const goToPrev = useCallback(() => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + movies.length) % movies.length);
  }, [movies.length]);

  // Auto-rotate
  useEffect(() => {
    if (!isPaused && movies.length > 1) {
      const timer = setInterval(goToNext, 5000);
      return () => clearInterval(timer);
    }
  }, [isPaused, movies.length, goToNext]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") goToPrev();
      if (e.key === "ArrowRight") goToNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNext, goToPrev]);

  if (!movies || movies.length === 0) return null;

  const movie = movies[index];

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      scale: 0.8,
    }),
  };

  return (
    <section
      className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      aria-label="Featured movies carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-black shadow-2xl">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={index}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.3 },
              scale: { duration: 0.4 },
            }}
            className="absolute inset-0"
          >
            {/* Background Image */}
            <img
              src={movie.poster}
              alt={`${movie.title} backdrop`}
              className="w-full h-full object-cover"
            />

            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="max-w-2xl space-y-4"
              >
                <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight drop-shadow-2xl">
                  {movie.title}
                </h3>

                <div className="flex items-center gap-3 text-sm md:text-base text-gray-300">
                  <span className="px-3 py-1 bg-purple-600/80 backdrop-blur-sm rounded-full font-medium">
                    {movie.genre}
                  </span>
                  <span>{movie.year}</span>
                  <span className="flex items-center gap-1">
                    ⭐ {movie.rating || "N/A"}
                  </span>
                </div>

                {movie.description && (
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed line-clamp-2 md:line-clamp-3 max-w-xl">
                    {movie.description}
                  </p>
                )}

                <Link
                  to={`/watch/${movie.id}`}
                  className="inline-flex items-center gap-2 px-6 md:px-8 py-3 bg-white text-black rounded-xl font-bold text-base md:text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl hover:scale-105 active:scale-95"
                >
                  <Play className="w-5 h-5 fill-current" />
                  <span>Watch Now</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Controls */}
        {movies.length > 1 && (
          <>
            {/* Previous Button */}
            <button
              onClick={goToPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/60 hover:bg-black/80 backdrop-blur-sm text-white rounded-full transition-all duration-300 opacity-0 hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-purple-500 z-10"
              aria-label="Previous featured movie"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/60 hover:bg-black/80 backdrop-blur-sm text-white rounded-full transition-all duration-300 opacity-0 hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-purple-500 z-10"
              aria-label="Next featured movie"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Pause Button */}
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="absolute top-4 right-4 p-2 bg-black/60 hover:bg-black/80 backdrop-blur-sm text-white rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 z-10"
              aria-label={isPaused ? "Resume autoplay" : "Pause autoplay"}
            >
              {isPaused ? (
                <Play className="w-4 h-4 fill-current" />
              ) : (
                <Pause className="w-4 h-4" />
              )}
            </button>

            {/* Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {movies.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  className={`h-1 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                    i === index
                      ? "w-8 bg-white"
                      : "w-4 bg-white/50 hover:bg-white/70"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                  aria-current={i === index}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
