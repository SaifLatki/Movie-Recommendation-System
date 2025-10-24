import React, { useState } from "react";
import MovieCard from "./MovieCard";
import RotatingFeatured from "./RotatingFeatured";
import { motion, AnimatePresence } from "framer-motion";

export default function RecommendationGrid({ movies }) {
  const [sortBy, setSortBy] = useState("rating");

  // Sorting logic
  const sortedMovies = [...movies].sort((a, b) => {
    if (sortBy === "rating") return b.rating - a.rating;
    if (sortBy === "year") return b.year - a.year;
    return 0;
  });

  return (
    <section className="mt-12 space-y-10">

      {/* ✅ Rotating Featured (Only if enough movies) */}
      {sortedMovies.length > 3 && (
        <motion.div
          className="relative w-full h-72 rounded-xl overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <RotatingFeatured movies={sortedMovies.slice(0, 10)} />
        </motion.div>
      )}

      {/* Sort Dropdown Right-Aligned */}
      <div className="flex justify-end">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="bg-black/40 backdrop-blur-md border border-white/20 text-gray-200 px-3 py-2 rounded-lg text-sm cursor-pointer hover:border-purple-400 transition"
        >
          <option value="rating">Sort by Rating ⭐</option>
          <option value="year">Sort by Newest 📅</option>
        </select>
      </div>

      {/* Animated Movie Grid */}
      {sortedMovies.length > 0 ? (
        <motion.div
          layout
          className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
        >
          <AnimatePresence>
            {sortedMovies.map((movie) => (
              <motion.div
                key={movie.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="hover:scale-[1.03] transition-transform"
              >
                <MovieCard movie={movie} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        <p className="text-gray-400 text-center text-lg py-10">
          No recommendations available right now 👀
        </p>
      )}
    </section>
  );
}
