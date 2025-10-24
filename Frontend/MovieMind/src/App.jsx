import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Discover from "./pages/Discover";
import Watch from "./pages/Watch";
import Profile from "./pages/Profile";

export default function App() {
  return (
    <Router>
      <div className="bg-black text-white min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/watch/:id" element={<Watch />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
 