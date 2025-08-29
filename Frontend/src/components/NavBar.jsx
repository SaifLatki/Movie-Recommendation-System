import React, { useState } from "react";
import { PiFilmSlateFill } from "react-icons/pi";
import {  Home, Grid3X3, Heart, Info, Search, Menu, X } from "lucide-react";

const NavBar = ({ currentPage, onPageChange }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "genres", label: "Genres", icon: Grid3X3 },
    { id: "watchlist", label: "Watchlist", icon: Heart },
    { id: "about", label: "About", icon: Info },
    { id: "movies", label: "Movies", icon: Search },
  ];

  return (
    <nav className="bg-gradient-to-r from-gray-900 to-gray-800 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <PiFilmSlateFill className="h-8 w-8 text-sky-500" />
            <span className="text-2xl font-extrabold text-white tracking-wide">
              MovieMind
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => onPageChange(item.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    currentPage === item.id
                      ? "bg-blue-600 text-white shadow-md scale-105"
                      : "text-gray-300 hover:text-white hover:bg-gray-700 hover:scale-105"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-700 shadow-lg">
          <div className="flex flex-col p-4 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onPageChange(item.id);
                    setMobileOpen(false);
                  }}
                  className={`flex items-center space-x-3 px-4 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                    currentPage === item.id
                      ? "bg-blue-600 text-white"
                      : "text-gray-300 hover:text-white hover:bg-gray-700"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
