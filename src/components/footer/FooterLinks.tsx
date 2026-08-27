"use client";

import Link from "next/link";
import { personalInfo } from "@/data/portfolio";
import { GitBranch, Mail, MessageCircle, ExternalLink } from "lucide-react";


import { LucideIcon } from "lucide-react";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

type SocialItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};

const socials: SocialItem[] = [
  { icon: GitBranch, href: personalInfo.contact.github, label: "GitHub" },
  { icon: ExternalLink, href: personalInfo.contact.linkedin, label: "LinkedIn" },
  { icon: Mail, href: `mailto:${personalInfo.contact.email}`, label: "Email" },
  { icon: MessageCircle, href: `https://wa.me/${personalInfo.contact.whatsapp}`, label: "WhatsApp" },
];

export default function FooterLinks() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/10">
      {/* Nav links */}
      <div className="flex flex-wrap gap-6 justify-center md:justify-start">
        {footerLinks.map((link) => (
          <button
            key={link.href}
            onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" })}
            className="text-xs font-semibold uppercase tracking-widest text-white/40 hover:text-white transition-colors duration-200"
          >
            {link.label}
          </button>
        ))}
      </div>

      {/* Social links */}
      <div className="flex gap-3">
        {socials.map(({ icon: Icon, href, label }) => (
          <Link
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 hover:bg-white/15 hover:border-white/20 transition-all duration-200"
          >
            <Icon className="w-3.5 h-3.5 text-white/60 hover:text-white transition-colors" />
          </Link>
        ))}
      </div>
    </div>
  );
}
