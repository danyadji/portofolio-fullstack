"use client";

import { useEffect, useRef } from "react";
import { stats } from "@/data/portfolio";
import gsap from "gsap";

export default function AboutStats() {
  const containerRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          // Baris masuk berurutan, selaras dengan animasi angka
          const rows = container.querySelectorAll<HTMLDivElement>(".stat-row");
          gsap.from(rows, {
            x: 24,
            opacity: 0,
            duration: 0.7,
            ease: "expo.out",
            stagger: 0.1,
          });

          const counters = container.querySelectorAll<HTMLSpanElement>("[data-count]");
          counters.forEach((el) => {
            const target = Number(el.dataset.count);
            gsap.fromTo(
              el,
              { innerText: 0 },
              {
                innerText: target,
                duration: 1.8,
                ease: "power2.out",
                snap: { innerText: 1 },
                onUpdate() {
                  el.innerText = Math.round(Number(el.innerText)).toString();
                },
              }
            );
          });
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col divide-y divide-border">
      {stats.map((stat, i) => (
        <div
          key={i}
          className="stat-row flex items-center justify-between py-5 first:pt-0 last:pb-0 group"
        >
          {/* Left: label + sublabel */}
          <div>
            <p className="text-sm font-semibold text-foreground leading-none mb-1">
              {stat.label}
            </p>
            {"sublabel" in stat && (
              <p className="text-xs text-muted-foreground">{stat.sublabel}</p>
            )}
          </div>

          {/* Right: number */}
          <div className="flex items-baseline gap-0.5 tabular-nums">
            <span
              data-count={stat.value}
              className="text-4xl font-bold tracking-tighter text-foreground transition-colors group-hover:text-indigo-500 duration-300"
            >
              {stat.value}
            </span>
            {"suffix" in stat && (
              <span className="text-2xl font-bold text-indigo-500">
                {stat.suffix}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
