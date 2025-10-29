import React from "react";
import { LifeBuoy, HelpCircle, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function HelpCenter() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-950 via-black to-gray-900 py-16 px-4 sm:px-8 flex flex-col items-center">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-5xl font-extrabold text-white mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent text-center"
      >
        Help Center
      </motion.h1>
      <div className="max-w-xl w-full mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-black/60 rounded-xl border border-purple-500/30 backdrop-blur-lg shadow-xl p-6"
        >
          <h2 className="text-lg font-semibold text-purple-300 mb-2 flex items-center gap-2">
            <LifeBuoy className="w-5 h-5" /> Need Help?
          </h2>
          <p className="text-gray-300">
            Find answers to common questions in our <span className="text-yellow-400 font-semibold">FAQ</span> or contact support at <span className="text-purple-400">support@cinematch.ai</span>.
          </p>
        </motion.div>
        <div className="flex justify-center gap-8 mt-4">
          <HelpCircle className="w-8 h-8 text-yellow-300" />
          <Phone className="w-8 h-8 text-purple-400" />
        </div>
      </div>
    </section>
  );
}
