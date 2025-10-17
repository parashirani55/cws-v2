"use client";

import { useEffect, useState, useRef } from "react";
import HeroSection from "@/components/HeroSection";
import LearnMasterSection from "@/components/LearnMasterSection";
import ThirdSection from "@/components/ThirdSection";
import WhatMakesCWSDifferent from "@/components/FifthSection";
import MembershipBenefits from "@/components/SixthSection";
import FounderSection from "@/components/SeventhSection";
import TestimonialCarousel from "@/components/EighthSection";
import FounderStorySection from "@/components/NineSection";
import PricingTabsSection from "@/components/tenthSection";
import FoundersCircleSection from "@/components/ElevenSection";
import OnlineIncomeLanding from "@/components/TwelveSection";
import AskMeAnything from "@/components/ThirteenSection";
import FAQAccordion from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Show preloader until page fully loaded
    const handleLoad = () => {
      setLoading(false);
      requestAnimationFrame(() => setFadeIn(true));
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    // Intersection Observer for section animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -100px 0px" }
    );

    const sections = document.querySelectorAll(".section-wrapper");
    sections.forEach((section) => observerRef.current?.observe(section));

    return () => {
      window.removeEventListener("load", handleLoad);
      observerRef.current?.disconnect();
    };
  }, []);

  return (
    <>
      {/* Preloader */}
      {loading && (
        <div className="loader-overlay">
          <div className="spinner" />
        </div>
      )}

      {/* Page content */}
      <main className={`page-container ${fadeIn ? "fade-in" : ""}`} style={{ display: loading ? "none" : "block" }}>
        <div className="section-wrapper"><HeroSection /></div>
        <div className="section-wrapper"><LearnMasterSection /></div>
        <div className="section-wrapper"><ThirdSection /></div>
        <div className="section-wrapper"><WhatMakesCWSDifferent /></div>
        <div className="section-wrapper"><MembershipBenefits /></div>
        <div className="section-wrapper"><FounderSection /></div>
        <div className="section-wrapper"><TestimonialCarousel /></div>
        <div className="section-wrapper"><FounderStorySection /></div>
        <div className="section-wrapper"><PricingTabsSection /></div>
        <div className="section-wrapper"><FoundersCircleSection /></div>
        <div className="section-wrapper"><OnlineIncomeLanding /></div>
        <div className="section-wrapper"><AskMeAnything /></div>
        <div className="section-wrapper"><FAQAccordion /></div>
        <div className="section-wrapper"><Footer /></div>
      </main>

      <style jsx>{`
        /* Preloader */
        .loader-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #ffffff;
          z-index: 9999;
        }

        .spinner {
          width: 60px;
          height: 60px;
          border: 6px solid #f3f3f3;
          border-top: 6px solid #c67287;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        /* Fade-in container */
        .page-container {
          opacity: 0;
          transform: translate3d(0, 30px, 0);
          transition: opacity 1s cubic-bezier(0.16,1,0.3,1), transform 1s cubic-bezier(0.16,1,0.3,1);
        }
        .page-container.fade-in {
          opacity: 1;
          transform: translate3d(0,0,0);
        }

        /* Section reveal */
        .section-wrapper {
          opacity: 0;
          transform: translate3d(0, 60px, 0) scale(0.95);
          transition: opacity 1s cubic-bezier(0.16,1,0.3,1), transform 1s cubic-bezier(0.16,1,0.3,1);
          will-change: opacity, transform;
        }
        .section-wrapper.in-view {
          opacity: 1;
          transform: translate3d(0,0,0) scale(1);
        }
      `}</style>
    </>
  );
}
