"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MOTION, prefersReducedMotion } from "@/lib/animations";

gsap.registerPlugin(ScrollTrigger);

type AnyRef<T extends HTMLElement> = React.RefObject<T | null>;

// ============================================================
//  SECTION INTRO — satu timeline koordinat per section.
//  Heading naik dari balik mask, elemen pendukung fade-up
//  menyusul dengan ritme yang saling menyambung.
//
//  Markup heading: <span class="mask-line"><span class="mask-line-inner">…</span></span>
// ============================================================
export function useSectionIntro<T extends HTMLElement>(options?: {
  ref?: AnyRef<T>;
  maskSelector?: string;
  fadeSelector?: string;
  stagger?: number;
  start?: string;
}) {
  const innerRef = useRef<T>(null);
  const {
    ref,
    maskSelector = ".mask-line-inner",
    fadeSelector,
    stagger = 0.08,
    start = "top 82%",
  } = options ?? {};

  useEffect(() => {
    const root = (ref ?? innerRef).current;
    if (!root) return;
    if (prefersReducedMotion()) return;

    const masks = maskSelector
      ? Array.from(root.querySelectorAll<HTMLElement>(maskSelector))
      : [];
    const fades = fadeSelector
      ? Array.from(root.querySelectorAll<HTMLElement>(fadeSelector))
      : [];

    if (!masks.length && !fades.length) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: MOTION.ease.out },
        scrollTrigger: { trigger: root, start, once: true },
      });

      if (masks.length) {
        tl.from(masks, {
          yPercent: 120,
          duration: MOTION.duration.slow,
          stagger: 0.09,
        });
      }
      if (fades.length) {
        tl.from(
          fades,
          {
            y: MOTION.distance.subtle,
            opacity: 0,
            duration: MOTION.duration.base,
            stagger,
          },
          masks.length ? "-=0.7" : 0
        );
      }
    }, root);

    return () => ctx.revert();
  }, [ref, maskSelector, fadeSelector, stagger, start]);

  return ref ?? innerRef;
}

// ============================================================
//  BATCH REVEAL — untuk grid cards (projects, skills).
//  Card masuk per-kelompok mengikuti posisi scroll, bukan
//  semua sekaligus — inilah yang bikin grid terasa hidup.
// ============================================================
export function useBatchReveal<T extends HTMLElement>(options?: {
  ref?: AnyRef<T>;
  itemSelector: string;
  y?: number;
  scale?: number;
  stagger?: number;
}) {
  const innerRef = useRef<T>(null);
  const {
    ref,
    itemSelector,
    y = MOTION.distance.base,
    scale = 0.97,
    stagger = 0.07,
  } = options ?? {};

  useEffect(() => {
    const root = (ref ?? innerRef).current;
    if (!root || !itemSelector) return;

    const items = Array.from(root.querySelectorAll<HTMLElement>(itemSelector));
    if (!items.length) return;

    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.set(items, { y, opacity: 0, scale });

      ScrollTrigger.batch(items, {
        start: "top 90%",
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: MOTION.duration.slow,
            ease: MOTION.ease.out,
            stagger,
            overwrite: true,
          }),
      });
    }, root);

    return () => ctx.revert();
  }, [ref, itemSelector, y, scale, stagger]);

  return ref ?? innerRef;
}

// ============================================================
//  PARALLAX — gerak scroll-linked halus sebagai depth cue.
//  Elemen bergeser sedikit lebih lambat dari scroll.
// ============================================================
export function useParallax<T extends HTMLElement>(options?: {
  ref?: AnyRef<T>;
  selector?: string;
  amount?: number;
}) {
  const innerRef = useRef<T>(null);
  const { ref, selector, amount = 6 } = options ?? {};

  useEffect(() => {
    const root = (ref ?? innerRef).current;
    if (!root) return;
    if (prefersReducedMotion()) return;

    const targets: HTMLElement[] = selector
      ? Array.from(root.querySelectorAll<HTMLElement>(selector))
      : [root];
    if (!targets.length) return;

    const ctx = gsap.context(() => {
      targets.forEach((el) => {
        gsap.fromTo(
          el,
          { yPercent: -amount },
          {
            yPercent: amount,
            ease: MOTION.ease.none,
            scrollTrigger: {
              trigger: el.parentElement ?? el,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
              invalidateOnRefresh: true,
            },
          }
        );
      });
    }, root);

    return () => ctx.revert();
  }, [ref, selector, amount]);

  return ref ?? innerRef;
}

