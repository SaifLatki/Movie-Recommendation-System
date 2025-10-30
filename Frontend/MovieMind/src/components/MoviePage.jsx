import React, { useEffect, useState } from "react";
import axios from "axios";
import RecommendationGrid from "./RecommendationGrid"; // Or your movie list/grid component

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace URL with your API endpoint
    axios.get("http://img.omdbapi.com/?apikey=d19c5c08s=titanic")
      .then(response => {
        setMovies(response.data); // Adjust if your data path is different
        setLoading(false);
      })
      .catch(error => {
        console.error("Failed to fetch movies:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center text-gray-400 py-20">Loading movies...</div>
  }

  return (
    <div>
      <RecommendationGrid movies={movies} /> {/* Pass movies as prop */}
    </div>
  );
}
