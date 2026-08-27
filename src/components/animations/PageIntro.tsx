"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { MOTION, prefersReducedMotion } from "@/lib/animations";

/**
 * Sequence entrance untuk halaman detail project.
 * Anak-anaknya dianimasikan lewat atribut data:
 *   data-page="fade"  → fade-up berurutan
 *   data-page="image" → gambar terbuka via clip-path
 */
export default function PageIntro({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    if (prefersReducedMotion()) return;

    const fades = Array.from(
      root.querySelectorAll<HTMLElement>('[data-page="fade"]')
    );
    const image = root.querySelector<HTMLElement>('[data-page="image"]');

    const ctx = gsap.context(() => {
      if (fades.length) {
        gsap.from(fades, {
          y: MOTION.distance.subtle,
          opacity: 0,
          duration: MOTION.duration.base,
          ease: MOTION.ease.out,
          stagger: 0.08,
          delay: 0.1,
        });
      }
      if (image) {
        gsap.from(image, {
          clipPath: "inset(10% 6% 10% 6% round 28px)",
          scale: 1.04,
          duration: 1.2,
          ease: MOTION.ease.out,
          delay: 0.25,
        });
      }
    }, ref);

    return () => ctx.revert();
  }, []);

  return <div ref={ref}>{children}</div>;
}
