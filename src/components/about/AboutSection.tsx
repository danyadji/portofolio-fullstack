"use client";

import { useSectionIntro } from "@/hooks/useGsapReveal";
import AboutBio from "./AboutBio";
import AboutStats from "./AboutStats";
import { personalInfo } from "@/data/portfolio";
import { MapPin, Circle } from "lucide-react";

export default function AboutSection() {
  const sectionRef = useSectionIntro<HTMLElement>({
    maskSelector: ".mask-line-inner",
    fadeSelector: ".about-fade",
  });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-padding bg-white dark:bg-[#0a0a0a]"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* Left: Bio */}
          <div className="lg:col-span-7">
            <AboutBio />

            {/* Info pills */}
            <div className="flex flex-wrap items-center gap-3 mt-8 about-fade">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border text-sm text-muted-foreground">
                <MapPin className="w-3.5 h-3.5 text-indigo-500" />
                <span>{personalInfo.location}</span>
              </div>
              {personalInfo.available && (
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-sm text-emerald-600 dark:text-emerald-400 font-medium">
                  <Circle className="w-2.5 h-2.5 fill-emerald-500 text-emerald-500 animate-pulse" />
                  <span>Open to Work</span>
                </div>
              )}
            </div>
          </div>

          {/* Right: Stats */}
          <div className="about-fade lg:col-span-5">
            <div className="p-6 rounded-2xl border border-border bg-card shadow-sm">
              <AboutStats />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
