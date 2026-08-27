// ===== MOTION DESIGN TOKENS =====
// Satu bahasa motion untuk seluruh site.
// Prinsip: sedikit variasi, timing konsisten, easing tegas.

export const MOTION = {
  ease: {
    /** Default untuk hampir semua reveal — cepat di awal, landing halus */
    out: "expo.out",
    /** Untuk pop/scale (badge, dot) yang butuh sedikit bounce */
    pop: "back.out(1.7)",
    /** Untuk scrub/parallax — harus linear agar 1:1 dengan scroll */
    none: "none",
  },
  duration: {
    fast: 0.5,
    base: 0.8,
    slow: 1.1,
  },
  /** Jarak vertikal default reveal — kecil = mahal, besar = murahan */
  distance: {
    subtle: 20,
    base: 32,
  },
} as const;

/** Cek preferensi reduce motion user (aksesibilitas) */
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return true;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
