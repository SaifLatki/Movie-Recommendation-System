import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Discover from "./pages/Discover";
import Watch from "./pages/Watch";
import Profile from "./pages/Profile";
import GoPremium from "./pages/GoPremium";
import Features from "./pages/Features";
import CookiePolicy from "./pages/CookiePolicy";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Pricing from "./pages/Pricing";
import Careers from "./pages/Careers";
import FAQ from "./pages/FAQ";
import Blog from "./pages/Blog";
import Press from "./pages/Press";
import HelpCenter from "./pages/HelpCenter";
import Status from "./pages/Status";
import API from "./pages/Api";
import DMCA from "./pages/DMCA";
import NotFound from "./pages/404";


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
          <Route path="/premium" element={<GoPremium />} />
          <Route path="/features" element={<Features />} />
          <Route path="/cookies" element={<CookiePolicy />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/press" element={<Press />} />
          <Route path="/help" element={<HelpCenter />} />
          <Route path="/status" element={<Status />} />
          <Route path="/api" element={<API />} />
          <Route path="/dmca" element={<DMCA />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
 