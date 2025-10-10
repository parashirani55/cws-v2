"use client";

import { useEffect, useState, useRef } from "react";
import HeroSection from '@/components/HeroSection';
import LearnMasterSection from '@/components/LearnMasterSection';
import ThirdSection from '@/components/ThirdSection';
// import IncomeStrategySection from '@/components/FourthSection';
import WhatMakesCWSDifferent from '@/components/FifthSection';
import MembershipBenefits from '@/components/SixthSection';
import MeetTheFounder from '@/components/SeventhSection';
import TestimonialCarousel from '@/components/EighthSection';
import FounderStorySection from '@/components/NineSection';
import PricingTabsSection from '@/components/tenthSection';
import FoundersCircleSection from '@/components/ElevenSection';
import OnlineIncomeLanding from '@/components/TwelveSection';
import AskMeAnything from '@/components/ThirteenSection';
import FAQAccordion from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  const [fadeIn, setFadeIn] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Smooth scrolling & GPU boost
    document.documentElement.style.scrollBehavior = "smooth";
    document.body.style.transform = "translateZ(0)";
    document.body.style.backfaceVisibility = "hidden";
    document.body.style.perspective = "1000px";
    document.body.style.backgroundColor = "#ffffff"; // ✅ ensure white bg

    // Trigger initial fade-in
    requestAnimationFrame(() => {
      setTimeout(() => setFadeIn(true), 50);
    });

    // Intersection observer for scroll animation
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    const sections = document.querySelectorAll(".section-wrapper");
    sections.forEach((section) => observerRef.current?.observe(section));

    return () => {
      document.documentElement.style.scrollBehavior = "auto";
      observerRef.current?.disconnect();
    };
  }, []);

  return (
    <main className={`page-container ${fadeIn ? "fade-in" : ""}`}>
      <div className="section-wrapper"><HeroSection /></div>
      <div className="section-wrapper"><LearnMasterSection /></div>
      <div className="section-wrapper"><ThirdSection /></div>
      <div className="section-wrapper"><WhatMakesCWSDifferent /></div>
      <div className="section-wrapper"><MembershipBenefits /></div>
      <div className="section-wrapper"><MeetTheFounder /></div>
      <div className="section-wrapper"><TestimonialCarousel /></div>
      <div className="section-wrapper"><FounderStorySection /></div>
      <div className="section-wrapper"><PricingTabsSection /></div>
      <div className="section-wrapper"><FoundersCircleSection /></div>
      <div className="section-wrapper"><OnlineIncomeLanding /></div>
      <div className="section-wrapper"><AskMeAnything /></div>
      <div className="section-wrapper"><FAQAccordion /></div>
      <div className="section-wrapper"><Footer /></div>

      <style jsx>{`
        /* Main container fade-in */
        .page-container {
          background-color: #ffffff; /* ✅ white background */
          opacity: 0;
          transform: translate3d(0, 30px, 0);
          transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 1s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: opacity, transform;
        }

        .page-container.fade-in {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }

        /* Section reveal animation */
        .section-wrapper {
          opacity: 0;
          transform: translate3d(0, 60px, 0) scale(0.95);
          transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 1s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: opacity, transform;
          backface-visibility: hidden;
        }

        .section-wrapper.in-view {
          opacity: 1;
          transform: translate3d(0, 0, 0) scale(1);
        }

        /* Global overrides */
        :global(html),
        :global(body) {
          background-color: #ffffff; /* ✅ ensure full-page white */
          overflow-x: hidden;
        }

        :global(*) {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-rendering: optimizeLegibility;
        }

        @media (prefers-reduced-motion: reduce) {
          .page-container,
          .section-wrapper {
            transition: none;
            opacity: 1;
            transform: none;
          }
          :global(html) {
            scroll-behavior: auto;
          }
        }

        @media (min-width: 768px) {
          .section-wrapper {
            transform: translate3d(0, 80px, 0) scale(0.94);
          }
        }
      `}</style>
    </main>
  );
}
