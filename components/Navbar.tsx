"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3 sm:py-4">
          {/* Logo */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full overflow-hidden flex-shrink-0">
              <img
                src="/logo.png"
                alt="CWS Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span
              className={`font-bold text-sm sm:text-base md:text-lg ${
                scrolled ? "text-gray-900" : "text-white drop-shadow-lg"
              }`}
            >
              <span className="hidden sm:inline">Creative Wealth Society</span>
              <span className="sm:hidden">CWS</span>
            </span>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              className={`px-4 xl:px-6 py-2.5 xl:py-3 rounded-full font-semibold text-sm xl:text-base transition-colors ${
                scrolled
                  ? "bg-red-900 text-white hover:bg-red-800"
                  : "bg-white text-gray-900 hover:bg-gray-100 border border-gray-300"
              }`}
            >
              Courses + Community
            </button>
            <button
              className={`px-4 xl:px-6 py-2.5 xl:py-3 rounded-full font-semibold text-sm xl:text-base transition-colors ${
                scrolled
                  ? "bg-red-900 text-white hover:bg-red-800"
                  : "bg-white text-gray-900 hover:bg-gray-100 border border-gray-300"
              }`}
            >
              About
            </button>
            <button
              className={`px-4 xl:px-6 py-2.5 xl:py-3 rounded-full font-semibold text-sm xl:text-base transition-colors ${
                scrolled
                  ? "bg-white text-gray-900 hover:bg-gray-100 border border-gray-300"
                  : "bg-white text-gray-900 hover:bg-gray-100 border border-gray-300"
              }`}
            >
              Sign In
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled
                ? "text-gray-900 hover:bg-gray-100"
                : "text-white hover:bg-white/10"
            }`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? "max-h-96" : "max-h-0"
        } ${scrolled ? "bg-white" : "bg-white/95 backdrop-blur-sm"}`}
      >
        <div className="px-4 sm:px-6 py-4 space-y-3">
          <button
            className="w-full px-4 py-3 rounded-full font-semibold text-sm sm:text-base bg-red-900 text-white hover:bg-red-800 transition-colors"
          >
            Courses + Community
          </button>
          <button
            className="w-full px-4 py-3 rounded-full font-semibold text-sm sm:text-base bg-red-900 text-white hover:bg-red-800 transition-colors"
          >
            About
          </button>
          <button
            className="w-full px-4 py-3 rounded-full font-semibold text-sm sm:text-base bg-white text-gray-900 hover:bg-gray-100 border border-gray-300 transition-colors"
          >
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
}