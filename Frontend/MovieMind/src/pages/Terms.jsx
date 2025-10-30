import React from "react";
import { BookOpen } from "lucide-react";
import { motion } from "framer-motion";

export default function Terms() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-gray-900 py-56 px-4 sm:px-8 flex flex-col items-center">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-5xl font-extrabold text-white mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent text-center"
      >
        Terms of Service
      </motion.h1>
      <div className="max-w-3xl w-full mx-auto bg-black/70 border border-white/10 rounded-2xl backdrop-blur-lg shadow-xl p-8 text-gray-300 space-y-6">
        <div className="flex items-center gap-2 mb-4">
          <BookOpen className="w-6 h-6 text-purple-400" />
          <span className="font-semibold text-lg text-white">Site Terms</span>
        </div>
        <h2 className="font-semibold text-yellow-300 mt-4 mb-2">Usage</h2>
        <p>
          MovieMind offers personalized recommendations for personal use. You're responsible for your account and content shared on the site.
        </p>
        <h2 className="font-semibold text-yellow-300 mt-4 mb-2">Premium & Payments</h2>
        <p>
          Premium features require payment; recurring subscriptions can be cancelled anytime. We reserve the right to modify features and pricing.
        </p>
        <h2 className="font-semibold text-yellow-300 mt-4 mb-2">Conduct</h2>
        <p>
          Respect other users. Abuse, hacking, or inappropriate behavior is not tolerated. Your account may be removed for violations.
        </p>
        <h2 className="font-semibold text-yellow-300 mt-4 mb-2">Legal</h2>
        <p>
          All trademarks and content belong to their respective owners; MovieMind does not host or stream movies directly.
        </p>
      </div>
    </section>
  );
}
