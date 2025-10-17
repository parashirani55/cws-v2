"use client";

import { useEffect, useState, useRef } from "react";
import AboutUsHero from "./Components/Hero";
import WelcomeSection from "./Components/Welcome";
import HowItStartedSection from "./Components/howitstarted";
import Buildingfromzero from "./Components/buildingfromzero";
import ThenSomethingClicked from "./Components/ThenSomethingClicked";
import WhenTheTruthHit from "./Components/WhenTheTruthHit";
import ThisIsForYouFriend from "./Components/ThisIsForYouFriend";
import LogoSection from "./Components/LogoSection";
import TwoTable from "./Components/TwoTable";
import Authorsign from "./Components/authorsign";

export default function AboutUs() {
  const [loading, setLoading] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
      requestAnimationFrame(() => setFadeIn(true));
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("in-view");
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -100px 0px" }
    );

    document.querySelectorAll(".section-wrapper").forEach((section) => {
      observerRef.current?.observe(section);
    });

    return () => {
      window.removeEventListener("load", handleLoad);
      observerRef.current?.disconnect();
    };
  }, []);

  return (
    <>
      {loading && (
        <div className="loader-overlay">
          <div className="spinner" />
        </div>
      )}

      <main className={`page-container ${fadeIn ? "fade-in" : ""}`} style={{ display: loading ? "none" : "block" }}>
        <div className="section-wrapper"><AboutUsHero /></div>
        <div className="section-wrapper"><WelcomeSection /></div>
        <div className="section-wrapper"><HowItStartedSection /></div>
        <div className="section-wrapper"><Buildingfromzero /></div>
        <div className="section-wrapper"><ThenSomethingClicked /></div>
        <div className="section-wrapper"><WhenTheTruthHit /></div>
        <div className="section-wrapper"><ThisIsForYouFriend /></div>
        <div className="section-wrapper"><LogoSection /></div>
        <div className="section-wrapper"><TwoTable /></div>
        <div className="section-wrapper"><Authorsign /></div>
      </main>

      <style jsx>{`
        .loader-overlay {
          position: fixed;
          top:0; left:0;
          width:100vw; height:100vh;
          display:flex; align-items:center; justify-content:center;
          background:#fff; z-index:9999;
        }
        .spinner {
          width:60px; height:60px;
          border:6px solid #f3f3f3;
          border-top:6px solid #c67287;
          border-radius:50%;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}}

        .page-container {opacity:0; transform:translate3d(0,30px,0); transition:opacity 1s, transform 1s;}
        .page-container.fade-in {opacity:1; transform:translate3d(0,0,0);}
        .section-wrapper {opacity:0; transform:translate3d(0,60px,0) scale(0.95); transition:opacity 1s, transform 1s; will-change:opacity,transform;}
        .section-wrapper.in-view {opacity:1; transform:translate3d(0,0,0) scale(1);}
      `}</style>
    </>
  );
}
