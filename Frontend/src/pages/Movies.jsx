import React, { useState, useEffect } from "react";
import { Search, Filter } from "lucide-react";
import MovieCard from "../components/MovieCard";
import moviesData from "../data/movies.json";

const Movies = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [filteredMovies, setFilteredMovies] = useState(moviesData);
  const [isLoading, setIsLoading] = useState(false);

  const genres = [...new Set(moviesData.map((movie) => movie.genre))];

  const handleSearch = () => {
    setIsLoading(true);

    setTimeout(() => {
      let filtered = moviesData;

      if (searchTerm) {
        filtered = filtered.filter(
          (movie) =>
            movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            movie.genre.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      if (selectedGenre) {
        filtered = filtered.filter((movie) => movie.genre === selectedGenre);
      }

      setFilteredMovies(filtered);
      setIsLoading(false);
    }, 500);
  };

  useEffect(() => {
    if (searchTerm === "" && selectedGenre === "") {
      setFilteredMovies(moviesData);
    }
  }, [searchTerm, selectedGenre]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            🎥 Browse Movies
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover amazing movies from our curated collection. Search by
            title, filter by genre, and find your next favorite film.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-10 border border-gray-200">
          <div className="flex flex-col lg:flex-row gap-4 items-stretch">
            {/* Search Input */}
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search movies by title..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={handleKeyPress}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>

            {/* Genre Filter */}
            <div className="relative min-w-[180px]">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Filter className="h-5 w-5 text-gray-400" />
              </div>
              <select
                value={selectedGenre}
                onChange={(e) => setSelectedGenre(e.target.value)}
                className="w-full pl-12 pr-8 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white transition-all duration-200"
              >
                <option value="">All Genres</option>
                {genres.map((genre) => (
                  <option key={genre} value={genre}>
                    {genre}
                  </option>
                ))}
              </select>
            </div>

            {/* Search Button */}
            <button
              onClick={handleSearch}
              disabled={isLoading}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-xl shadow-md transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isLoading ? "Searching..." : "Search"}
            </button>
          </div>
        </div>

        {/* Results Section */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-1">
            {searchTerm || selectedGenre ? "Search Results" : "All Movies"}
          </h2>
          <p className="text-gray-600">
            {filteredMovies.length}{" "}
            {filteredMovies.length === 1 ? "movie" : "movies"} found
          </p>
        </div>

        {/* Loading State */}
        {isLoading ? (
          <div className="text-center py-16">
            <div className="inline-block animate-spin rounded-full h-14 w-14 border-b-2 border-blue-600 mb-4"></div>
            <p className="text-gray-600 text-lg">Loading movies...</p>
          </div>
        ) : (
          /* Movies Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredMovies.length > 0 ? (
              filteredMovies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))
            ) : (
              <div className="col-span-full text-center py-20">
                <div className="bg-gray-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 shadow-inner">
                  <Search className="h-12 w-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No movies found
                </h3>
                <p className="text-gray-600">
                  Try adjusting your search or filter options
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Movies;
