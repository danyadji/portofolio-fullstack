"use client";

const navItems = [
  { label: "ABOUT", href: "#about" },
  { label: "SKILLS", href: "#skills" },
  { label: "WORK", href: "#projects" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "CONTACT", href: "#contact" },
];

interface NavLinksProps {
  onClose?: () => void;
  mobile?: boolean;
}

export default function NavLinks({ onClose, mobile = false }: NavLinksProps) {
  const handleClick = (href: string) => {
    if (onClose) onClose();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (mobile) {
    return (
      <nav className="flex flex-col gap-2">
        {navItems.map((item) => (
          <button
            key={item.href}
            onClick={() => handleClick(item.href)}
            className="text-left py-3 px-4 text-base font-medium text-foreground/70 hover:text-foreground hover:bg-muted rounded-lg transition-all duration-200"
          >
            {item.label}
          </button>
        ))}
      </nav>
    );
  }

  return (
    <nav className="hidden md:flex items-center gap-6 lg:gap-8">
      {navItems.map((item) => (
        <button
          key={item.href}
          onClick={() => handleClick(item.href)}
          className="text-[10px] font-bold uppercase tracking-[0.15em] text-foreground/60 hover:text-foreground transition-colors duration-200"
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
}
