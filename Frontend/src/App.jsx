import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import MovieGrid from "./components/MovieGrid";
import Home from "./pages/Home";
import About from "./pages/About";
import Genres from "./pages/Genres";
import Watchlist from "./pages/Watchlist";
import Movies from "./pages/Movies";

function App() {
  return (
    <Router>
      
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<MovieGrid />} />
        <Route path="/about" element={<About />} />
        <Route path="/genres" element={<Genres />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/movie/:id" element={<Movies />} />

        <Route path="*" element={<h1 className="text-center mt-20 text-2xl">404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
