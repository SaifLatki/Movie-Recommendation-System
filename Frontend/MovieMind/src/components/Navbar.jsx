import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const mobileMenuRef = useRef(null);

  // Handle scroll blur transition
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location]);

  // Click outside mobile menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  // Escape key closes menu
  useEffect(() => {
    const handleEscape = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [open]);

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/discover", label: "Discover" },
    { path: "/profile", label: "Profile" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/70 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-purple-500/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* 🔮 Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 group"
            aria-label="MovieMind AI Home"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <Sparkles className="w-7 h-7 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
              <div className="absolute inset-0 blur-md bg-purple-500/30 group-hover:bg-purple-400/40 transition-all duration-300 rounded-full" />
            </motion.div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 bg-clip-text text-transparent tracking-tight">
              MovieMind
            </span>
            <span className="px-2 py-0.5 text-xs font-semibold bg-purple-600/20 text-purple-300 rounded-full border border-purple-500/30 ml-1">
              AI
            </span>
          </Link>

          {/* 💻 Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-1">
              {navLinks.map((link) => (
                <motion.li
                  key={link.path}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <Link
                    to={link.path}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      isActive(link.path)
                        ? "text-white bg-gradient-to-r from-purple-600/30 to-pink-500/20 border border-purple-500/20 shadow-inner"
                        : "text-gray-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>

            {/* 🚀 Premium Button */}
            <motion.div whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/premium"
                className="relative px-6 py-2.5 rounded-full font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 transition-all duration-300 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50"
              >
                <span className="relative z-10">Go Premium</span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 blur-xl hover:opacity-30 transition-opacity duration-300" />
              </Link>
            </motion.div>
          </div>

          {/* 📱 Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* 📱 Animated Mobile Menu */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setOpen(false)}
              aria-hidden="true"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Slide Menu */}
            <motion.div
              ref={mobileMenuRef}
              className="fixed top-0 right-0 h-full w-72 bg-gradient-to-b from-black via-[#0b0b12] to-black backdrop-blur-2xl border-l border-purple-500/10 shadow-2xl z-50 md:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
            >
              <div className="flex flex-col gap-4 p-8 pt-24">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setOpen(false)}
                    className={`px-4 py-3 rounded-lg font-medium text-lg transition-all duration-300 ${
                      isActive(link.path)
                        ? "text-white bg-purple-600/20 border border-purple-500/30"
                        : "text-gray-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}

                <Link
                  to="/premium"
                  onClick={() => setOpen(false)}
                  className="mt-6 px-6 py-3 text-center rounded-full font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 shadow-lg shadow-purple-500/30"
                >
                  Go Premium
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
