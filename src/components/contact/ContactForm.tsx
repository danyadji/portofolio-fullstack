"use client";

import { Briefcase, GraduationCap, Zap, MapPin, Home } from "lucide-react";

export default function ContactForm() {
  return (
    <div className="bg-card border border-border rounded-3xl p-6 md:p-8 shadow-sm">
      <h3 className="text-xl font-bold text-foreground mb-6">Ringkasan Ketersediaan</h3>

      <div className="space-y-5">
        {/* Posisi */}
        <div className="flex items-center justify-between pb-3 border-b border-border/50">
          <div className="flex items-center gap-3">
            <Briefcase className="w-4 h-4 text-indigo-500" />
            <span className="text-sm text-muted-foreground font-medium">Posisi</span>
          </div>
          <span className="text-sm font-semibold text-foreground text-right">
            Web / Full Stack Developer
          </span>
        </div>

        {/* Status */}
        <div className="flex items-center justify-between pb-3 border-b border-border/50">
          <div className="flex items-center gap-3">
            <GraduationCap className="w-4 h-4 text-violet-500" />
            <span className="text-sm text-muted-foreground font-medium">Status</span>
          </div>
          <span className="text-sm font-semibold text-foreground text-right">
            Fresh Graduate (SI, UTY)
          </span>
        </div>

        {/* Mulai Bekerja */}
        <div className="flex items-center justify-between pb-3 border-b border-border/50">
          <div className="flex items-center gap-3">
            <Zap className="w-4 h-4 text-green-500" />
            <span className="text-sm text-muted-foreground font-medium">Ketersediaan</span>
          </div>
          <span className="text-sm font-semibold text-green-600 dark:text-green-400 text-right">
            Segera (Immediate)
          </span>
        </div>

        {/* Penempatan */}
        <div className="flex items-center justify-between pb-3 border-b border-border/50">
          <div className="flex items-center gap-3">
            <MapPin className="w-4 h-4 text-rose-500" />
            <span className="text-sm text-muted-foreground font-medium">Penempatan</span>
          </div>
          <span className="text-sm font-semibold text-foreground text-right">
            Remote / Hybrid / WFO
          </span>
        </div>

        {/* Lokasi */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Home className="w-4 h-4 text-amber-500" />
            <span className="text-sm text-muted-foreground font-medium">Domisili</span>
          </div>
          <span className="text-sm font-semibold text-foreground text-right">
            Yogyakarta & Jepara
          </span>
        </div>
      </div>

    </div>
  );
}

