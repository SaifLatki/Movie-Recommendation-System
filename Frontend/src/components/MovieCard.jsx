import React from "react";
import { Star, Heart, Play } from "lucide-react";

const MovieCard = ({ movie }) => {
  const getRatingColor = (rating) => {
    if (rating >= 8.0) return "text-green-400 bg-green-900/30";
    if (rating >= 7.0) return "text-yellow-400 bg-yellow-900/30";
    if (rating >= 6.0) return "text-orange-400 bg-orange-900/30";
    return "text-red-400 bg-red-900/30";
  };

  return (
    <div className="group bg-gray-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      {/* Poster */}
      <div className="relative aspect-[2/3] overflow-hidden">
        <img
          src={movie.poster}
          alt={`${movie.title} poster`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          onError={(e) => {
            e.currentTarget.src =
              "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Hover Actions */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex space-x-3">
            <button className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-200">
              <Play className="h-5 w-5" />
            </button>
            <button className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-200">
              <Heart className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Rating Badge */}
        <div
          className={`absolute top-3 right-3 flex items-center space-x-1 px-3 py-1 rounded-full ${getRatingColor(
            movie.rating
          )} backdrop-blur-sm border border-white/20`}
        >
          <Star className="h-3 w-3 fill-current" />
          <span className="text-sm font-semibold">{movie.rating}</span>
        </div>
      </div>

      {/* Info */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-white mb-2 line-clamp-1">
          {movie.title}
        </h3>

        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-gray-400 font-medium">{movie.year}</span>
          <span className="text-sm px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full font-medium">
            {movie.genre}
          </span>
        </div>

        {/* Rating Stars */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(movie.rating / 2)
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-gray-600"
                }`}
              />
            ))}
          </div>
          <span className="text-sm font-medium text-gray-300">
            {movie.rating}/10
          </span>
        </div>

        {/* Button */}
        <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-4 rounded-xl transition-all duration-200 transform hover:scale-105">
          View Details
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
