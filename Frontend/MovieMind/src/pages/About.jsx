import React from "react";
import { Users, Film, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-950 via-black to-gray-900 py-16 px-4 sm:px-8 flex flex-col items-center">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-5xl font-extrabold text-white mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent text-center"
      >
        About Us
      </motion.h1>
      <div className="max-w-xl mx-auto text-center space-y-6">
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-gray-300 text-lg"
        >
          CineMatch is powered by cutting-edge AI technology to help movie fans everywhere discover, track, and enjoy their next favorite films. We believe in making every movie night a memorable experience!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex justify-center gap-8 mt-6"
        >
          <Users className="w-10 h-10 text-purple-400" />
          <Film className="w-10 h-10 text-yellow-400" />
          <Sparkles className="w-10 h-10 text-pink-400" />
        </motion.div>
      </div>
    </section>
  );
}
