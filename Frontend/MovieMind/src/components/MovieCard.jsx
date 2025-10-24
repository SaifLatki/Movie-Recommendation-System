import React from "react";
import { Link } from "react-router-dom";
import { Play } from "lucide-react";

export default function MovieCard({ movie }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-1">
      
      {/* Movie Thumbnail */}
      <div className="relative">
        <img
          src={movie.thumbnail}
          alt={movie.title}
          className="w-full h-72 object-cover transition-all duration-500 group-hover:scale-110"
        />

        {/* Rating Tag */}
        <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-lg text-xs font-semibold text-yellow-400 shadow-md">
          ★ {movie.rating || "8.5"}
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-4">
          <Link
            to={`/watch/${movie.id}`}
            className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-full text-sm font-semibold shadow-lg shadow-purple-500/30 transition-all"
          >
            <Play size={18} /> Watch Now
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 text-white">
        <h3 className="text-lg font-bold truncate group-hover:text-purple-400 transition-colors">
          {movie.title}
        </h3>
        <p className="text-sm text-gray-400 mt-1">{movie.genre} • {movie.year}</p>
      </div>
    </div>
  );
}
