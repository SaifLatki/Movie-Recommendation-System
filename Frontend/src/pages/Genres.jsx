import React, { useState } from "react";
import {
  Film,
  TrendingUp,
  Heart,
  Sparkles,
  Swords,
  Clapperboard,
} from "lucide-react";
import MovieCard from "../components/MovieCard";
import moviesData from "../data/movies.json";

// Genre images (put them in /public/genres/)
const genreImages = {
  Action:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1x7s97CG15YevDJ1bQVcC64S-M0ZSVqBXWfN3EelwKHi3zKYuAsGcm9ECRYT3c0rS_OI&usqp=CAU",
  Drama:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmHZvqmk1D-ilPxnvQzQ5mfCMSG5XzyPjNuGm_kPhiqXFs25Fns0SvRRuiFk-miXcAYSA&usqp=CAU",
  Crime:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4mYRg9P_rCKAlmGNeD2qQoH6SJ26DUXrmLw&s",
  "Sci-Fi": "/genres/scifi.jpg",
  Fantasy: "/genres/fantasy.jpg",
  Romance: "/genres/romance.jpg",
};

const genreIcons = {
  Action: Swords,
  Drama: Clapperboard,
  Crime: Film,
  "Sci-Fi": Sparkles,
  Fantasy: Sparkles,
  Romance: Heart,
};

const Genres = () => {
  const [selectedGenre, setSelectedGenre] = useState("");

  // Count movies by genre
  const genreStats = moviesData.reduce((acc, movie) => {
    acc[movie.genre] = (acc[movie.genre] || 0) + 1;
    return acc;
  }, {});

  // Build genre list with average rating
  const genres = Object.keys(genreStats).map((genre) => ({
    name: genre,
    count: genreStats[genre],
    averageRating: (
      moviesData
        .filter((movie) => movie.genre === genre)
        .reduce((sum, movie) => sum + movie.rating, 0) / genreStats[genre]
    ).toFixed(1),
  }));

  const filteredMovies = selectedGenre
    ? moviesData.filter((movie) => movie.genre === selectedGenre)
    : [];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-yellow-400 mb-4">
            Explore Movie Genres
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            Discover movies by category, track average ratings, and dive into
            genres you love the most.
          </p>
        </div>

        {/* Genre Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-14">
          {genres.map((genre) => {
            const Icon = genreIcons[genre.name] || Film;
            return (
              <div
                key={genre.name}
                onClick={() =>
                  setSelectedGenre(
                    selectedGenre === genre.name ? "" : genre.name
                  )
                }
                className={`relative cursor-pointer rounded-2xl overflow-hidden shadow-md group transform transition-all duration-300 hover:scale-105`}
              >
                {/* Background Image */}
                <img
                  src={genreImages[genre.name] || "/genres/default.jpg"}
                  alt={genre.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center justify-between mb-2">
                    <Icon className="h-8 w-8 text-yellow-400" />
                    <TrendingUp className="h-5 w-5 text-gray-200" />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{genre.name}</h3>
                  <p className="text-sm text-gray-300">
                    {genre.count} movies • Avg {genre.averageRating}/10
                  </p>
                </div>

                {/* Highlight border if selected */}
                {selectedGenre === genre.name && (
                  <div className="absolute inset-0 border-4 border-indigo-500 rounded-2xl"></div>
                )}
              </div>
            );
          })}
        </div>

        {/* Selected Genre Movies */}
        {selectedGenre && (
          <div>
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-3xl font-bold text-yellow-400">
                {selectedGenre} Movies
              </h2>
              <button
                onClick={() => setSelectedGenre("")}
                className="text-indigo-400 hover:text-indigo-300 font-medium"
              >
                Clear Filter
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredMovies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          </div>
        )}

        {/* Call to Action */}
        {!selectedGenre && (
          <div className="text-center mt-20">
            <div className="bg-gray-800/80 rounded-2xl shadow-lg p-10 max-w-2xl mx-auto backdrop-blur-md">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                Can't find what you're looking for?
              </h3>
              <p className="text-gray-400 mb-6">
                Browse our complete movie collection or try our smart search
                feature to discover more.
              </p>
              <button
                onClick={() => setSelectedGenre("")}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-xl shadow-md transition-all duration-300"
              >
                Browse All Movies
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Genres;
