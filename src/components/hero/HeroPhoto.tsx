import Image from "next/image";
import { personalInfo } from "@/data/portfolio";

export default function HeroPhoto() {
  return (
    <div className="hero-photo flex flex-col items-center md:items-end gap-6">
      {/* Photo */}
      <div className="relative w-56 h-72 md:w-64 md:h-80">
        {/* Glow ring (dark mode) */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-violet-500/20 dark:from-indigo-500/30 dark:to-violet-500/30 blur-xl scale-110" />

        <div className="hero-photo-frame relative w-full h-full rounded-2xl overflow-hidden border border-border shadow-2xl bg-card">
          {/* Fallback gradient avatar (rendered behind the image) */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-violet-100 dark:from-indigo-950 dark:to-violet-950 flex items-center justify-center">
            <span className="text-5xl font-bold text-indigo-500 opacity-60">DP</span>
          </div>

          <Image
            src={personalInfo.photo}
            alt={`${personalInfo.name} — ${personalInfo.title}`}
            fill
            className="object-cover scale-130"
            priority
            onError={(e) => {
              // Fallback: hide image if photo not found
              const target = e.target as HTMLImageElement;
              target.style.display = "none";
            }}
          />
        </div>

        {/* Floating badge */}
        <div className="hero-photo-badge absolute -bottom-3 -left-3 bg-card border border-border rounded-xl px-3 py-2 shadow-lg">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-semibold text-foreground">Open to work</span>
          </div>
        </div>
      </div>

      {/* Intro text */}
      <div className="hero-intro max-w-[240px] text-right">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">
          Introduction
        </p>
        <p className="text-sm leading-relaxed text-foreground/80 font-medium">
          Hi, I&apos;m {personalInfo.name}.<br />
          {personalInfo.title} building modern digital experiences.
        </p>
      </div>
    </div>
  );
}
