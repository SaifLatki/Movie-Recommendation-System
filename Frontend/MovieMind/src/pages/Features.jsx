import React from "react";
import { Sparkles, Lightbulb, Star, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Star,
    title: "Personalized Recommendations",
    description: "Get movie suggestions tailored to your taste using advanced AI algorithms.",
  },
  {
    icon: Lightbulb,
    title: "Smart Discovery",
    description: "Discover trending, new releases, and hidden gems in one place.",
  },
  {
    icon: CheckCircle,
    title: "Continue Watching",
    description: "Pick up where you left off at any time, across any device.",
  },
  {
    icon: Sparkles,
    title: "Ad-Free Experience",
    description: "Enjoy movies without distractions on the Premium plan.",
  },
];

export default function Features() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-gray-900 py-16 px-4 sm:px-8 flex flex-col items-center">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-5xl font-extrabold text-white mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent text-center"
      >
        Features
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {features.map((f, idx) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className="bg-black/60 border border-white/10 rounded-2xl backdrop-blur-lg p-6 flex items-start gap-4 shadow-xl"
          >
            <f.icon className="w-9 h-9 text-purple-400 flex-shrink-0" />
            <div>
              <h2 className="text-xl font-bold text-white mb-2">{f.title}</h2>
              <p className="text-gray-300">{f.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
