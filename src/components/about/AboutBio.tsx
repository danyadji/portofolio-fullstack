import { personalInfo } from "@/data/portfolio";

export default function AboutBio() {
  return (
    <div>
      <div className="mb-4">
        <span className="about-fade section-label inline-flex items-center">
          About Me
        </span>
      </div>

      <h2 className="text-4xl md:text-5xl font-bold leading-[1.15] text-foreground mb-6">
        <span className="mask-line">
          <span className="mask-line-inner block">
            Building web apps is more cc
          </span>
        </span>
        <span className="mask-line">
          <span className="mask-line-inner block">
            than just writing code -{" "}
            <span className="text-gradient inline-block">it&apos;s my passion.</span>
          </span>
        </span>
      </h2>

      <p className="about-fade text-base text-muted-foreground leading-relaxed max-w-lg">
        {personalInfo.bio}
      </p>
    </div>
  );
}
