import React from "react";
import { Briefcase, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function Careers() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-950 via-black to-gray-900 py-16 px-4 sm:px-8 flex flex-col items-center">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-5xl font-extrabold text-white mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent text-center"
      >
        Careers
      </motion.h1>
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-gray-300 text-lg"
        >
          Join the CineMatch team and help us shape the future of movie discovery! We value creativity, innovation, and a love for movies.
        </motion.p>
        <div className="flex justify-center gap-6 mt-6">
          <Briefcase className="w-10 h-10 text-yellow-400" />
          <Users className="w-10 h-10 text-purple-400" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-8"
        >
          <div className="bg-black/70 rounded-2xl p-6 border border-white/10 shadow-xl text-left">
            <h2 className="font-semibold text-lg text-white mb-2">Current Openings</h2>
            <ul className="list-disc list-inside text-gray-300">
              <li>Frontend React Developer</li>
              <li>Backend Node.js Engineer</li>
              <li>UX/UI Designer</li>
              <li>Community Manager</li>
            </ul>
            <p className="mt-4 text-purple-300">Send your CV to careers@cinematch.ai</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
