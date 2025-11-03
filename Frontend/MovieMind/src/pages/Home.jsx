import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import HeroSection from "../components/HeroSection";
import RecommendationGrid from "../components/RecommendationGrid";
import ContinueWatching from "../components/ContinueWatching";
import { movies } from "../data/movies";
import { user } from "../data/user";
import { Sparkles, Flame, Clock } from "lucide-react";

export default function Home() {
  const [recommended, setRecommended] = useState([]);

  useEffect(() => {
    const watched = movies.filter((m) => user.watched.includes(m.id));

    // 🔮 Smarter recommendations: similar genres & rating proximity
    const rec = movies.filter(
      (m) =>
        !user.watched.includes(m.id) &&
        watched.some(
          (w) =>
            (Array.isArray(w.genres) &&
              w.genres.some((g) => m.genres?.includes(g))) ||
            w.rating >= m.rating - 0.5
        )
    );

    setRecommended(rec);
  }, []);

  return (
    <main className="pt-16 bg-gradient-to-b from-black via-[#0b0b0f] to-black text-white min-h-screen overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 left-1/3 w-96 h-96 bg-purple-600/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-pink-500/10 blur-[140px] rounded-full" />
      </div>

      {/* 🎥 Hero Section */}
      <HeroSection featured={movies[9]} />

      {/* ✨ Recommended Section */}
      <motion.section
        className="relative max-w-7xl mx-auto px-6 py-16 z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center gap-3 mb-8">
          <Sparkles className="w-7 h-7 text-purple-400" />
          <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text tracking-tight">
            Recommended For You
          </h2>
        </div>

        {recommended.length > 0 ? (
          <RecommendationGrid movies={recommended} />
        ) : (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gray-400 text-center text-lg italic"
          >
            No recommendations yet. Watch more movies ❤️
          </motion.p>
        )}
      </motion.section>

      {/* 🔥 Trending Section */}
      <motion.section
        className="relative max-w-7xl mx-auto px-6 py-16 z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="flex items-center gap-3 mb-8">
          <Flame className="w-7 h-7 text-orange-400" />
          <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-orange-400 to-yellow-400 text-transparent bg-clip-text tracking-tight">
            Trending Now
          </h2>
        </div>

        <RecommendationGrid movies={movies.slice(0, 8)} />
      </motion.section>

      {/* ⏱ Continue Watching Section */}
      <motion.section
        className="relative max-w-7xl mx-auto px-6 py-16 z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="flex items-center gap-3 mb-8">
          <Clock className="w-7 h-7 text-yellow-400" />
          <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-yellow-400 to-amber-500 text-transparent bg-clip-text tracking-tight">
            Continue Watching
          </h2>
        </div>

        <ContinueWatching
          movies={movies.filter((m) => user.watched.includes(m.id))}
        />
      </motion.section>
    </main>
  );
}
