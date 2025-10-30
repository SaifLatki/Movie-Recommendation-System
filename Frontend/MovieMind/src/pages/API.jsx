import React from "react";
import { Cloud, Code2 } from "lucide-react";
import { motion } from "framer-motion";

export default function API() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-950 via-black to-gray-900 py-16 px-4 sm:px-8 flex flex-col items-center">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-5xl font-extrabold text-white mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent text-center"
      >
        CineMatch API
      </motion.h1>
      <div className="max-w-xl mx-auto text-center space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-black/60 rounded-xl border border-purple-500/20 shadow-xl p-8"
        >
          <div className="flex items-center gap-3 mb-4 justify-center">
            <Cloud className="w-7 h-7 text-purple-400" />
            <Code2 className="w-7 h-7 text-yellow-400" />
          </div>
          <p className="text-gray-300 mb-2">
            Integrate MovieMind movie recommendations into your app using our RESTful API!
          </p>
          <p className="text-yellow-400">Contact <span className="text-purple-400">api@moviemind.ai</span> for access.</p>
        </motion.div>
      </div>
    </section>
  );
}
