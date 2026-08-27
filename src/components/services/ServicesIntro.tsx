"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function ServicesIntro() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col justify-between h-full gap-8">
      <div>
        <span className="section-label">Services</span>
        <h2 className="text-4xl font-bold leading-tight text-foreground mb-4">
          A Comprehensive Look at What I Offer
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
          Dari development hingga maintenance — saya siap membantu mewujudkan ide digital kamu.
        </p>
      </div>

      <Button
        onClick={scrollToContact}
        className="group self-start bg-foreground text-background hover:bg-foreground/85 rounded-full px-8 py-3 font-semibold text-sm dark:bg-white dark:text-black dark:hover:bg-white/90 transition-all duration-300 hover:-translate-y-0.5"
      >
        Mulai Project
        <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      </Button>
    </div>
  );
}
