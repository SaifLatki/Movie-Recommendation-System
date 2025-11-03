import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Twitter,
  Github,
  Mail,
  Heart,
  Sparkles,
  Film,
  Tv,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // You can later make this dynamic from backend
  const genres = [
    "Action",
    "Comedy",
    "Drama",
    "Horror",
    "Sci-Fi",
    "Romance",
  ];

  const footerLinks = {
    browse: [
      { label: "Movies", icon: Film, to: "/movies" },
      { label: "TV Shows", icon: Tv, to: "/tv" },
    ],
    genres: genres.map((g) => ({
      label: g,
      to: `/genre/${g.toLowerCase()}`,
    })),
    product: [
      { label: "Features", to: "/features" },
      { label: "Pricing", to: "/pricing" },
      { label: "Premium", to: "/premium" },
      { label: "FAQ", to: "/faq" },
    ],
    company: [
      { label: "About Us", to: "/about" },
      { label: "Careers", to: "/careers" },
      { label: "Blog", to: "/blog" },
      { label: "Press", to: "/press" },
    ],
    legal: [
      { label: "Privacy Policy", to: "/privacy" },
      { label: "Terms of Service", to: "/terms" },
      { label: "Cookie Policy", to: "/cookies" },
      { label: "DMCA", to: "/dmca" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Github, href: "https://github.com", label: "GitHub" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-black via-gray-900 to-black border-t border-white/5">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-2 group mb-4">
              <div className="relative">
                <Sparkles className="w-8 h-8 text-purple-500 group-hover:text-purple-400 transition-colors duration-300" />
                <div className="absolute inset-0 blur-lg bg-purple-500/30 group-hover:bg-purple-400/40 transition-all duration-300" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 bg-clip-text text-transparent">
                MovieMind
              </span>
              <span className="px-2 py-0.5 text-xs font-semibold bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30">
                AI
              </span>
            </Link>

            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Your AI-powered movie recommendation platform. Discover your next
              favorite film or series with personalized suggestions.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800/50 hover:bg-purple-600/20 text-gray-400 hover:text-purple-400 rounded-lg transition-all duration-300 hover:scale-110 focus:ring-2 focus:ring-purple-500"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Browse + Genre + Other Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4 capitalize">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map(({ label, to, icon: Icon }) => (
                  <li key={to}>
                    <Link
                      to={to}
                      className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors duration-300 hover:translate-x-1"
                    >
                      {Icon && <Icon className="w-4 h-4 text-purple-400" />}
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="border-t border-white/5 pt-8 pb-8">
          <div className="max-w-md mx-auto text-center md:text-left md:mx-0">
            <h3 className="text-white font-semibold mb-2 flex items-center justify-center md:justify-start gap-2">
              <Mail className="w-5 h-5 text-purple-400" />
              Stay Updated
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Get the latest movie recommendations and updates.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800/50 border border-white/10 text-white rounded-lg focus:ring-2 focus:ring-purple-500"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p className="flex items-center gap-1">
            © {currentYear} MovieMind AI. Made with{" "}
            <Heart className="w-4 h-4 fill-pink-950 text-zinc-100 inline animate-pulse" />{" "}
            for movie lovers.
          </p>

          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-white">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-white">
              Terms
            </Link>
            <Link to="/cookies" className="hover:text-white">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
