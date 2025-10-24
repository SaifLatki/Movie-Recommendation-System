import React, { useState } from "react";
import { movies } from "../data/movies";
import RecommendationGrid from "../components/RecommendationGrid";
import { motion } from "framer-motion";

export default function Discover() {
  const [search, setSearch] = useState("");
  const [activeGenre, setActiveGenre] = useState("All");

  // Auto-generate genre list
  const genres = ["All", ...new Set(movies.flatMap((m) => m.genres || []))];

  // Filter logic
  const filtered = movies.filter((movie) => {
    const matchesSearch = movie.title.toLowerCase().includes(search.toLowerCase());
    const matchesGenre = activeGenre === "All" || movie.genres?.includes(activeGenre);
    return matchesSearch && matchesGenre;
  });

  return (
    <main className="pt-24 bg-gradient-to-b from-black via-gray-900 to-black text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Page Title */}
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-6"
        >
          Discover Movies 🎬
        </motion.h2>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative mb-8"
        >
          <input
            type="text"
            placeholder="Search for a movie, actor, or genre..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-4 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 placeholder-gray-400 text-gray-200 focus:ring-2 focus:ring-purple-500 outline-none transition"
          />
        </motion.div>

        {/* Genre Filter Chips */}
        <div className="flex gap-3 overflow-x-auto pb-2 mb-8">
          {genres.map((genre) => (
            <button
              key={genre}
              onClick={() => setActiveGenre(genre)}
              className={`px-4 py-1.5 text-sm rounded-full border transition whitespace-nowrap
                ${
                  activeGenre === genre
                    ? "bg-purple-600 border-purple-400 text-white"
                    : "bg-white/5 border-white/20 text-gray-300 hover:bg-white/10"
                }`}
            >
              {genre}
            </button>
          ))}
        </div>

        {/* Results Count */}
        <p className="text-gray-400 mb-4">
          Found <span className="text-purple-400 font-semibold">{filtered.length}</span> result(s)
        </p>

        {/* Results Grid */}
        <RecommendationGrid movies={filtered} />
      </div>
    </main>
  );
}
