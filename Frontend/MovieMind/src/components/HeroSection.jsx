import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function HeroSection({ featured }) {
  return (
    <section
      className="h-[80vh] flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${featured.thumbnail})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
      <motion.div
        className="relative text-center z-10 text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-5xl font-bold mb-4">{featured.title}</h1>
        <p className="text-gray-300 mb-6">{featured.genre} • {featured.year}</p>
        <Link
          to={`/watch/${featured.id}`}
          className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-full text-lg font-semibold"
        >
          ▶ Watch Now
        </Link>
      </motion.div>
    </section>
  );
}