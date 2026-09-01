import { Mail, MessageCircle, MapPin, GitBranch, ExternalLink, Download } from "lucide-react";

import { personalInfo } from "@/data/portfolio";

const contactItems = [
  {
    type: "lucide" as const,
    icon: Mail,
    label: "Email",
    value: personalInfo.contact.email,
    href: `mailto:${personalInfo.contact.email}`,
  },
  {
    type: "lucide" as const,
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat via WhatsApp",
    href: `https://wa.me/${personalInfo.contact.whatsapp}`,
  },
  {
    type: "lucide" as const,
    icon: ExternalLink,
    label: "LinkedIn",
    value: "Dany Prasetyo",
    href: personalInfo.contact.linkedin,
  },
  {
    type: "lucide" as const,
    icon: GitBranch,
    label: "GitHub",
    value: "github.com/dany-prasetyo",
    href: personalInfo.contact.github,
  },
  {
    type: "lucide" as const,
    icon: MapPin,
    label: "Location",
    value: personalInfo.location,
    href: null,
  },
];

export default function ContactInfo() {
  return (
    <div>
      {/* Open to Work Badge */}
      <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 text-green-600 dark:text-green-400 px-4 py-1.5 rounded-full text-xs font-semibold mb-6">
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        Open to Work
      </div>

      <span className="section-label block">Contact</span>
      <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-4">
        Mari <span className="text-gradient">Terhubung</span>
      </h2>
      <p className="text-sm text-muted-foreground leading-relaxed mb-8 max-w-sm">
        Saya sedang terbuka untuk peluang kerja baru sebagai Web Developer. Jangan ragu untuk menghubungi saya!
      </p>

      {/* Download CV Button */}
      <a
        href="/assets/cv-dany.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2.5 bg-foreground text-background hover:opacity-80 transition-opacity px-6 py-3 rounded-full text-sm font-semibold mb-10"
      >
        <Download className="w-4 h-4" />
        Download CV
      </a>

      <div className="space-y-4">
        {contactItems.map((item) => (
          <div key={item.label} className="contact-row flex items-center gap-4 group">
            <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center flex-shrink-0 group-hover:bg-foreground/10 transition-colors duration-300">
              <item.icon className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground font-medium">{item.label}</p>
              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-foreground hover:opacity-80 transition-opacity duration-200"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-sm font-medium text-foreground">{item.value}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
