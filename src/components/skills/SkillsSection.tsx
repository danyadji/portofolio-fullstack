"use client";

import { useRef } from "react";
import { useSectionIntro, useBatchReveal } from "@/hooks/useGsapReveal";
import SkillsGrid from "./SkillsGrid";

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useSectionIntro({
    ref: sectionRef,
    maskSelector: ".mask-line-inner",
    fadeSelector: ".skills-fade",
  });

  useBatchReveal({
    ref: gridRef,
    itemSelector: ".skill-badge",
    y: 18,
    scale: 0.96,
    stagger: 0.035,
  });

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="section-padding bg-[#f9f9f9] dark:bg-[#0d0d0d]"
    >
      <div className="container-custom">
        {/* Header */}
        <div className="mb-12">
          <span className="skills-fade section-label">Tech Stack</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
            <span className="mask-line">
              <span className="mask-line-inner">Tools &amp; Technologies</span>
            </span>
          </h2>
          <p className="skills-fade text-muted-foreground mt-4 max-w-md">
            Teknologi yang saya gunakan sehari-hari untuk membangun produk digital yang modern dan scalable.
          </p>
        </div>

        {/* Grid */}
        <div ref={gridRef}>
          <SkillsGrid />
        </div>
      </div>
    </section>
  );
}
