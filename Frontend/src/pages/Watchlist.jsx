import React, { useState, useEffect } from "react";
import { Heart, Trash2, Play, Calendar } from "lucide-react";
import MovieCard from "../components/MovieCard";
import moviesData from "../data/movies.json";

const Watchlist = () => {
  const [watchlist, setWatchlist] = useState([]);
  const [sortBy, setSortBy] = useState("title");

  useEffect(() => {
    // Simulate saved watchlist (in real app use localStorage or DB)
    const savedWatchlist = moviesData.slice(0, 5);
    setWatchlist(savedWatchlist);
  }, []);

  const removeFromWatchlist = (movieId) => {
    setWatchlist((prev) => prev.filter((movie) => movie.id !== movieId));
  };

  const clearWatchlist = () => {
    setWatchlist([]);
  };

  const sortedWatchlist = [...watchlist].sort((a, b) => {
    switch (sortBy) {
      case "title":
        return a.title.localeCompare(b.title);
      case "rating":
        return b.rating - a.rating;
      case "year":
        return b.year - a.year;
      default:
        return 0;
    }
  });

  const totalRuntime = watchlist.length * 120; // 2h per movie
  const averageRating =
    watchlist.length > 0
      ? (
          watchlist.reduce((sum, movie) => sum + movie.rating, 0) /
          watchlist.length
        ).toFixed(1)
      : "0";

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            🎬 My Watchlist
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Keep track of movies you want to watch and organize your viewing
            schedule.
          </p>
        </div>

        {watchlist.length > 0 ? (
          <>
            {/* Watchlist Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition">
                <Heart className="h-8 w-8 text-red-500 mx-auto mb-2" />
                <h3 className="text-2xl font-bold">{watchlist.length}</h3>
                <p className="text-gray-600">Movies Saved</p>
              </div>
              <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition">
                <Play className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                <h3 className="text-2xl font-bold">
                  {Math.floor(totalRuntime / 60)}h
                </h3>
                <p className="text-gray-600">Total Runtime</p>
              </div>
              <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition">
                <Calendar className="h-8 w-8 text-green-500 mx-auto mb-2" />
                <h3 className="text-2xl font-bold">{averageRating}</h3>
                <p className="text-gray-600">Avg. Rating</p>
              </div>
              <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition">
                <div className="h-8 w-8 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-purple-600 font-bold text-sm">
                    {new Set(watchlist.map((m) => m.genre)).size}
                  </span>
                </div>
                <h3 className="text-2xl font-bold">
                  {new Set(watchlist.map((m) => m.genre)).size}
                </h3>
                <p className="text-gray-600">Genres</p>
              </div>
            </div>

            {/* Controls */}
            <div className="bg-white rounded-2xl shadow-md p-6 mb-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex items-center gap-3">
                <label className="text-sm font-medium text-gray-700">
                  Sort by:
                </label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="title">Title (A-Z)</option>
                  <option value="rating">Rating (High → Low)</option>
                  <option value="year">Year (Newest First)</option>
                </select>
              </div>
              <button
                onClick={clearWatchlist}
                className="flex items-center gap-2 text-red-600 hover:text-red-800 font-medium transition"
              >
                <Trash2 className="h-4 w-4" />
                <span>Clear Watchlist</span>
              </button>
            </div>

            {/* Movies Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {sortedWatchlist.map((movie) => (
                <div key={movie.id} className="relative group">
                  <MovieCard movie={movie} />
                  <button
                    onClick={() => removeFromWatchlist(movie.id)}
                    className="absolute top-3 right-3 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          </>
        ) : (
          /* Empty State */
          <div className="text-center py-16">
            <div className="bg-white rounded-2xl shadow-lg p-12 max-w-md mx-auto">
              <Heart className="h-16 w-16 text-gray-300 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Your watchlist is empty
              </h3>
              <p className="text-gray-600 mb-6">
                Start adding movies to your watchlist to keep track of what you
                want to watch.
              </p>
              <button
                onClick={() => (window.location.href = "/movies")}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200"
              >
                Browse Movies
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Watchlist;
