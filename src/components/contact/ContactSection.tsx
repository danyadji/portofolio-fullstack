"use client";

import { useRef } from "react";
import { useSectionIntro, useParallax } from "@/hooks/useGsapReveal";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import { personalInfo } from "@/data/portfolio";
import { ArrowUpRight, Sparkles } from "lucide-react";

export default function ContactSection() {
  const bannerRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  // Banner CTA: badge → heading naik dari mask → tombol menyusul
  useSectionIntro({
    ref: bannerRef,
    maskSelector: ".mask-line-inner",
    fadeSelector: ".banner-fade",
    stagger: 0.1,
  });

  // Orbs gradasi bergeser halus mengikuti scroll
  useParallax({
    ref: bannerRef,
    selector: ".cta-orb",
    amount: 10,
  });

  // Grid bawah (info + form) reveal saat benar-benar terlihat
  useSectionIntro({
    ref: bottomRef,
    fadeSelector: ".contact-fade, .contact-row",
  });

  return (
    <section
      id="contact"
      className="bg-white dark:bg-[#0a0a0a]"
    >
      {/* CTA Banner */}
      <div ref={bannerRef} className="mx-4 md:mx-10 mb-0 bg-[#0a0a0a] dark:bg-[#111] text-white rounded-[40px] overflow-hidden relative">

        {/* Dot grid background */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Gradient orbs */}
        <div className="cta-orb absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] -mr-60 -mt-60 pointer-events-none will-change-transform" />
        <div className="cta-orb absolute bottom-0 left-1/3 w-80 h-80 bg-violet-600/15 rounded-full blur-[100px] pointer-events-none will-change-transform" />

        {/* Main content */}
        <div className="relative z-10 px-8 md:px-16 pt-14 pb-10">
          <div className="flex flex-col md:flex-row justify-between items-start gap-10">

            {/* Left */}
            <div className="flex-1">
              {/* Badge */}
              <div className="banner-fade inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/15 bg-white/5 text-xs font-semibold text-white/70 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Available for work · {personalInfo.location}
              </div>

              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.05] mb-6">
                <span className="mask-line">
                  <span className="mask-line-inner">Hire Me &amp;</span>
                </span>
                <span className="mask-line">
                  <span className="mask-line-inner text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
                    Let&apos;s Build.
                  </span>
                </span>
              </h2>

              <p className="banner-fade text-sm text-white/40 max-w-sm leading-relaxed">
                Terbuka untuk peluang full-time, magang lanjutan, atau proyek freelance.
                Siap mulai kapan pun.
              </p>
            </div>

            {/* Right: CTA card */}
            <div className="banner-fade flex flex-col gap-4 md:items-end">
              <a
                href={`mailto:${personalInfo.contact.email}`}
                className="group flex items-center gap-3 bg-white text-black font-bold text-sm px-7 py-4 rounded-full hover:bg-indigo-400 hover:text-white transition-all duration-300"
              >
                <Sparkles className="w-4 h-4" />
                Kirim Email
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </a>

              <a
                href={`https://wa.me/${personalInfo.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 border border-white/20 text-white/70 hover:text-white hover:border-white/40 font-semibold text-sm px-7 py-4 rounded-full transition-all duration-300"
              >
                WhatsApp
              </a>

              <p className="text-[11px] text-white/25 mt-1 md:text-right">
                {personalInfo.contact.email}
              </p>
            </div>

          </div>
        </div>

      </div>

      {/* Main contact section */}
      <div className="section-padding">
        <div ref={bottomRef} className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left: Info */}
            <div className="contact-fade">
              <ContactInfo />
            </div>

            {/* Right: Form */}
            <div className="contact-fade">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
