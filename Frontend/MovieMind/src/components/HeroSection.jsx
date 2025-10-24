import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Play, Info } from "lucide-react";

export default function HeroSection({ featured }) {
  return (
    <section
      className="relative h-[90vh] w-full bg-center bg-cover flex items-end"
      style={{ backgroundImage: `url(${featured.thumbnail})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/10" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pb-24">
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-white drop-shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {featured.title}
        </motion.h1>

        {/* Genre / Year / Rating */}
        <motion.p
          className="text-gray-300 mt-4 text-lg font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {featured.genre} • {featured.year} • ⭐ {featured.rating || "8.5"}
        </motion.p>

        {/* Description (Optional if exists) */}
        {featured.description && (
          <motion.p
            className="max-w-2xl text-gray-300 mt-4 text-base leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
          >
            {featured.description.slice(0, 140)}...
          </motion.p>
        )}

        {/* Buttons */}
        <motion.div
          className="flex gap-4 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Link
            to={`/watch/${featured.id}`}
            className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full text-lg font-semibold shadow-lg shadow-purple-600/30 transition"
          >
            <Play size={20} /> Watch Now
          </Link>

          <Link
            to={`/movie/${featured.id}`}
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md px-6 py-3 rounded-full text-lg font-medium border border-white/20 transition"
          >
            <Info size={20} /> More Info
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
