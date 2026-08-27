"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function HeroCTA() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="hero-cta flex flex-wrap gap-3 mt-8">
      {/* Primary */}
      <Button
        onClick={() => scrollTo("#projects")}
        className="group bg-foreground text-background hover:bg-foreground/85 rounded-full px-7 py-2.5 font-semibold text-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 dark:bg-white dark:text-black dark:hover:bg-white/90"
      >
        Lihat Project
        <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      </Button>

      {/* Outline */}
      <Button
        onClick={() => scrollTo("#contact")}
        variant="outline"
        className="group rounded-full px-7 py-2.5 font-semibold text-sm border-border hover:border-indigo-500 hover:text-indigo-500 dark:hover:border-indigo-400 dark:hover:text-indigo-400 hover:-translate-y-0.5 transition-all duration-300"
      >
        <MessageCircle className="mr-2 w-4 h-4" />
        Hubungi Saya
      </Button>
    </div>
  );
}