// ============================================================
//  TIMELINE DRAW — garis vertikal timeline Experience
//  "tergambar" mengikuti scroll, dot pop saat masuk viewport.
// ============================================================
export function useTimelineDraw<T extends HTMLElement>(options?: {
  ref?: AnyRef<T>;
  lineSelector?: string;
  dotSelector?: string;
}) {
  const innerRef = useRef<T>(null);
  const { ref, lineSelector = ".timeline-line", dotSelector = ".timeline-dot" } =
    options ?? {};

  useEffect(() => {
    const root = (ref ?? innerRef).current;
    if (!root) return;
    if (prefersReducedMotion()) return;

    const line = root.querySelector<HTMLElement>(lineSelector);
    const dots = Array.from(root.querySelectorAll<HTMLElement>(dotSelector));
    if (!line && !dots.length) return;

    const ctx = gsap.context(() => {
      if (line) {
        gsap.fromTo(
          line,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: MOTION.ease.none,
            transformOrigin: "top center",
            scrollTrigger: {
              trigger: line.parentElement ?? root,
              start: "top 80%",
              end: "bottom 55%",
              scrub: 0.5,
            },
          }
        );
      }
      if (dots.length) {
        gsap.from(dots, {
          scale: 0,
          duration: MOTION.duration.fast,
          ease: MOTION.ease.pop,
          stagger: 0.12,
          scrollTrigger: { trigger: dots[0], start: "top 85%", once: true },
        });
      }
    }, root);

    return () => ctx.revert();
  }, [ref, lineSelector, dotSelector]);

  return ref ?? innerRef;
}

// ============================================================
//  HERO ENTRANCE — sequence pembuka halaman (bukan scroll trigger).
// ============================================================
export function useGsapHeroEntrance() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: MOTION.ease.out },
        delay: 0.15,
      });

      tl.from(".hero-tag", { y: 16, opacity: 0, duration: 0.6 })
        // Heading naik dari balik mask, baris demi baris
        .from(
          ".hero-line-inner",
          { yPercent: 120, duration: 1.2, stagger: 0.12 },
          "-=0.35"
        )
        .from(".hero-sub", { y: 20, opacity: 0, duration: 0.8 }, "-=0.75")
        .from(
          ".hero-cta > *",
          { y: 18, opacity: 0, duration: 0.7, stagger: 0.1 },
          "-=0.55"
        )
        // Foto: clip-path terbuka + scale settle
        .from(
          ".hero-photo-frame",
          {
            clipPath: "inset(12% 8% 12% 8% round 24px)",
            scale: 1.08,
            duration: 1.3,
          },
          "-=1.15"
        )
        .from(
          ".hero-photo-badge",
          { scale: 0, duration: 0.6, ease: MOTION.ease.pop },
          "-=0.5"
        )
        .from(".hero-intro", { x: 28, opacity: 0, duration: 0.8 }, "-=0.9")
        .from(".hero-scroll", { y: 10, opacity: 0, duration: 0.6 }, "-=0.4");

      // Background fluid fade-in lembut (paralel dengan timeline)
      gsap.from(".hero-bg", {
        opacity: 0,
        duration: 1.8,
        ease: "power2.out",
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return ref;
}

// ============================================================
//  LEGACY — dipertahankan agar komponen lama tidak rusak.
// ============================================================
interface UseGsapRevealOptions {
  y?: number;
  x?: number;
  opacity?: number;
  duration?: number;
  delay?: number;
  stagger?: number;
  ease?: string;
  start?: string;
}

export function useGsapReveal<T extends HTMLElement>(
  selector?: string,
  options: UseGsapRevealOptions = {}
) {
  const ref = useRef<T>(null);

  const {
    y = 50,
    x = 0,
    opacity = 0,
    duration = 0.8,
    delay = 0,
    stagger = 0,
    ease = "power3.out",
    start = "top 80%",
  } = options;

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const targets = selector
      ? Array.from(root.querySelectorAll<HTMLElement>(selector))
      : [root];
    if (!targets.length) return;

    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const animateProps: gsap.TweenVars = {
        y,
        x,
        opacity,
        duration,
        delay,
        ease,
        scrollTrigger: {
          trigger: root,
          start,
          toggleActions: "play none none reverse",
        },
      };

      if (stagger > 0) animateProps.stagger = stagger;

      gsap.from(targets, animateProps);
    }, ref);

    return () => ctx.revert();
  }, [selector, y, x, opacity, duration, delay, stagger, ease, start]);

  return ref;
}
