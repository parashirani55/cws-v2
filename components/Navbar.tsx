"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="w-full px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 rounded-full overflow-hidden">
            <img
              src="/logo.png"
              alt="CWS Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <span
            className={`font-bold text-lg ${
              scrolled ? "text-gray-900" : "text-white drop-shadow-lg"
            }`}
          >
            Creative Wealth Society
          </span>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          <button
            className={`px-6 py-3 rounded-full font-semibold transition-colors ${
              scrolled
                ? "bg-red-900 text-white hover:bg-red-800"
                : "bg-white text-gray-900 hover:bg-gray-100 border border-gray-300"
            }`}
          >
            Courses + Community
          </button>
          <button
            className={`px-6 py-3 rounded-full font-semibold transition-colors ${
              scrolled
                ? "bg-red-900 text-white hover:bg-red-800"
                : "bg-white text-gray-900 hover:bg-gray-100 border border-gray-300"
            }`}
          >
            About
          </button>
          <button
            className={`px-6 py-3 rounded-full font-semibold transition-colors ${
              scrolled
                ? "bg-white text-gray-900 hover:bg-gray-100 border border-gray-300"
                : "bg-white text-gray-900 hover:bg-gray-100 border border-gray-300"
            }`}
          >
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
}
