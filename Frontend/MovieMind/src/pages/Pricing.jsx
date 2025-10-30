import React from "react";
import { Crown, Star, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/month",
    features: ["Basic recommendations", "Limited features"],
  },
  {
    name: "Premium",
    price: "$5",
    period: "/month",
    features: [
      "All features unlocked",
      "Unlimited recommendations",
      "Ad-free experience",
      "Priority support"
    ],
    popular: true,
  },
];

export default function Pricing() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-950 via-black to-gray-900 py-56 px-4 sm:px-8 flex flex-col items-center">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-5xl font-extrabold text-white mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent text-center"
      >
        Pricing
      </motion.h1>
      <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto">
        {plans.map((plan, idx) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 + idx * 0.2 }}
            className={`flex flex-col items-center p-8 rounded-2xl border-2 shadow-2xl bg-gradient-to-br ${
              plan.popular
                ? "from-yellow-500/10 to-purple-700/50 border-yellow-400"
                : "from-gray-700/30 to-black/70 border-white/10"
            } relative backdrop-blur-lg`}
          >
            {plan.popular && (
              <span className="absolute -top-5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-yellow-400 text-xs font-bold text-black shadow-lg border border-yellow-400/30">
                Best Value
              </span>
            )}
            <h3 className="text-2xl font-semibold text-white mb-2 flex items-center gap-1">
              {plan.name}
              {plan.popular && <Crown className="w-6 h-6 text-yellow-400" />}
            </h3>
            <span className="text-4xl font-extrabold text-yellow-400 mb-1">
              {plan.price}
              <span className="text-base text-gray-300">{plan.period}</span>
            </span>
            <ul className="mb-6 mt-4 space-y-2 text-gray-200 text-sm">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-400" />
                  {f}
                </li>
              ))}
            </ul>
            <motion.button
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-purple-700 text-white rounded-full font-semibold shadow-lg transition"
            >
              Choose Plan
            </motion.button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
