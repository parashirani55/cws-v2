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
        className={`sticky top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md" : "bg-white"
        }`}
      >
        <div className="w-full flex items-center justify-between py-3 sm:py-4 px-4 sm:px-6 lg:px-10">
          {/* ===== Left: Logo ===== */}
          <Link href="/">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 overflow-hidden flex items-center justify-center">
                <img
                  src="/logo.png"
                  alt="Logo-CWS"
                  className="object-contain w-full h-full"
                  draggable="false"
                  loading="lazy"
                />
              </div>
              <span className="font-bold text-sm sm:text-base md:text-lg text-black transition-colors">
                <span className="hidden sm:inline">Creative Wealth Society</span>
                <span className="sm:hidden">CWS</span>
              </span>
            </div>
          </Link>

          {/* ===== Right: Nav Buttons ===== */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-5">
            <Link href="/CoursesPlusCommunity">
              <button className="px-6 xl:px-8 py-3 xl:py-4 rounded-full font-semibold text-base xl:text-lg bg-red-900 text-white hover:bg-red-800 transition-colors">
                Courses + Community
              </button>
            </Link>

            <Link href="/About">
              <button className="px-6 xl:px-8 py-3 xl:py-4 rounded-full font-semibold text-base xl:text-lg bg-red-900 text-white hover:bg-red-800 transition-colors">
                About
              </button>
            </Link>

            <Link href="/signin">
              <button className="px-6 xl:px-8 py-3 xl:py-4 rounded-full font-semibold text-base xl:text-lg bg-[#e6d0c5] text-gray-900 hover:bg-[#d4b8aa] transition-colors">
                Sign In
              </button>
            </Link>
          </div>

          {/* ===== Mobile Menu Button ===== */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg transition-colors text-gray-900 hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* ===== Mobile Dropdown ===== */}

<div
  className={`lg:hidden transition-all duration-300 overflow-hidden ${
    mobileMenuOpen ? "max-h-96" : "max-h-0"
  } ${scrolled ? "bg-white" : "bg-white/95 backdrop-blur-sm"}`}
>
  <div className="px-4 sm:px-6 py-4 space-y-3 flex flex-col">
    <Link href="/CoursesPlusCommunity">
      <button className="w-full px-4 py-3 rounded-full font-semibold text-sm sm:text-base bg-red-900 text-white hover:bg-red-800 transition-colors">
        Courses + Community
      </button>
    </Link>

    <Link href="/About">
      <button className="w-full px-4 py-3 rounded-full font-semibold text-sm sm:text-base bg-red-900 text-white hover:bg-red-800 transition-colors">
        About
      </button>
    </Link>

    <Link href="/signin">
      <button className="w-full px-4 py-3 rounded-full font-semibold text-sm sm:text-base bg-white text-gray-900 hover:bg-gray-100 border border-black-300 transition-colors">
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
      {/* Flex column wrapper ensures hero fills remaining height */}
      <div className="flex flex-col min-h-screen overflow-hidden">
        <Navbar />

        {/* Hero Section */}
        <section className="flex-1 w-full bg-white flex flex-col lg:flex-row overflow-hidden">
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <div className="bg-pink-100 flex items-center justify-center p-8 sm:p-12 lg:p-12 lg:h-auto lg:self-center">
              <div className="relative">
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
                      expertise, build systems, and run your business with strategy,
                    </span>{" "}
                    <span className="font-bold">you stop trading time for money</span>{" "}
                    <span className="italic">
                      and start building something that gives you freedom,
                      success and the kind of wealth that always felt out of reach...
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
              className="
                w-full h-full 
                object-contain lg:object-cover lg:object-right
                shadow-2xl
                border-[10px] sm:border-[20px] md:border-[30px] lg:border-[50px]
                border-[#7b112a]
              "
            />
          </div>
        </section>
      </div>
    </>
  );
}
