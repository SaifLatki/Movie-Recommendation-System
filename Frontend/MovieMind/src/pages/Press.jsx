import React from "react";
import { Megaphone, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Press() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-gray-900 py-16 px-4 sm:px-8 flex flex-col items-center">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-5xl font-extrabold text-white mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent text-center"
      >
        Press & Media
      </motion.h1>
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-black/60 border border-purple-400/20 rounded-xl shadow-xl p-6"
        >
          <h2 className="font-semibold text-lg text-white mb-2 flex items-center gap-2">
            <Megaphone className="w-6 h-6 text-yellow-400" />
            CineMatch In The News
          </h2>
          <p className="text-gray-300">
            Our innovative recommendation platform is featured by major tech blogs and movie magazines. For press kits or media inquiries, email <span className="text-purple-400">press@cinematch.ai</span>
          </p>
        </motion.div>
        <Sparkles className="w-10 h-10 text-purple-400 mx-auto mt-8" />
      </div>
    </section>
  );
}
