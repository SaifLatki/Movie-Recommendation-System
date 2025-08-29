import React from "react";
import MovieCard from "./MovieCard";

const movies = [
  {
    title: "Inception",
    year: "2010",
    genre: "Sci-Fi",
    rating: 8.8,
    poster: "https://m.media-amazon.com/images/I/51EG732BV3L.jpg",
  },
  {
    title: "Interstellar",
    year: "2014",
    genre: "Adventure",
    rating: 8.6,
    poster: "https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SY679_.jpg",
  },
  {
    title: "The Dark Knight",
    year: "2008",
    genre: "Action",
    rating: 9.0,
    poster: "https://m.media-amazon.com/images/I/51k0qa6qF5L.jpg",
  },
  {
    title: "Parasite",
    year: "2019",
    genre: "Thriller",
    rating: 8.6,
    poster: "https://m.media-amazon.com/images/I/81v8NWZBfgL._AC_SL1500_.jpg",
  },
  {
    title: "Avengers: Endgame",
    year: "2019",
    genre: "Superhero",
    rating: 8.4,
    poster: "https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SY679_.jpg",
  },
];

const MovieGrid = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-white mb-6">Recommended Movies</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieGrid;
