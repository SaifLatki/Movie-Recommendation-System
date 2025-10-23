
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-purple-500">
          CineMatch<span className="text-white">AI</span>
        </Link>
        <div className="flex gap-6 text-gray-300 font-medium">
          <Link to="/">Home</Link>
          <Link to="/discover">Discover</Link>
          <Link to="/profile">Profile</Link>
        </div>
      </div>
    </nav>
  );
}
