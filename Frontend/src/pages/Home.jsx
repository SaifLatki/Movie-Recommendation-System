import React from "react";
import { Play, TrendingUp, Star, Users } from "lucide-react";
import moviesData from "../data/movies.json";
import img from '../../public/static/movie.jpeg';

const Home = () => {
  const featuredMovies = moviesData.slice(0, 6);
  const topRatedMovies = [...moviesData]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-[90vh] flex items-center justify-center text-white"
        style={{
          backgroundImage: `url(${img})`, // place your image in /public/static
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/40"></div>

        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Discover Your Next
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              Favorite Movie
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10">
            Explore thousands of movies, create your watchlist, and get
            recommendations tailored to your taste.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg">
              <Play className="h-5 w-5" />
              <span>Start Exploring</span>
            </button>
            <button className="border-2 border-white/40 hover:border-white/70 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:bg-white/10">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="transition hover:scale-105">
            <div className="bg-blue-100 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-5 shadow-md">
              <TrendingUp className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900">10,000+</h3>
            <p className="text-gray-600">Movies Available</p>
          </div>
          <div className="transition hover:scale-105">
            <div className="bg-yellow-100 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-5 shadow-md">
              <Star className="h-8 w-8 text-yellow-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900">4.8/5</h3>
            <p className="text-gray-600">Average Rating</p>
          </div>
          <div className="transition hover:scale-105">
            <div className="bg-green-100 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-5 shadow-md">
              <Users className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900">50,000+</h3>
            <p className="text-gray-600">Active Users</p>
          </div>
        </div>
      </section>

      {/* Featured Movies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Featured Movies
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredMovies.map((movie) => (
              <div
                key={movie.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition duration-300 group"
              >
                <div className="aspect-[2/3] overflow-hidden">
                  <img
                    src={movie.poster}
                    alt={movie.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-1">
                    {movie.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{movie.genre}</span>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      <span className="text-sm font-medium text-gray-700">
                        {movie.rating}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Rated Movies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Top Rated Movies
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {topRatedMovies.map((movie, index) => (
              <div
                key={movie.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition duration-300"
              >
                <div className="relative aspect-[2/3]">
                  <img
                    src={movie.poster}
                    alt={movie.title}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-3 left-3 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    #{index + 1}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-1">
                    {movie.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{movie.year}</span>
                    <div className="flex items-center space-x-1">
                      <Star className="h-3 w-3 text-yellow-400 fill-yellow-400" />
                      <span className="text-xs font-medium">{movie.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
