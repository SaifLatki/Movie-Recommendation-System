import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Play, Info, Volume2, VolumeX, Star } from "lucide-react";

export default function HeroSection({ featured }) {
  const [muted, setMuted] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Preload image for better performance
  useEffect(() => {
    if (featured?.poster) {
      const img = new Image();
      img.src = featured.poster;
      img.onload = () => setImageLoaded(true);
    }
  }, [featured?.poster]);

  if (!featured) {
    return (
      <div className="relative h-[70vh] md:h-screen bg-gradient-to-b from-gray-900 to-black flex items-center justify-center">
        <div className="animate-pulse text-gray-500">Loading...</div>
      </div>
    );
  }

  return (
    <section
      className="relative h-[70vh] md:h-screen overflow-hidden"
      aria-label="Featured movie"
    >
      {/* Background Image with Parallax Effect */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: imageLoaded ? 1 : 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <img
          src={featured.poster}
          alt={`${featured.title} poster`}
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* Multi-layer Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
      </motion.div>

      {/* Content Container */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center md:justify-end h-full pb-12 md:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="max-w-2xl space-y-4 md:space-y-6"
          >
            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight drop-shadow-2xl"
            >
              {featured.title}
            </motion.h1>

            {/* Metadata */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-wrap items-center gap-3 md:gap-4 text-sm md:text-base"
            >
              <span className="px-3 py-1 bg-purple-600/80 backdrop-blur-sm text-white rounded-full font-medium">
                {featured.genre}
              </span>
              <span className="text-gray-300 font-medium">{featured.year}</span>
              <div className="flex items-center gap-1.5 px-3 py-1 bg-yellow-500/20 backdrop-blur-sm rounded-full">
                <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                <span className="text-yellow-300 font-semibold">
                  {featured.rating || "8.5"}
                </span>
              </div>
            </motion.div>

            {/* Description */}
            {featured.description && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="text-gray-300 text-base md:text-lg leading-relaxed line-clamp-3 md:line-clamp-none max-w-xl drop-shadow-lg"
              >
                {featured.description.slice(0, 180)}
                {featured.description.length > 180 && "..."}
              </motion.p>
            )}

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="flex flex-wrap gap-3 md:gap-4 pt-2 md:pt-4"
            >
              <Link
                to={`/watch/${featured.id}`}
                className="group relative px-6 md:px-8 py-3 md:py-4 bg-white text-black rounded-xl font-bold text-base md:text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 flex items-center gap-2"
              >
                <Play className="w-5 h-5 md:w-6 md:h-6 fill-current group-hover:scale-110 transition-transform" />
                <span>Watch Now</span>
              </Link>

              <Link
                to={`/movie/${featured.id}`}
                className="group px-6 md:px-8 py-3 md:py-4 bg-gray-800/80 backdrop-blur-sm text-white rounded-xl font-semibold text-base md:text-lg border border-white/20 hover:bg-gray-700/80 hover:border-white/40 transition-all duration-300 shadow-xl hover:scale-105 active:scale-95 flex items-center gap-2"
              >
                <Info className="w-5 h-5 md:w-6 md:h-6 group-hover:rotate-12 transition-transform" />
                <span>More Info</span>
              </Link>

              {/* Mute Toggle (if video background) */}
              <button
                onClick={() => setMuted(!muted)}
                className="p-3 md:p-4 bg-gray-800/60 backdrop-blur-sm text-white rounded-xl border border-white/20 hover:bg-gray-700/60 hover:border-white/40 transition-all duration-300 shadow-xl hover:scale-105 active:scale-95"
                aria-label={muted ? "Unmute" : "Mute"}
              >
                {muted ? (
                  <VolumeX className="w-5 h-5 md:w-6 md:h-6" />
                ) : (
                  <Volume2 className="w-5 h-5 md:w-6 md:h-6" />
                )}
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 bg-white rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
