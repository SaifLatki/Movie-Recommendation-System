import React from "react";
import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  return (
    <div className="bg-gray-900 rounded-xl overflow-hidden shadow hover:scale-[1.02] transition-all">
      <div className="relative">
        <img src={movie.thumbnail} alt={movie.title} className="w-full h-72 object-cover" />
        <div className="absolute top-2 left-2 bg-black/50 px-2 py-1 rounded text-sm text-yellow-400">
          ★ {movie.rating}
        </div>
      </div>
      <div className="p-4 text-white">
        <h3 className="text-lg font-semibold truncate">{movie.title}</h3>
        <p className="text-sm text-gray-400">{movie.genre}</p>
        <Link
          to={`/watch/${movie.id}`}
          className="mt-3 inline-block px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-full text-sm font-medium"
        >
          Watch Now
        </Link>
      </div>
    </div>
  );
}
