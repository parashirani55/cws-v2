"use client";

import { useEffect, useState, useRef } from "react";
import Firstsection from "./Components/firstsection";
import SecondSection from "./Components/secondsection";
import MembershipSection from "./Components/thirdsection";
import Fourthsection from "./Components/fourthsection";
import FifthSection from "./Components/fifthsection";

export default function CoursesPlusCommunity() {
  const [fadeIn, setFadeIn] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    document.body.style.transform = "translateZ(0)";
    document.body.style.backfaceVisibility = "hidden";
    document.body.style.perspective = "1000px";
    document.body.style.backgroundColor = "#ffffff";

    requestAnimationFrame(() => {
      setTimeout(() => setFadeIn(true), 50);
    });

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
    sections.forEach((section) => {
      observerRef.current?.observe(section);
    });

    return () => {
      document.documentElement.style.scrollBehavior = "auto";
      observerRef.current?.disconnect();
    };
  }, []);

  return (
    <main className={`page-container ${fadeIn ? "fade-in" : ""}`}>
      <div className="section-wrapper">
        <Firstsection />
      </div>
      <div className="section-wrapper">
        <SecondSection />
      </div>
      <div className="section-wrapper">
        <MembershipSection />
      </div>
      <div className="section-wrapper">
        <Fourthsection />
      </div>
      <div className="section-wrapper">
        <FifthSection />
      </div>

      <style jsx>{`
        .page-container {
          background-color: #ffffff;
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

        .section-wrapper {
          opacity: 0;
          transform: translate3d(0, 60px, 0) scale(0.95);
          transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 1s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: opacity, transform;
          backface-visibility: hidden;
          -webkit-font-smoothing: antialiased;
        }

        .section-wrapper.in-view {
          opacity: 1;
          transform: translate3d(0, 0, 0) scale(1);
        }

        :global(html),
        :global(body) {
          background-color: #ffffff;
          overflow-x: hidden;
          overflow-y: auto;
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
