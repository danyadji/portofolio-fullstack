"use client";

import { useGsapHeroEntrance } from "@/hooks/useGsapReveal";
import HeroHeading from "./HeroHeading";
import HeroPhoto from "./HeroPhoto";
import HeroCTA from "./HeroCTA";
import { ChevronDown } from "lucide-react";
import dynamic from "next/dynamic";

// Lazy-load WebGL component to keep the initial page bundle light
const LiquidEther = dynamic(() => import("@/components/LiquidEther"), { ssr: false });

export default function HeroSection() {
  const heroRef = useGsapHeroEntrance();

  return (
    <section
      id="hero"
      ref={heroRef}
      className="min-h-screen pt-16 bg-white dark:bg-[#0a0a0a] overflow-hidden relative"
    >
      {/* Ambient background blobs (dark mode) */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-500/5 dark:bg-violet-500/8 rounded-full blur-[100px] pointer-events-none" />

      {/* Liquid Ether Animated Background (Optimized parameters) */}
      <div className="hero-bg absolute inset-0 z-0 opacity-40 dark:opacity-60 pointer-events-none">
        <LiquidEther 
          colors={["#5227FF", "#FF9FFC", "#B19EEF"]} 
          resolution={0.3}       // Diturunkan dari 0.5 ke 0.3 untuk meringankan render GPU
          iterationsPoisson={16}  // Diturunkan dari 32 ke 16 untuk memotong beban matematika kalkulasi shader
        />
      </div>

      <div className="container-custom relative z-10 flex flex-col justify-center min-h-[calc(100vh-4rem)] py-16">
        {/* Main content: heading left, photo right */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
          {/* Left: Heading + CTA */}
          <div className="flex-1 max-w-2xl">
            <HeroHeading />
            <HeroCTA />
          </div>

          {/* Right: Photo */}
          <div className="flex justify-center lg:justify-end w-full lg:w-auto">
            <HeroPhoto />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hero-scroll mt-16 flex justify-center">
          <button
            onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300 group"
            aria-label="Scroll to about section"
          >
            <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
            <ChevronDown className="w-5 h-5 animate-bounce group-hover:animate-none" />
          </button>
        </div>
      </div>
    </section>
  );
}
