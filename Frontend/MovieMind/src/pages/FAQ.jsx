import React from "react";
import { HelpCircle } from "lucide-react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "How do recommendations work?",
    answer: "Our AI analyzes your preferences and viewing history to suggest movies you’ll love.",
  },
  {
    question: "Is there a free plan?",
    answer: "Yes! You can try CineMatch with basic features for free.",
  },
  {
    question: "Can I access CineMatch on mobile?",
    answer: "Absolutely — the platform is fully responsive and works perfectly across all devices.",
  },
  {
    question: "What happens if I cancel Premium?",
    answer: "You will keep your free features and lose access to Premium perks.",
  },
];

export default function FAQ() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-gray-900 py-16 px-4 sm:px-8 flex flex-col items-center">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-5xl font-extrabold text-white mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent text-center"
      >
        FAQ
      </motion.h1>
      <div className="max-w-2xl w-full mx-auto space-y-8">
        {faqs.map((faq, idx) => (
          <motion.div
            key={faq.question}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className="bg-black/60 border-l-4 border-purple-500 backdrop-blur-lg rounded-xl shadow-xl p-6"
          >
            <h2 className="text-lg font-semibold text-yellow-300 mb-2 flex items-center gap-2">
              <HelpCircle className="w-5 h-5" />
              {faq.question}
            </h2>
            <p className="text-gray-300">{faq.answer}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
