import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-wide">
          <span className="text-purple-500">Cine</span>Match
          <span className="text-white">AI</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-gray-300 font-medium">
          <Link to="/" className="hover:text-white transition">Home</Link>
          <Link to="/discover" className="hover:text-white transition">Discover</Link>
          <Link to="/profile" className="hover:text-white transition">Profile</Link>
          
          {/* CTA button */}
          <Link 
            to="/premium"
            className="px-4 py-2 rounded-full bg-purple-600 hover:bg-purple-700 transition shadow-lg shadow-purple-500/20"
          >
            Go Premium
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-300"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/80 backdrop-blur-xl border-t border-white/10">
          <div className="px-6 py-4 flex flex-col gap-4 text-gray-200">
            <Link onClick={() => setOpen(false)} to="/" className="hover:text-white transition">Home</Link>
            <Link onClick={() => setOpen(false)} to="/discover" className="hover:text-white transition">Discover</Link>
            <Link onClick={() => setOpen(false)} to="/profile" className="hover:text-white transition">Profile</Link>

            <Link 
              onClick={() => setOpen(false)}
              to="/premium"
              className="px-4 py-2 rounded-full text-center bg-purple-600 hover:bg-purple-700 transition shadow-lg shadow-purple-500/20"
            >
              Go Premium
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
