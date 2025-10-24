import React from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

export default function ContinueWatching({ movies }) {
  return (
    <section className="mb-12">
      {/* Title Row */}
      <div className="flex justify-between items-center mb-4 px-1">
        <Link 
          to="/continue" 
          className="text-purple-400 hover:text-purple-300 transition text-sm font-medium"
        >
          View All →
        </Link>
      </div>

      {/* Slider Container */}
      <div 
        className="flex gap-5 overflow-x-auto scroll-smooth pb-3 px-1"
        style={{ scrollbarWidth: "none" }}
      >
        {/* Hide scrollbar for Chrome/Edge */}
        <style>
          {`
            div::-webkit-scrollbar {
              display: none;
            }
          `}
        </style>

        {movies.map((movie) => (
          <div 
            key={movie.id} 
            className="min-w-[200px] max-w-[200px] snap-center"
          >
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </section>
  );
}
