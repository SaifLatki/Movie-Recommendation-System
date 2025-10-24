import React from "react";
import { movies } from "../data/movies";
import { user } from "../data/user";
import RecommendationGrid from "../components/RecommendationGrid";
import { motion } from "framer-motion";

export default function Profile() {
  const watchedMovies = movies.filter((m) => user.watched.includes(m.id));
  const watchlistMovies = movies.filter((m) => user.watchlist.includes(m.id));

  return (
    <main className="pt-24 bg-black text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">

        {/* Page Title */}
        <motion.h1
          className="text-4xl font-extrabold mb-10"
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Profile
        </motion.h1>

        {/* Watched Movies Section */}
        <section className="mb-14">
          <motion.h2
            className="text-2xl font-bold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Watched Movies 🎬
          </motion.h2>

          {watchedMovies.length > 0 ? (
            <RecommendationGrid movies={watchedMovies} />
          ) : (
            <p className="text-gray-400">You haven’t watched any movies yet.</p>
          )}
        </section>

        {/* Watchlist Section */}
        <section className="mb-20">
          <motion.h2
            className="text-2xl font-bold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            My Watchlist ⭐
          </motion.h2>

          {watchlistMovies.length > 0 ? (
            <RecommendationGrid movies={watchlistMovies} />
          ) : (
            <p className="text-gray-400">Your watchlist is empty. Add some movies!</p>
          )}
        </section>

      </div>
    </main>
  );
}
