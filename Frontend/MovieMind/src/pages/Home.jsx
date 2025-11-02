import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import HeroSection from "../components/HeroSection";
import RecommendationGrid from "../components/RecommendationGrid";
import ContinueWatching from "../components/ContinueWatching";
import { movies } from "../data/movies";
import { user } from "../data/user";

export default function Home() {
  const [recommended, setRecommended] = useState([]);

  useEffect(() => {
    const watched = movies.filter((m) => user.watched.includes(m.id));

    // Smarter recommendation: match genre & rating
    const rec = movies.filter(
      (m) =>
        !user.watched.includes(m.id) &&
        watched.some((w) => w.genre === m.genre || w.rating >= m.rating - 0.5)
    );

    setRecommended(rec);
  }, []);

  return (
    <main className="pt-16 bg-black text-white min-h-screen overflow-hidden">

      {/* Featured Movie Hero Section */}
      <HeroSection featured={movies[9]} />

      {/* Recommended Section */}
      <motion.section
        className="max-w-7xl mx-auto px-6 py-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
          Recommended For You
        </h2>
        {recommended.length > 0 ? (
          <RecommendationGrid movies={recommended} />
        ) : (
          <p className="text-gray-400">No recommendations yet. Watch more movies ❤️</p>
        )}
      </motion.section>

      {/* Continue Watching */}
      <motion.section
        className="max-w-7xl mx-auto px-6 py-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-red-500 text-transparent bg-clip-text">
          Continue Watching
        </h2>
        <ContinueWatching movies={movies.filter((m) => user.watched.includes(m.id))} />
      </motion.section>
    </main>
  );
}
