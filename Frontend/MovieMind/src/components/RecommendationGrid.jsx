import React, { useState, useMemo } from "react";
import MovieCard from "./MovieCard";
import RotatingFeatured from "./RotatingFeatured";
import { motion, AnimatePresence } from "framer-motion";
import { Filter, Star, Calendar, TrendingUp } from "lucide-react";

export default function RecommendationGrid({ movies = [] }) {
  const [sortBy, setSortBy] = useState("rating");
  const [filterOpen, setFilterOpen] = useState(false);

  // Memoized sorting for performance
  const sortedMovies = useMemo(() => {
    return [...movies].sort((a, b) => {
      if (sortBy === "rating") return (b.rating || 0) - (a.rating || 0);
      if (sortBy === "year") return (b.year || 0) - (a.year || 0);
      if (sortBy === "popular") return (b.views || 0) - (a.views || 0);
      return 0;
    });
  }, [movies, sortBy]);

  const sortOptions = [
    { value: "rating", label: "Top Rated", icon: Star },
    { value: "year", label: "Newest", icon: Calendar },
    { value: "popular", label: "Most Popular", icon: TrendingUp },
  ];

  if (!movies || movies.length === 0) {
    return (
      <div className="py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-gray-400 text-lg"
        >
          <div className="text-6xl mb-4">👀</div>
          <p>No recommendations available right now</p>
          <p className="text-sm mt-2">Check back later for personalized suggestions</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="py-8 md:py-12 space-y-8 md:space-y-12">
      {/* Rotating Featured Section */}
      {sortedMovies.length > 3 && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <RotatingFeatured movies={sortedMovies.slice(0, 5)} />
        </motion.div>
      )}

      {/* Recommendations Section */}
      <section
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-labelledby="recommendations-heading"
      >
        {/* Header with Filter */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 md:mb-8">
          <motion.h2
            id="recommendations-heading"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl md:text-3xl font-bold text-white"
          >
            Recommended for You
          </motion.h2>

          {/* Sort Controls */}
          <div className="flex items-center gap-3">
            {/* Mobile Filter Button */}
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className="sm:hidden flex items-center gap-2 px-4 py-2 bg-gray-800/60 backdrop-blur-sm border border-white/10 text-gray-300 rounded-lg hover:bg-gray-800 hover:border-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <Filter className="w-4 h-4" />
              <span>Filter</span>
            </button>

            {/* Desktop Dropdown */}
            <div className="relative hidden sm:block">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none px-4 py-2 pr-10 bg-gray-800/60 backdrop-blur-sm border border-white/10 text-gray-200 rounded-lg cursor-pointer hover:bg-gray-800 hover:border-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                aria-label="Sort recommendations"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <Filter className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Mobile Filter Panel */}
        <AnimatePresence>
          {filterOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-6 sm:hidden overflow-hidden"
            >
              <div className="p-4 bg-gray-800/40 backdrop-blur-sm border border-white/10 rounded-lg space-y-2">
                {sortOptions.map((option) => {
                  const Icon = option.icon;
                  return (
                    <button
                      key={option.value}
                      onClick={() => {
                        setSortBy(option.value);
                        setFilterOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                        sortBy === option.value
                          ? "bg-purple-600/20 text-white border border-purple-500/30"
                          : "text-gray-300 hover:bg-white/5"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{option.label}</span>
                      {sortBy === option.value && (
                        <div className="ml-auto w-2 h-2 bg-purple-500 rounded-full" />
                      )}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Movie Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={sortBy}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-20"
          >
            {sortedMovies.map((movie, index) => (
              <motion.div
                key={movie.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.03, duration: 0.3 }}
              >
                <MovieCard movie={movie} index={index} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Load More Button (Optional) */}
        {sortedMovies.length >= 20 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-center"
          >
            <button className="px-8 py-3 bg-gray-800/60 backdrop-blur-sm border border-white/10 text-white rounded-xl hover:bg-gray-800 hover:border-white/20 transition-all duration-300 font-semibold focus:outline-none focus:ring-2 focus:ring-purple-500">
              Load More
            </button>
          </motion.div>
        )}
      </section>
    </div>
  );
}
