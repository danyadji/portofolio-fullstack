"use client";

import { useEffect, useState } from "react";
import { personalInfo } from "@/data/portfolio";

const ROLES = [
  "UI/UX Designer",
  "Web Developer",
  "Web Designer",
  "E-Commerce Manager",
];

export default function HeroHeading() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % ROLES.length);
        setVisible(true);
      }, 400);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="z-10">
      {/* Tag */}
      <div className="hero-tag section-label mb-6">
        ✦   Available for work
      </div>

      {/* Static small label */}
      <p className="text-muted-foreground font-medium tracking-wide mb-1"
        style={{ fontSize: "clamp(0.9rem, 1.8vw, 1.4rem)" }}>
        Hi, aku seorang
      </p>

      {/* Animated role — standalone, no overflow clipping */}
      <h1
        className="font-bold tracking-tighter text-foreground mb-6"
        style={{
          fontSize: "clamp(2.5rem, 7vw, 6.5rem)",
          lineHeight: 1.15,
          paddingBottom: "0.1em",
        }}
      >
        <span
          className="text-gradient"
          style={{
            display: "inline-block",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(14px)",
            transition: "opacity 0.4s ease, transform 0.4s ease",
          }}
        >
          {ROLES[currentIndex]}
        </span>
      </h1>

      {/* Tagline */}
      <p className="hero-sub text-base md:text-lg text-muted-foreground max-w-md leading-relaxed">
        {personalInfo.tagline}
      </p>
    </div>
  );
}
