"use client";

import { useRef } from "react";
import {
  useSectionIntro,
  useBatchReveal,
  useTimelineDraw,
} from "@/hooks/useGsapReveal";
import { education, experience, certifications } from "@/data/portfolio";
import { GraduationCap, Briefcase, Award, ExternalLink, Users, Laptop, Heart, Clock, Building2, UserCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Set ke `true` untuk menampilkan kembali section Sertifikasi
const showCertifications = false;

const typeIcon: Record<string, React.ComponentType<{ className?: string }>> = {
  internship: Briefcase,
  organization: Users,
  freelance: Laptop,
  volunteer: Heart,
  parttime: Clock,
  fulltime: Building2,
  selfemployed: UserCheck,
};

const typeLabel: Record<string, string> = {
  internship: "Magang",
  organization: "Organisasi",
  freelance: "Freelance",
  volunteer: "Volunteer",
  parttime: "Part-time",
  fulltime: "Full-time",
  selfemployed: "Self-employed",
};

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const eduRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  // Header section: heading naik dari mask, deskripsi menyusul
  useSectionIntro({
    ref: sectionRef,
    maskSelector: ".mask-line-inner",
    fadeSelector: ".exp-fade",
  });

  // Kartu pendidikan masuk berkelompok
  useBatchReveal({
    ref: eduRef,
    itemSelector: ".edu-card",
    y: 24,
    scale: 0.98,
    stagger: 0.1,
  });

  // Garis timeline tergambar mengikuti scroll + item masuk berurutan
  useTimelineDraw({ ref: timelineRef });
  useBatchReveal({
    ref: timelineRef,
    itemSelector: ".timeline-item",
    y: 28,
    scale: 0.98,
    stagger: 0.12,
  });

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="section-padding bg-white dark:bg-[#0a0a0a]"
    >
      <div className="container-custom">
        {/* Section header */}
        <div className="mb-14">
          <span className="exp-fade section-label">Background</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4 leading-tight">
            <span className="mask-line">
              <span className="mask-line-inner">
                Pendidikan &amp;{" "}
                <span className="text-gradient inline-block">Pengalaman</span>
              </span>
            </span>
          </h2>
          <p className="exp-fade text-base text-muted-foreground max-w-xl leading-relaxed">
            Perjalanan akademis dan pengalaman nyata yang membentuk kemampuan saya sebagai Web Developer.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

          {/* ── LEFT: Education + Certifications ── */}
          <div className="space-y-10">

            {/* Education */}
            <div>
              <div className="flex items-center gap-2.5 mb-6">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center">
                  <GraduationCap className="w-4 h-4 text-indigo-500" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Pendidikan</h3>
              </div>
              <div ref={eduRef} className="space-y-4">
                {education.map((edu) => (
                  <div key={edu.id} className="edu-card p-5 rounded-2xl bg-card border border-border hover:border-indigo-500/30 transition-colors duration-300">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div>
                        <p className="font-bold text-foreground">{edu.degree}</p>
                        <p className="text-sm text-muted-foreground">{edu.institution}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="text-xs font-medium text-muted-foreground bg-secondary px-2.5 py-1 rounded-full">
                          {edu.period}
                        </span>
                        {edu.gpa && (
                          <p className="text-xs text-indigo-500 font-semibold mt-1.5">IPK {edu.gpa}</p>
                        )}
                      </div>
                    </div>
                    {edu.description && (
                      <p className="text-sm text-muted-foreground leading-relaxed mt-3 border-t border-border pt-3">
                        {edu.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            {showCertifications && certifications.length > 0 && (
              <div>
                <div className="flex items-center gap-2.5 mb-6">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <Award className="w-4 h-4 text-amber-500" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">Sertifikasi</h3>
                </div>
                <div className="space-y-3">
                  {certifications.map((cert) => (
                    <div key={cert.id} className="flex items-center justify-between gap-4 p-4 rounded-xl bg-card border border-border hover:border-amber-500/30 transition-colors duration-300 group">
                      <div>
                        <p className="text-sm font-semibold text-foreground">{cert.title}</p>
                        <p className="text-xs text-muted-foreground">{cert.issuer} · {cert.year}</p>
                      </div>
                      {cert.url && cert.url !== "#" && (
                        <a
                          href={cert.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="shrink-0 text-muted-foreground hover:text-indigo-500 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* ── RIGHT: Experience Timeline ── */}
          <div>
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center">
                <Briefcase className="w-4 h-4 text-violet-500" />
              </div>
              <h3 className="text-lg font-bold text-foreground">Pengalaman</h3>
            </div>

            {/* Timeline */}
            <div ref={timelineRef} className="relative pl-6 space-y-6">
              {/* Garis yang tergambar mengikuti scroll (digerakkan GSAP) */}
              <div className="timeline-line absolute left-2 top-2 bottom-2 w-px bg-border will-change-transform" />

              {experience.map((exp) => (
                <div key={exp.id} className="timeline-item relative">
                  {/* Timeline dot */}
                  <div className="timeline-dot absolute -left-6 top-1.5 w-4 h-4 rounded-full bg-card border-2 border-indigo-500 flex items-center justify-center will-change-transform">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                  </div>

                  <div className="p-5 rounded-2xl bg-card border border-border hover:border-indigo-500/30 transition-colors duration-300">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-3 mb-1">
                      <p className="font-bold text-foreground leading-snug">{exp.title}</p>
                      {(() => {
                        const IconComponent = typeIcon[exp.type];
                        return (
                          <span className="shrink-0 text-xs px-2.5 py-0.5 rounded-full bg-secondary text-muted-foreground inline-flex items-center gap-1.5 font-medium">
                            {IconComponent && <IconComponent className="w-3 h-3" />}
                            {typeLabel[exp.type]}
                          </span>
                        );
                      })()}
                    </div>
                    <p className="text-sm text-indigo-500 font-medium mb-1">{exp.company}</p>
                    <p className="text-xs text-muted-foreground mb-3">{exp.period}</p>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                      {exp.description}
                    </p>

                    {/* Tech badges */}
                    {exp.tech && exp.tech.length > 0 && (
                      <div className="flex flex-wrap gap-1.5">
                        {exp.tech.map((t) => (
                          <Badge key={t} variant="secondary" className="text-xs px-2.5 py-0.5 rounded-full">
                            {t}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
