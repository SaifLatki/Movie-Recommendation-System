// GoPremium.jsx

import React from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, Crown, Sparkles, CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const premiumFeatures = [
  { icon: Crown, label: "Unlimited Recommendations" },
  { icon: ShieldCheck, label: "Ad-Free Experience" },
  { icon: Sparkles, label: "Early Access to New Features" },
  { icon: CheckCircle, label: "Personalized Movie Lists" },
  { icon: CheckCircle, label: "Priority Support" },
];

const plans = [
  {
    name: "Monthly",
    price: "$5",
    period: "/month",
    popular: false,
    features: ["Cancel anytime", "All premium benefits"],
  },
  {
    name: "Yearly",
    price: "$49",
    period: "/year",
    popular: true,
    features: ["2 months free", "All premium benefits", "Exclusive badge"],
  },
];

export default function GoPremium() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-950 via-black to-gray-900 flex flex-col">
      {/* Hero Section */}
      <div className="relative py-20 pb-12 px-4 sm:px-8 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-8"
        >
          <Crown className="w-12 h-12 text-yellow-400 mx-auto mb-3 drop-shadow-xl" />
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
            Go Premium
          </h1>
          <p className="max-w-xl text-lg md:text-xl text-gray-300 mx-auto mb-6">
            Unlock the best MovieMind features and get tailored movie experiences, totally ad-free. It's the ultimate upgrade for movie lovers!
          </p>
          <span className="inline-block px-4 py-1 rounded-full text-sm font-semibold bg-yellow-400/10 text-yellow-200 border border-yellow-400/20 mb-6">
            Limited-Time Offer: Save 15% on yearly!
          </span>
        </motion.div>

        {/* Features List */}
        <motion.ul
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
            hidden: {},
          }}
          className="flex flex-wrap justify-center gap-6 mb-8"
        >
          {premiumFeatures.map((feature, idx) => (
            <motion.li
              key={feature.label}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 30 },
              }}
              className="flex items-center gap-2 px-4 py-2 bg-background border border-white/10 rounded-lg text-white text-base font-medium shadow-xl backdrop-blur-lg"
            >
              <feature.icon className="w-5 h-5 text-yellow-300" />
              {feature.label}
            </motion.li>
          ))}
        </motion.ul>

        {/* Pricing Plans */}
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + idx * 0.2, duration: 0.5 }}
              className={`flex flex-col items-center rounded-2xl border-2 shadow-2xl px-7 py-8 bg-gradient-to-br ${
                plan.popular
                  ? "from-yellow-500/10 to-purple-700/60 border-yellow-400"
                  : "from-gray-700/30 to-black/70 border-white/10"
              } backdrop-blur-lg relative`}
            >
              {plan.popular && (
                <span className="absolute -top-5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-yellow-400 text-xs font-bold text-black shadow-lg border border-yellow-400/30">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-semibold text-white mb-2">
                {plan.name}
              </h3>
              <p className="text-5xl font-extrabold text-yellow-400 mb-1">
                {plan.price}
                <span className="text-base text-gray-300">{plan.period}</span>
              </p>
              <ul className="mb-6 mt-4 space-y-2 text-gray-200 text-sm">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to={`/subscribe?plan=${plan.name.toLowerCase()}`}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-base shadow-lg transition-all duration-300 ${
                  plan.popular
                    ? "bg-yellow-400 text-purple-900 hover:bg-yellow-500"
                    : "bg-purple-700 text-white hover:bg-purple-800"
                } hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-yellow-300`}
              >
                Unlock Premium <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-black/80 border-t border-white/10 pb-20 pt-12 mt-auto">
        <div className="max-w-3xl mx-auto px-4 sm:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6 text-left">
            <div>
              <h3 className="text-base font-semibold text-yellow-300 mb-1">
                What happens after I subscribe?
              </h3>
              <p className="text-gray-300">You’ll immediately unlock all premium features, get an exclusive badge, and enjoy an ad-free movie recommendation experience.</p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-yellow-300 mb-1">
                Can I cancel anytime?
              </h3>
              <p className="text-gray-300">Yes! You can manage or cancel your subscription any time with no hidden fees.</p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-yellow-300 mb-1">
                Is my payment secure?
              </h3>
              <p className="text-gray-300">All payments are processed securely with industry-leading encryption standards.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
