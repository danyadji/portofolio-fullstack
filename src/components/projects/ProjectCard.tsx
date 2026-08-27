import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  demo: string;
  github: string;
  featured: boolean;
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/project/${project.id}`} className="project-card block group rounded-3xl overflow-hidden bg-card border border-border hover:border-indigo-500/30 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        {/* Fallback gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-violet-100 dark:from-indigo-950/50 dark:to-violet-950/50 flex items-center justify-center">
          <span className="text-4xl font-bold text-indigo-300/50">{project.id}</span>
        </div>

        {/* Wrapper parallax — GSAP menggerakkan div ini, bukan img,
            agar efek hover (grayscale/scale) tetap jalan.
            Oversize 8% atas/bawah sebagai bleed agar tak muncul celah */}
        <div className="project-media absolute left-0 right-0 -top-[8%] -bottom-[8%] will-change-transform">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
          />
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-bold text-base text-foreground mb-1.5 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors duration-300">
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


