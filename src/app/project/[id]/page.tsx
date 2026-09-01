import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, GitBranch, CheckCircle2, Lightbulb, User } from "lucide-react";
import { InstagramIcon } from "@/components/icons/InstagramIcon";
import { projects } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";
import Footer from "@/components/footer/Footer";
import PageIntro from "@/components/animations/PageIntro";

import { ensureAbsoluteUrl } from "@/lib/utils";

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.id.toString() === resolvedParams.id);

  if (!project) {
    notFound();
  }

  return (
    <>
      <main className="min-h-screen pt-20 pb-24 bg-background">
        <PageIntro>
        <div className="container-custom max-w-4xl">

          {/* Back Button */}
          <Link
            href="/#projects"
            data-page="fade"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-10 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
            Kembali ke Beranda
          </Link>

          {/* ── HEADER ── */}
          <div className="mb-10">
            <h1 data-page="fade" className="text-4xl md:text-5xl font-bold text-foreground mb-5 leading-tight">
              {project.title}
            </h1>

            {/* Tech badges */}
            <div data-page="fade" className="flex flex-wrap items-center gap-2 mb-7">
              {project.tech.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="px-3 py-1 rounded-full text-sm bg-secondary text-secondary-foreground"
                >
                  {tech}
                </Badge>
              ))}
            </div>

            {/* CTA Buttons */}
            <div data-page="fade" className="flex flex-wrap gap-3">
              {project.demo && project.demo !== "#" && (
                <a
                  href={ensureAbsoluteUrl(project.demo)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-foreground text-background hover:opacity-90 px-6 py-2.5 rounded-full text-sm font-semibold transition-opacity"
                >
                  <ExternalLink className="w-4 h-4" />
                  Kunjungi Website / Demo
                </a>
              )}
              {(project as any).instagram && (project as any).instagram !== "#" && (
                <a
                  href={ensureAbsoluteUrl((project as any).instagram)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 text-white hover:opacity-90 px-6 py-2.5 rounded-full text-sm font-semibold transition-opacity shadow-md"
                >
                  <InstagramIcon className="w-4 h-4" />
                  Lihat di Instagram
                </a>
              )}
              {project.github && project.github !== "#" && (
                <a
                  href={ensureAbsoluteUrl(project.github)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-card border border-border text-foreground hover:bg-secondary px-6 py-2.5 rounded-full text-sm font-semibold transition-colors shadow-sm"
                >
                  <GitBranch className="w-4 h-4" />
                  Source Code
                </a>
              )}
            </div>
          </div>

          {/* ── MAIN IMAGE ── */}
          <div data-page="image" className="relative aspect-video w-full rounded-2xl md:rounded-3xl overflow-hidden border border-border shadow-2xl mb-14 bg-muted">
            <div className="absolute inset-0 bg-neutral-100 dark:bg-neutral-900" />
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* ── INFO GRID ── */}
          <div data-page="fade" className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">

            {/* Role Card */}
            {"role" in project && (
              <div className="md:col-span-3 flex items-start gap-4 p-6 rounded-2xl bg-card border border-border">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                  <User className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">Peran Saya</p>
                  <p className="text-sm text-foreground font-medium leading-relaxed">{(project as any).role}</p>
                </div>
              </div>
            )}
          </div>

          {/* ── TENTANG PROJECT ── */}
          {"longDescription" in project && (
            <section data-page="fade" className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">Tentang Project</h2>
              <p className="text-muted-foreground leading-relaxed text-base">
                {(project as any).longDescription}
              </p>
            </section>
          )}

          {/* ── FITUR UTAMA ── */}
          {"features" in project && Array.isArray((project as any).features) && (project as any).features.length > 0 && (
            <section data-page="fade" className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-5">Fitur Utama</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {(project as any).features.map((feature: string) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border"
                  >
                    <CheckCircle2 className="w-4 h-4 text-foreground mt-0.5 shrink-0" />
                    <span className="text-sm text-foreground leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* ── TANTANGAN & SOLUSI ── */}
          {"challenges" in project && (
            <section data-page="fade" className="mb-14">
              <h2 className="text-2xl font-bold text-foreground mb-4">Tantangan & Solusi</h2>
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-amber-50 border border-amber-200 dark:bg-amber-950/20 dark:border-amber-900/30">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-amber-500" />
                </div>
                <p className="text-sm text-foreground/80 leading-relaxed">{(project as any).challenges}</p>
              </div>
            </section>
          )}

          {/* ── ADDITIONAL IMAGES ── */}
          {"images" in project && Array.isArray((project as any).images) && (project as any).images.length > 1 && (
            <section data-page="fade" className="mb-14">
              <h2 className="text-2xl font-bold text-foreground mb-5">Screenshot</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {(project as any).images.slice(1).map((img: string, i: number) => (
                  <div key={i} className="relative aspect-video rounded-xl overflow-hidden border border-border bg-muted">
                    <Image src={img} alt={`${project.title} screenshot ${i + 2}`} fill className="object-cover" />
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* ── FOOTER NAV ── */}
          <div data-page="fade" className="border-t border-border pt-10 flex items-center justify-between">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
              Semua Project
            </Link>
          </div>

        </div>
        </PageIntro>
      </main>
      <Footer />
    </>
  );
}
