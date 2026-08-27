"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { skills } from "@/data/portfolio";
import { skillIconMap } from "@/components/skills/iconMap";

gsap.registerPlugin(ScrollTrigger);

const items = [
  ...skills.frontend,
  ...skills.backend,
  ...skills.cms,
  ...skills.tools,
];

function MarqueeSet({ hidden }: { hidden?: boolean }) {
  return (
    <div className="flex shrink-0 items-center" aria-hidden={hidden}>
      {items.map((item) => {
        const Icon = skillIconMap[item.icon];
        return (
          <span
            key={item.name}
            className="flex shrink-0 items-center gap-2.5 md:gap-3 mr-8 md:mr-14"
          >
            {Icon && (
              <Icon className="w-5 h-5 md:w-6 md:h-6 shrink-0" aria-hidden="true" />
            )}
            <span className="text-xl md:text-3xl font-bold uppercase tracking-tight text-foreground/75 dark:text-foreground/70 whitespace-nowrap">
              {item.name}
            </span>
          </span>
        );
      })}
    </div>
  );
}

export default function TechMarquee() {
  const rootRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Hormati preferensi reduce-motion: tampilkan statis saja
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      // Loop tak berujung: track berisi 2 set identik, geser -50%
      const tween = gsap.to(track, {
        xPercent: -50,
        ease: "none",
        duration: 28,
        repeat: -1,
      });

      // Kecepatan bereaksi pada velocity scroll, lalu meluruh kembali
      const state = { target: 1, current: 1 };
      ScrollTrigger.create({
        onUpdate(self) {
          state.target = Math.min(1 + Math.abs(self.getVelocity()) / 300, 4);
        },
      });

      const tick = () => {
        state.target += (1 - state.target) * 0.05;
        state.current += (state.target - state.current) * 0.1;
        tween.timeScale(state.current);
      };
      gsap.ticker.add(tick);

      return () => {
        gsap.ticker.remove(tick);
      };
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={rootRef}
      className="relative overflow-hidden border-y border-border bg-[#f9f9f9] dark:bg-[#0d0d0d] py-5 md:py-7 select-none"
    >
      {/* Fade di tepi kiri-kanan biar teks tidak "terpotong kasar" */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 z-10 bg-gradient-to-r from-[#f9f9f9] dark:from-[#0d0d0d] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 z-10 bg-gradient-to-l from-[#f9f9f9] dark:from-[#0d0d0d] to-transparent" />

      <div ref={trackRef} className="flex w-max will-change-transform">
        <MarqueeSet />
        <MarqueeSet hidden />
      </div>
    </div>
  );
}
