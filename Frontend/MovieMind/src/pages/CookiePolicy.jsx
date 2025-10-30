import React from "react";
import { Cookie } from "lucide-react";
import { motion } from "framer-motion";

export default function CookiePolicy() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-gray-900 py-16 px-4 sm:px-8 flex flex-col items-center">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-5xl font-extrabold text-white mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent text-center"
      >
        Cookie Policy
      </motion.h1>
      <div className="max-w-2xl w-full mx-auto bg-black/70 border border-white/10 rounded-2xl backdrop-blur-lg shadow-xl p-8 text-gray-300 space-y-6">
        <div className="flex items-center gap-2 mb-4">
          <Cookie className="w-6 h-6 text-yellow-400" />
          <span className="font-semibold text-lg text-white">Cookies</span>
        </div>
        <p>
          MovieMind uses cookies to save your settings and improve your experience. Cookies are never used for third-party advertising.
        </p>
        <ul className="list-disc list-inside ml-3">
          <li>Session cookies remember your login and preferences.</li>
          <li>Analytics cookies help our team understand how MovieMind is used.</li>
        </ul>
        <p>
          You can always clear cookies in your browser settings to reset preferences.
        </p>
      </div>
    </section>
  );
}
