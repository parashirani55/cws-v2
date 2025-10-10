"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
  className={`sticky top-0 left-0 w-full z-50 transition-all duration-300 ${
    scrolled ? "bg-[#b71c1c] shadow-md" : "bg-[#b71c1c]"
  }`}
>
  <div className="w-full flex items-center justify-between py-3 sm:py-4 px-4 sm:px-6 lg:px-10">
    {/* ===== Left: Logo ===== */}
    <Link href="/">
    <div className="flex items-center gap-2 sm:gap-3">
      <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full overflow-hidden bg-white flex items-center justify-center">
        <img
          src="/logo.png"
          alt="Logo-CWS"
          className="object-contain w-full h-full"
          draggable="false"
          loading="lazy"
        />
      </div>
      <span
        className={`font-bold text-sm sm:text-base md:text-lg transition-colors ${
          scrolled ? "text-gray-900" : "text-white drop-shadow-lg"
        }`}
      >
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

    {/* ===== Mobile Menu Button ===== */}
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

  {/* ===== Mobile Dropdown ===== */}
  <div
    className={`lg:hidden transition-all duration-300 overflow-hidden ${
      mobileMenuOpen ? "max-h-96" : "max-h-0"
    } ${scrolled ? "bg-white" : "bg-white/95 backdrop-blur-sm"}`}
  >
    <div className="px-4 sm:px-6 py-4 space-y-3">
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
        <button className="w-full px-4 py-3 rounded-full font-semibold text-sm sm:text-base bg-white text-gray-900 hover:bg-gray-100 border border-gray-300 transition-colors">
          Sign In
        </button>
      </Link>
    </div>
  </div>
</nav>

  );
}

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="flex flex-col md:flex-row">
        {/* ===== LEFT SIDE IMAGE ===== */}
        <div className="hidden md:block w-1/2 h-full overflow-hidden">
          <img
            src="/Checkout/img-1.png"
            alt="Checkout Visual"
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* ===== RIGHT SIDE FORM ===== */}
        <div className="w-full md:w-1/2 p-8 bg-white overflow-y-auto text-black">
          {/* ===== Contact Information ===== */}
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-black">
              Contact Information
            </h2>

            <div className="flex gap-4 mb-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-1/2 border-2 border-gray-400 rounded-md px-4 py-2 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-500 transition"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-1/2 border-2 border-gray-400 rounded-md px-4 py-2 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-500 transition"
              />
            </div>

            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full border-2 border-gray-400 rounded-md px-4 py-2 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-500 transition"
              />
            </div>
          </div>

          <hr className="border-t border-gray-300 my-8" />

          {/* ===== Package Options ===== */}
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-black">
              Package Options
            </h2>
            <hr className="border-t border-gray-300 my-8" />

            {/* Option 1 */}
            <div className="flex justify-between items-start mb-4 p-5 rounded-lg hover:border-blue-600 transition">
              <div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="radio" name="package" className="mt-1 accent-blue-600" />
                  <div>
                    <p className="font-bold text-xl md:text-2xl text-black">The Bundle</p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      <span className="font-bold text-black">
                        8-in-1 Creative Mastery Program: 8 full courses + bonus toolkit +
                        1-year membership access.
                      </span>
                      <br />
                      Membership renews each year, same price. Cancel anytime.
                    </p>
                  </div>
                </label>
              </div>
              <div className="font-bold text-lg text-black">$997.00 USD</div>
            </div>

            <hr className="border-t border-gray-300 my-8" />

            {/* Option 2 */}
            <div className="flex justify-between items-start mb-4 p-5 rounded-lg hover:border-blue-600 transition">
              <div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="radio" name="package" className="mt-1 accent-blue-600" />
                  <div>
                    <p className="font-bold text-xl md:text-2xl text-black">The Membership</p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      <span className="font-bold text-black">
                        30-day membership access to CWS.
                      </span>
                      <br />
                      Automatically renews every month. Cancel anytime.
                    </p>
                  </div>
                </label>
              </div>
              <div className="font-bold text-lg text-black">$99.00 USD / month</div>
            </div>

            <hr className="border-t border-gray-300 my-8" />

            {/* Option 3 */}
            <div className="flex justify-between items-start mb-4 p-5 rounded-lg">
              <div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="radio" name="package" className="mt-1" />
                  <div>
                    <p className="font-bold text-xl md:text-2xl text-black">The Course</p>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      <span className="font-bold text-black">
                        Lifetime Access to 8-in-1 Creative Mastery program (8 full courses +
                        pro toolkit bonus).
                      </span>
                      <br />
                      <span className="text-red-500">No community membership included.</span>
                    </p>
                  </div>
                </label>
              </div>
              <div className="font-bold text-lg text-black">$897.00 USD - one time</div>
            </div>
          </div>

          {/* ===== Coupon Code ===== */}
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-black">
              Coupon Code
            </h2>
            <hr className="border-t border-gray-300 my-8" />
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Enter coupon code"
                className="flex-1 border border-gray-300 rounded px-3 py-2"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
                Apply
              </button>
            </div>
          </div>

          {/* ===== Payment Methods ===== */}
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-black">
              Payment Methods
            </h2>
            <div className="flex flex-col gap-2">
              <label><input type="radio" name="payment" className="mr-2" /> PayPal</label>
              <label><input type="radio" name="payment" className="mr-2" /> Apple Pay</label>
              <label><input type="radio" name="payment" className="mr-2" /> Afterpay</label>
              <label><input type="radio" name="payment" className="mr-2" /> Credit Card</label>
            </div>
          </div>

          {/* ===== Membership Select ===== */}
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-black">
              CWS Membership
            </h2>
            <p className="mb-2">Creative Wealth Society | Monthly Member</p>
            <select className="w-full border border-gray-300 rounded px-3 py-2 mb-4">
              <option>$99 USD / month</option>
            </select>
            <button className="w-full bg-red-700 hover:bg-red-800 text-white font-semibold px-6 py-3 rounded-full">
              Join the Society
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
