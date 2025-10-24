import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black/60 backdrop-blur-lg border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-10 text-gray-300">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold">
            <span className="text-purple-500">Cine</span>Match
            <span className="text-white">AI</span>
          </h2>
          <p className="mt-3 text-gray-400 text-sm leading-relaxed">
            Discover movies smarter — powered by AI recommendations tailored just for you.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-2 font-medium">
          <h3 className="text-white font-semibold text-lg mb-2">Quick Links</h3>
          <Link to="/" className="hover:text-white transition">Home</Link>
          <Link to="/discover" className="hover:text-white transition">Discover</Link>
          <Link to="/profile" className="hover:text-white transition">Profile</Link>
          <Link to="/premium" className="hover:text-white transition">Go Premium</Link>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-3">Follow Us</h3>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition"><Facebook size={20} /></a>
            <a href="#" className="hover:text-white transition"><Instagram size={20} /></a>
            <a href="#" className="hover:text-white transition"><Twitter size={20} /></a>
            <a href="#" className="hover:text-white transition"><Github size={20} /></a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-5 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} CineMatch AI — Built with ❤️ for movie lovers.
      </div>
    </footer>
  );
}
