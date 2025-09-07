import React, { useState } from "react";
import { Film, TrendingUp } from "lucide-react";
import MovieCard from "../components/MovieCard";
import moviesData from "../data/movies.json";

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

  const getGenreColor = (genre) => {
    const colors = {
      Action: "bg-red-100 text-red-700 border-red-200",
      Drama: "bg-blue-100 text-blue-700 border-blue-200",
      Crime: "bg-gray-100 text-gray-700 border-gray-200",
      "Sci-Fi": "bg-purple-100 text-purple-700 border-purple-200",
      Fantasy: "bg-green-100 text-green-700 border-green-200",
      Romance: "bg-pink-100 text-pink-700 border-pink-200",
    };
    return (
      colors[genre] || "bg-gray-100 text-gray-700 border-gray-200"
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Page Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Explore Movie Genres
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Discover movies by category, track average ratings, and dive into
            genres you love the most.
          </p>
        </div>

        {/* Genre Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-14">
          {genres.map((genre) => (
            <div
              key={genre.name}
              onClick={() =>
                setSelectedGenre(selectedGenre === genre.name ? "" : genre.name)
              }
              className={`cursor-pointer p-6 rounded-2xl border-2 transition-all duration-300 transform hover:scale-105 hover:shadow-md ${
                selectedGenre === genre.name
                  ? "border-blue-600 bg-blue-50 shadow-lg scale-105"
                  : `${getGenreColor(genre.name)}`
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <Film className="h-8 w-8 text-gray-700" />
                <TrendingUp className="h-5 w-5 text-gray-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">{genre.name}</h3>
              <div className="space-y-1 text-sm text-gray-700">
                <p>{genre.count} movies</p>
                <p>Avg. rating: {genre.averageRating}/10</p>
              </div>
            </div>
          ))}
        </div>

        {/* Selected Genre Movies */}
        {selectedGenre && (
          <div>
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-3xl font-bold text-gray-900">
                {selectedGenre} Movies
              </h2>
              <button
                onClick={() => setSelectedGenre("")}
                className="text-blue-600 hover:text-blue-800 font-medium"
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
            <div className="bg-white rounded-2xl shadow-lg p-10 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Can't find what you're looking for?
              </h3>
              <p className="text-gray-600 mb-6">
                Browse our complete movie collection or try our smart search
                feature to discover more.
              </p>
              <button
                onClick={() => setSelectedGenre("")}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-xl shadow-md transition-all duration-300"
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
