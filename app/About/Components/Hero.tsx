"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X, Menu } from "lucide-react";

export default function AboutUsHero() {
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
        className={`w-full transition-all duration-300 z-50 ${
          scrolled
            ? "fixed top-0 bg-white/70 backdrop-blur-xl shadow-md"
            : "fixed top-0 bg-[#7b112a]/30 backdrop-blur-xl"
        }`}
      >
        <div className="w-full flex items-center justify-between px-4 sm:px-8 lg:px-12 py-3 sm:py-4">
          {/* ===== Left: Logo ===== */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3">
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
          </Link>

          {/* ===== Right: Buttons / Menu ===== */}
          <div className="flex items-center gap-5 xl:gap-6">
            {/* Desktop Buttons */}
            <div className="hidden lg:flex items-center gap-5 xl:gap-6">
              <Link href="/course-plus-community">
                <button className="px-6 xl:px-8 py-3 xl:py-4 rounded-full font-semibold text-base xl:text-lg transition-colors bg-red-900 text-white hover:bg-red-800">
                  Courses + Community
                </button>
              </Link>

              <Link href="/about">
                <button className="px-6 xl:px-8 py-3 xl:py-4 rounded-full font-semibold text-base xl:text-lg transition-colors bg-red-900 text-white hover:bg-red-800">
                  About
                </button>
              </Link>

              <Link href="/signin">
                <button
                  className={`px-6 xl:px-8 py-3 xl:py-4 rounded-full font-semibold text-base xl:text-lg transition-colors ${
                    scrolled
                      ? "bg-white text-gray-900 hover:bg-gray-100 border border-gray-300"
                      : "bg-[#e6d0c5] text-gray-900 hover:bg-[#d4b8aa]"
                  }`}
                >
                  Sign In
                </button>
              </Link>
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

        {/* ===== Mobile Dropdown ===== */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            mobileMenuOpen ? "max-h-96" : "max-h-0"
          } ${scrolled ? "bg-white" : "bg-white/95 backdrop-blur-sm"}`}
        >
          <div className="px-4 sm:px-6 py-4 space-y-3">
            <Link href="/course-plus-community">
              <button className="w-full px-4 py-3 rounded-full font-semibold text-sm sm:text-base bg-red-900 text-white hover:bg-red-800 transition-colors">
                Courses + Community
              </button>
            </Link>
            <Link href="/about">
              <button className="w-full px-4 py-3 rounded-full font-semibold text-sm sm:text-base bg-red-900 text-white hover:bg-red-800 transition-colors">
                About
              </button>
            </Link>
            <Link href="/signin">
              <button className="w-full px-4 py-3 rounded-full font-semibold text-sm sm:text-base bg-white text-gray-900 hover:bg-gray-100 border border-gray-300 transition-colors">
                Sign In
              </button>
            </Link>
          </div>
        </div>
      </nav>
    );
  }

  return (  
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="w-full h-screen bg-white flex flex-col lg:flex-row pt-[80px]">
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <div className="bg-pink-100 flex items-center justify-center p-8 sm:p-12 lg:p-12 lg:h-auto lg:self-center">
            <div className="relative ">
              {/* Opening Quote */}
              <svg
                className="absolute -top-4 -left-2 w-12 h-12 sm:w-16 sm:h-16 text-black"
                viewBox="0 0 100 100"
                fill="currentColor"
              >
                <text x="0" y="80" fontSize="120" fontFamily="serif">
                  "
                </text>
              </svg>

              {/* Quote Text */}
              <blockquote className="relative z-10 pl-8 sm:pl-10">
                <p className="text-base sm:text-lg lg:text-xl xl:text-2xl leading-relaxed text-gray-900 font-normal text-center lg:px-8">
                  When you know how to package your{" "}
                  <span className="italic">
                    expertise, build systems, and run your business with
                    strategy,
                  </span>{" "}
                  <span className="font-bold">you stop trading time for money</span>{" "}
                  <span className="italic">
                    and start building something that gives you freedom,
                    success and the kind of wealth that always felt out of
                    reach...
                  </span>
                </p>
              </blockquote>

              {/* Closing Quote */}
              <svg
                className="absolute -bottom-4 right-0 w-12 h-12 sm:w-16 sm:h-16 text-black transform rotate-180"
                viewBox="0 0 100 100"
                fill="currentColor"
              >
                <text x="0" y="80" fontSize="120" fontFamily="serif">
                  "
                </text>
              </svg>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 bg-red-900 flex items-center justify-center overflow-hidden">
          <img
            src="/AboutUs/About-Hero.png"
            alt="Woman walking on beach near water with sun hat"
            className="w-full h-full object-cover lg:object-right shadow-2xl border-[50px] border-[#7b112a]"
          />
        </div>
      </section>
    </>
  );
}