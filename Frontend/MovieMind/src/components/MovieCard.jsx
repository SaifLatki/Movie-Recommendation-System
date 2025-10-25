import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Play, Heart, Star, Info } from "lucide-react";
import { motion } from "framer-motion";

export default function MovieCard({ movie, index = 0 }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    setIsFavorite(!isFavorite);
    // Add your favorite logic here (e.g., API call)
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative w-full h-full min-w-[160px] sm:min-w-[200px]"
    >
      <Link
        to={`/movie/${movie.id}`}
        className="block relative rounded-xl overflow-hidden bg-gray-900 shadow-lg hover:shadow-2xl transition-all duration-300"
        aria-label={`View details for ${movie.title}`}
      >
        {/* Image Container */}
        <div className="relative aspect-[2/3] overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
          {/* Loading Skeleton */}
          {!imageLoaded && (
            <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800" />
          )}

          {/* Movie Poster */}
          <motion.img
            src={movie.poster}
            alt={`${movie.title} poster`}
            className={`w-full h-full object-cover transition-all duration-500 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setImageLoaded(true)}
            animate={{
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

          {/* Rating Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="absolute top-2 right-2 flex items-center gap-1 px-2 py-1 bg-black/80 backdrop-blur-sm rounded-lg shadow-lg"
          >
            <Star className="w-3 h-3 fill-yellow-500 text-yellow-500" />
            <span className="text-xs font-bold text-white">
              {movie.rating || "N/A"}
            </span>
          </motion.div>

          {/* Favorite Button */}
          <motion.button
            onClick={handleFavoriteClick}
            className="absolute top-2 left-2 p-2 bg-black/60 backdrop-blur-sm rounded-full hover:bg-black/80 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
          >
            <Heart
              className={`w-4 h-4 transition-all duration-300 ${
                isFavorite
                  ? "fill-red-500 text-red-500"
                  : "text-white hover:text-red-500"
              }`}
            />
          </motion.button>

          {/* Hover Overlay with Actions */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent flex flex-col items-center justify-center gap-3 pointer-events-none"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="pointer-events-auto"
            >
              <button
                onClick={(e) => {
                  e.preventDefault();
                  // Add play functionality
                }}
                className="p-4 bg-white/90 hover:bg-white text-black rounded-full shadow-2xl hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                aria-label={`Play ${movie.title}`}
              >
                <Play className="w-6 h-6 fill-current" />
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Movie Info */}
        <div className="p-3 sm:p-4 space-y-2">
          <h3 className="font-bold text-white text-sm sm:text-base line-clamp-1 group-hover:text-purple-400 transition-colors duration-300">
            {movie.title}
          </h3>

          <div className="flex items-center justify-between gap-2 text-xs sm:text-sm text-gray-400">
            <span className="flex items-center gap-1">
              <span className="w-1 h-1 bg-purple-500 rounded-full" />
              {movie.genre}
            </span>
            <span>{movie.year}</span>
          </div>

          {/* Progress Bar (if watching) */}
          {movie.progress && (
            <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${movie.progress}%` }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
              />
            </div>
          )}
        </div>
      </Link>
    </motion.article>
  );
}
