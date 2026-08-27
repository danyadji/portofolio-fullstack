import { personalInfo } from "@/data/portfolio";

export default function HeroHeading() {
  return (
    <div className="z-10">
      {/* Tag */}
      <div className="hero-tag section-label mb-6">
        ✦   Available for work
      </div>

      {/* Giant Heading — tiap baris naik dari balik mask */}
      <h1 className="font-bold tracking-tighter leading-[0.95] mb-6 text-foreground">
        <span className="mask-line">
          <span className="mask-line-inner hero-line-inner block text-[clamp(3rem,8vw,7rem)]">
            Full Stack
          </span>
        </span>
        <span className="mask-line">
          <span className="mask-line-inner hero-line-inner block text-[clamp(3rem,8vw,7rem)] text-gradient">
            Web Developer
          </span>
        </span>
      </h1>

      {/* Tagline */}
      <p className="hero-sub text-base md:text-lg text-muted-foreground max-w-md leading-relaxed">
        {personalInfo.tagline}
      </p>
    </div>
  );
}
