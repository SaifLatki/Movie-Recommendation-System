import React from "react";
import { Feather, Calendar, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const posts = [
  {
    title: "The Future of AI Movie Recommendations",
    date: "October 2025",
    excerpt: "Discover how machine learning is changing the way we pick movies and shows...",
  },
  {
    title: "Top 10 Hidden Film Gems This Month",
    date: "September 2025",
    excerpt: "Our CineMatch team shares undiscovered movies for every genre lover...",
  },
];

export default function Blog() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-950 via-black to-gray-900 py-16 px-4 sm:px-8 flex flex-col items-center">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-5xl font-extrabold text-white mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent text-center"
      >
        Blog
      </motion.h1>
      <div className="max-w-3xl mx-auto space-y-8">
        {posts.map((post, idx) => (
          <motion.article
            key={post.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 * idx }}
            className="bg-black/60 rounded-xl border border-white/10 shadow-xl p-6"
          >
            <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-2">
              <Feather className="w-5 h-5 text-purple-400" />
              {post.title}
            </h2>
            <p className="text-xs text-yellow-300 mb-2 flex items-center gap-2">
              <Calendar className="w-4 h-4" /> {post.date}
            </p>
            <p className="text-gray-300">{post.excerpt}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
