import React from "react";
import { Server, CheckCircle, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Status() {
  const status = [
    { system: "Website", state: "Online", Icon: CheckCircle, color: "text-green-400" },
    { system: "API", state: "Online", Icon: CheckCircle, color: "text-green-400" },
    { system: "Database", state: "Online", Icon: CheckCircle, color: "text-green-400" },
    { system: "Email Notifications", state: "Delayed", Icon: AlertCircle, color: "text-yellow-400" },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-950 via-black to-gray-900 py-56 px-4 sm:px-8 flex flex-col items-center">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-5xl font-extrabold text-white mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent text-center"
      >
        Service Status
      </motion.h1>
      <div className="max-w-xl w-full mx-auto bg-black/70 rounded-2xl shadow-xl p-8 border border-yellow-300/20">
        <div className="mb-6 flex items-center gap-2 text-purple-400">
          <Server className="w-7 h-7" />
          <span className="font-bold text-white">System Overview</span>
        </div>
        <ul className="space-y-6">
          {status.map(({ system, state, Icon, color }) => (
            <li key={system} className="flex items-center gap-3">
              <Icon className={`w-5 h-5 ${color}`} />
              <span className="font-semibold text-gray-200">{system}:</span>
              <span className={`font-bold ${color}`}>{state}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
