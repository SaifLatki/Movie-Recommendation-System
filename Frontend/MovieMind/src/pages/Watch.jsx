import React from "react";
import { useParams } from "react-router-dom";
import { movies } from "../data/movies";
import { motion } from "framer-motion";

export default function Watch() {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie)
    return (
      <div className="pt-20 text-white text-center text-xl">
        Movie not found.
      </div>
    );

  return (
    <main className="pt-24 bg-black text-white min-h-screen px-4">
      <div className="max-w-5xl mx-auto flex flex-col items-center">

        {/* Movie Title */}
        <motion.h1
          className="text-4xl font-bold mb-4 text-center"
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {movie.title}
        </motion.h1>

        {/* Video Player */}
        <motion.div
          className="w-full aspect-video mb-6 rounded-xl overflow-hidden shadow-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <iframe
            src={movie.trailer}
            title={movie.title}
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </motion.div>

        {/* Movie Info */}
        <motion.div
          className="text-center max-w-3xl space-y-2 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
        >
          <p className="text-gray-400 text-sm">
            {movie.year} • {movie.genre} • ⭐ {movie.rating}/10
          </p>
          <p className="text-gray-300 text-md">
            {movie.description || "No description available."}
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="flex gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
        >
          <button className="px-5 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition">
            ❤️ Like
          </button>
          <button className="px-5 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition">
            ➕ Add to Watchlist
          </button>
        </motion.div>

      </div>
    </main>
  );
}
