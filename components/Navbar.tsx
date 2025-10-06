"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
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
        scrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      {/* Full width container */}
      <div className="w-full px-6 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between py-6 sm:py-7 lg:py-8">
          {/* Left: Logo */}
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full overflow-hidden flex-shrink-0 bg-white flex items-center justify-center">
              <img src="/logo.png" alt="Logo-CWS" className="w-3/4 h-3/4 object-contain" />
            </div>
            <span
              className={`font-bold text-lg sm:text-2xl md:text-3xl ${
                scrolled ? "text-gray-900" : "text-white drop-shadow-xl"
              }`}
            >
              <span className="hidden sm:inline">Creative Wealth Society</span>
              <span className="sm:hidden">CWS</span>
            </span>
          </div>

          {/* Right: Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-6">
            <button
              className={`px-6 xl:px-8 py-3 xl:py-4 rounded-full font-semibold text-base xl:text-lg transition-colors ${
                scrolled
                  ? "bg-red-900 text-white hover:bg-red-800"
                  : "bg-white text-gray-900 hover:bg-gray-100 border border-gray-300"
              }`}
            >
              Courses + Community
            </button>
            <button
              className={`px-6 xl:px-8 py-3 xl:py-4 rounded-full font-semibold text-base xl:text-lg transition-colors ${
                scrolled
                  ? "bg-red-900 text-white hover:bg-red-800"
                  : "bg-white text-gray-900 hover:bg-gray-100 border border-gray-300"
              }`}
            >
              About
            </button>
            <button
              className={`px-6 xl:px-8 py-3 xl:py-4 rounded-full font-semibold text-base xl:text-lg transition-colors ${
                scrolled
                  ? "bg-white text-gray-900 hover:bg-gray-100 border border-gray-300"
                  : "bg-white text-gray-900 hover:bg-gray-100 border border-gray-300"
              }`}
            >
              Sign In
            </button>
          </div>

          {/* Right: Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-3 rounded-lg transition-colors ${
              scrolled
                ? "text-gray-900 hover:bg-gray-100"
                : "text-white hover:bg-white/10"
            }`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? "max-h-96" : "max-h-0"
        } ${scrolled ? "bg-white" : "bg-white/95 backdrop-blur-sm"}`}
      >
        <div className="px-6 sm:px-8 py-6 space-y-4">
          <button className="w-full px-6 py-4 rounded-full font-semibold text-base sm:text-lg bg-red-900 text-white hover:bg-red-800 transition-colors">
            Courses + Community
          </button>
          <button className="w-full px-6 py-4 rounded-full font-semibold text-base sm:text-lg bg-red-900 text-white hover:bg-red-800 transition-colors">
            About
          </button>
          <button className="w-full px-6 py-4 rounded-full font-semibold text-base sm:text-lg bg-white text-gray-900 hover:bg-gray-100 border border-gray-300 transition-colors">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
