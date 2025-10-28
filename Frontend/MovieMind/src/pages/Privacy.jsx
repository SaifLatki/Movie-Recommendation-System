import React from "react";
import { Lock } from "lucide-react";
import { motion } from "framer-motion";

export default function Privacy() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-gray-900 py-16 px-4 sm:px-8 flex flex-col items-center">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-5xl font-extrabold text-white mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent text-center"
      >
        Privacy Policy
      </motion.h1>
      <div className="max-w-3xl w-full mx-auto bg-black/70 border border-white/10 rounded-2xl backdrop-blur-lg shadow-xl p-8 text-gray-300 space-y-6">
        <div className="flex items-center gap-2 mb-4">
          <Lock className="w-6 h-6 text-purple-400" />
          <span className="font-semibold text-lg text-white">Your Privacy Matters</span>
        </div>
        <p>
          CineMatch values your privacy, keeping your data secure and never selling any of your information. For questions, contact us any time!
        </p>
        <h2 className="font-semibold text-yellow-300 mt-4 mb-2">What We Collect</h2>
        <ul className="list-disc list-inside ml-3">
          <li>Your email and movie preferences to personalize your experience.</li>
          <li>Usage data to improve recommendations and features.</li>
        </ul>
        <h2 className="font-semibold text-yellow-300 mt-4 mb-2">How We Use Data</h2>
        <ul className="list-disc list-inside ml-3">
          <li>Personalize recommendations (never shared).</li>
          <li>Enhance site performance and security.</li>
        </ul>
        <h2 className="font-semibold text-yellow-300 mt-4 mb-2">Your Choices</h2>
        <p>You can delete your account or opt out of newsletters at any time. Contact us for privacy-related requests.</p>
      </div>
    </section>
  );
}
