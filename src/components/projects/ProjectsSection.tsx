"use client";

import { useRef } from "react";
import {
  useSectionIntro,
  useBatchReveal,
  useParallax,
} from "@/hooks/useGsapReveal";
import ProjectsGrid from "./ProjectsGrid";

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useSectionIntro({
    ref: sectionRef,
    maskSelector: ".mask-line-inner",
    fadeSelector: ".projects-fade",
  });

  // Card masuk per-kelompok mengikuti scroll
  useBatchReveal({
    ref: gridRef,
    itemSelector: ".project-card",
    y: 36,
    scale: 0.97,
    stagger: 0.08,
  });

  // Gambar bergeser halus di dalam frame (depth cue)
  useParallax({
    ref: gridRef,
    selector: ".project-media",
    amount: 5,
  });

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="section-padding bg-white dark:bg-[#0a0a0a]"
    >
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <span className="projects-fade section-label">Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              <span className="mask-line">
                <span className="mask-line-inner">Featured Projects</span>
              </span>
            </h2>
          </div>
          <p className="projects-fade text-sm text-muted-foreground max-w-[280px] md:text-right">
            Jelajahi portfolio saya - solusi digital kreatif untuk berbagai kebutuhan bisnis.
          </p>
        </div>

        {/* Grid */}
        <div ref={gridRef}>
          <ProjectsGrid />
        </div>
      </div>
    </section>
  );
}
