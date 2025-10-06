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
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-1xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3 sm:py-4">
          {/* Logo */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full overflow-hidden flex-shrink-0 bg-white">
              <div className="w-full h-full flex items-center justify-center text-white font-bold">
                <img src="/logo.png" alt="Logo-CWS" />
              </div>
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

export default function HeroSection() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero_video.mov" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Black Overlay for Better Text Visibility */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Hero Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24">
<div className="text-center max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
  {/* Heading */}
<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 drop-shadow-2xl leading-snug">
  An Exclusive Society for Creators
</h1>


  {/* Paragraphs */}
  <p className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-semibold text-white leading-snug mb-4 sm:mb-5 md:mb-6 drop-shadow-2xl">
    No More Guessing. No More Building <span className="italic font-light">Alone.</span>
  </p>

  <p className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-semibold text-white leading-snug mb-8 sm:mb-10 md:mb-12 drop-shadow-2xl">
    Just Strategy, Opportunity and Real <span className="text-white">Connection.</span>
  </p>

  {/* Button */}
  <button className="px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5 bg-red-900 text-white text-base sm:text-lg md:text-xl font-bold rounded-full hover:bg-red-800 transition-all transform hover:scale-105 shadow-2xl">
    GET INSTANT ACCESS
  </button>
</div>



        {/* Decorative Elements - Hidden on mobile for cleaner look */}
        <div className="hidden md:block absolute top-1/4 left-10 w-3 h-3 lg:w-4 lg:h-4 bg-white rounded-full opacity-70 animate-pulse"></div>
        <div className="hidden md:block absolute top-1/3 right-10 lg:right-20 w-4 h-4 lg:w-6 lg:h-6 bg-white rounded-full opacity-60 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="hidden md:block absolute bottom-1/4 left-1/4 w-4 h-4 lg:w-5 lg:h-5 bg-white rounded-full opacity-50 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="hidden md:block absolute bottom-1/3 right-1/3 w-3 h-3 lg:w-4 lg:h-4 bg-white rounded-full opacity-70 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>
    </div>
  );
}