"use client";

import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, GitBranch } from "lucide-react";
import { InstagramIcon } from "@/components/icons/InstagramIcon";
import { ensureAbsoluteUrl } from "@/lib/utils";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  demo: string;
  github: string;
  instagram?: string;
  featured: boolean;
}

export default function ProjectCard({ project }: { project: Project }) {
  const hasDemo = project.demo && project.demo !== "#";
  const hasGithub = project.github && project.github !== "#";
  const hasInstagram = project.instagram && project.instagram !== "#";

  const handleExternalClick = (e: React.MouseEvent, url: string) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(ensureAbsoluteUrl(url), "_blank", "noopener,noreferrer");
  };

  return (
    <Link href={`/project/${project.id}`} className="project-card block group rounded-3xl overflow-hidden bg-card border border-border hover:border-foreground/30 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        {/* Fallback gradient */}
        <div className="absolute inset-0 bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center">
          <span className="text-4xl font-bold text-neutral-400">{project.id}</span>
        </div>

        {/* Parallax Image */}
        <div className="project-media absolute left-0 right-0 -top-[8%] -bottom-[8%] will-change-transform">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
          />
        </div>

        {/* Quick External Link Badges Overlay */}
        {(hasDemo || hasInstagram || hasGithub) && (
          <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity">
            {hasDemo && (
              <button
                type="button"
                onClick={(e) => handleExternalClick(e, project.demo)}
                title="Kunjungi Website / Demo Live"
                aria-label="Kunjungi Website / Demo Live"
                className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-black transition-all duration-200 cursor-pointer shadow-md"
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            )}

            {hasInstagram && (
              <button
                type="button"
                onClick={(e) => handleExternalClick(e, project.instagram!)}
                title="Lihat di Instagram"
                aria-label="Lihat di Instagram"
                className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-gradient-to-r hover:from-pink-500 hover:to-amber-500 transition-all duration-200 cursor-pointer shadow-md"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
              </button>
            )}

            {hasGithub && (
              <button
                type="button"
                onClick={(e) => handleExternalClick(e, project.github)}
                title="Source Code GitHub"
                aria-label="Source Code GitHub"
                className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-black transition-all duration-200 cursor-pointer shadow-md"
              >
                <GitBranch className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-bold text-base text-foreground mb-1.5 group-hover:opacity-80 transition-opacity duration-300">
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-3 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <Badge
              key={t}
              variant="secondary"
              className="text-xs rounded-full px-2.5 py-0.5 bg-muted text-muted-foreground"
            >
              {t}
            </Badge>
          ))}
        </div>
      </div>
    </Link>
  );
}


