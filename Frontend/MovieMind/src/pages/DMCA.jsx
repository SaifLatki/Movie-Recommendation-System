import React from "react";
import { ShieldQuestion } from "lucide-react";
import { motion } from "framer-motion";

export default function DMCA() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-gray-900 py-16 px-4 sm:px-8 flex flex-col items-center">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-5xl font-extrabold text-white mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent text-center"
      >
        DMCA Policy
      </motion.h1>
      <div className="max-w-2xl mx-auto bg-black/70 border border-white/10 rounded-2xl backdrop-blur-lg shadow-xl p-8 text-gray-300 space-y-6">
        <div className="flex items-center gap-2 mb-4">
          <ShieldQuestion className="w-6 h-6 text-purple-400" />
          <span className="font-semibold text-lg text-white">Content Protection</span>
        </div>
        <p>
          CineMatch does not host or provide streaming content. If you believe your copyright has been infringed, contact us at <span className="text-purple-400">dmca@cinematch.ai</span> with details.
        </p>
        <p>
          Any reported issues will be investigated and content removed as warranted.
        </p>
      </div>
    </section>
  );
}
