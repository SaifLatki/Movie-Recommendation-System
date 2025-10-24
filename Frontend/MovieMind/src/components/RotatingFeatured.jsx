import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function RotatingFeatured({ movies }) {
  const [index, setIndex] = useState(0);

  // Auto-rotate every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % movies.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [movies.length]);

  const movie = movies[index];

  return (
    <motion.div
      key={movie.id}
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full relative"
    >
      <img
        src={movie.thumbnail}
        alt={movie.title}
        className="w-full h-full object-cover rounded-xl"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

      <div className="absolute bottom-6 left-6">
        <h3 className="text-2xl font-bold text-white">{movie.title}</h3>
        <p className="text-gray-300 mb-3">{movie.genre} • {movie.year}</p>
        <Link
          to={`/watch/${movie.id}`}
          className="px-5 py-2 bg-purple-600 hover:bg-purple-700 rounded-full font-medium"
        >
          ▶ Watch Now
        </Link>
      </div>
    </motion.div>
  );
}
