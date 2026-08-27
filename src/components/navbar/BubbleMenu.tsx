"use client";

import type { CSSProperties, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export type MenuItem = {
  label: string;
  href: string;
  ariaLabel?: string;
  rotation?: number;
  hoverStyles?: {
    bgColor?: string;
    textColor?: string;
  };
};

export type BubbleMenuProps = {
  logo?: ReactNode | string;
  onMenuClick?: (open: boolean) => void;
  className?: string;
  style?: CSSProperties;
  menuAriaLabel?: string;
  useFixedPosition?: boolean;
  items?: MenuItem[];
  animationEase?: string;
  animationDuration?: number;
  staggerDelay?: number;
  rightSlot?: ReactNode;
};

const DEFAULT_ITEMS: MenuItem[] = [
  {
    label: "Home",
    href: "/#",
    ariaLabel: "Home",
    rotation: -6,
    hoverStyles: { bgColor: "#6366f1", textColor: "#ffffff" },
  },
  {
    label: "About",
    href: "/#about",
    ariaLabel: "About Me",
    rotation: 6,
    hoverStyles: { bgColor: "#10b981", textColor: "#ffffff" },
  },
  {
    label: "Skills",
    href: "/#skills",
    ariaLabel: "Skills & Tech",
    rotation: -4,
    hoverStyles: { bgColor: "#f59e0b", textColor: "#ffffff" },
  },
  {
    label: "Projects",
    href: "/#projects",
    ariaLabel: "Featured Projects",
    rotation: 6,
    hoverStyles: { bgColor: "#8b5cf6", textColor: "#ffffff" },
  },
  {
    label: "Experience",
    href: "/#experience",
    ariaLabel: "Work Experience",
    rotation: -5,
    hoverStyles: { bgColor: "#0284c7", textColor: "#ffffff" },
  },
  {
    label: "Contact",
    href: "/#contact",
    ariaLabel: "Contact Me",
    rotation: 5,
    hoverStyles: { bgColor: "#f43f5e", textColor: "#ffffff" },
  },
];

export default function BubbleMenu({
  logo,
  onMenuClick,
  className,
  style,
  menuAriaLabel = "Toggle navigation menu",
  useFixedPosition = true,
  items = DEFAULT_ITEMS,
  animationEase = "back.out(1.5)",
  animationDuration = 0.5,
  staggerDelay = 0.08,
  rightSlot,
}: BubbleMenuProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  const overlayRef = useRef<HTMLDivElement>(null);
  const bubblesRef = useRef<HTMLAnchorElement[]>([]);
  const labelRefs = useRef<HTMLSpanElement[]>([]);

  const menuItems = items?.length ? items : DEFAULT_ITEMS;

  const handleToggle = () => {
    const nextState = !isMenuOpen;
    if (nextState) setShowOverlay(true);
    setIsMenuOpen(nextState);
    onMenuClick?.(nextState);
  };

  const handleItemClick = (href: string) => {
    setIsMenuOpen(false);
    onMenuClick?.(false);

    if (href.startsWith("/#") || href.startsWith("#")) {
      const targetId = href.replace(/^\/?#/, "");
      if (!targetId) {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
        onMenuClick?.(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen, onMenuClick]);

  useEffect(() => {
    const overlay = overlayRef.current;
    const bubbles = bubblesRef.current.filter(Boolean);
    const labels = labelRefs.current.filter(Boolean);
    if (!overlay || !bubbles.length) return;

    if (isMenuOpen) {
      gsap.set(overlay, { display: "flex", autoAlpha: 1 });
      gsap.killTweensOf([...bubbles, ...labels]);
      gsap.set(bubbles, { scale: 0, transformOrigin: "50% 50%" });
      gsap.set(labels, { y: 24, autoAlpha: 0 });

      bubbles.forEach((bubble, i) => {
        const delay = i * staggerDelay + gsap.utils.random(-0.03, 0.03);
        const tl = gsap.timeline({ delay });
        tl.to(bubble, {
          scale: 1,
          duration: animationDuration,
          ease: animationEase,
        });
        if (labels[i]) {
          tl.to(
            labels[i],
            {
              y: 0,
              autoAlpha: 1,
              duration: animationDuration,
              ease: "power3.out",
            },
            "-=" + animationDuration * 0.9
          );
        }
      });
    } else if (showOverlay) {
      gsap.killTweensOf([...bubbles, ...labels]);
      gsap.to(labels, {
        y: 24,
        autoAlpha: 0,
        duration: 0.2,
        ease: "power3.in",
      });
      gsap.to(bubbles, {
        scale: 0,
        duration: 0.2,
        ease: "power3.in",
        onComplete: () => {
          gsap.set(overlay, { display: "none", autoAlpha: 0 });
          setShowOverlay(false);
        },
      });
    }
  }, [isMenuOpen, showOverlay, animationEase, animationDuration, staggerDelay]);

  useEffect(() => {
    const handleResize = () => {
      if (isMenuOpen) {
        const bubbles = bubblesRef.current.filter(Boolean);
        const isDesktop = window.innerWidth >= 900;
        bubbles.forEach((bubble, i) => {
          const item = menuItems[i];
          if (bubble && item) {
            const rotation = isDesktop ? (item.rotation ?? 0) : 0;
            gsap.set(bubble, { rotation });
          }
        });
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen, menuItems]);

  return (
    <>
      <style>{`
        .bubble-menu .menu-line {
          transition: transform 0.3s ease, opacity 0.3s ease;
          transform-origin: center;
        }
        .bubble-menu-items .pill-list .pill-col:nth-child(4):nth-last-child(2) {
          margin-left: calc(100% / 6);
        }
        .bubble-menu-items .pill-list .pill-col:nth-child(4):last-child {
          margin-left: calc(100% / 3);
        }
        @media (min-width: 900px) {
          .bubble-menu-items .pill-link {
            transform: rotate(var(--item-rot));
          }
          .bubble-menu-items .pill-link:hover {
            transform: rotate(var(--item-rot)) scale(1.06);
            background: var(--hover-bg) !important;
            color: var(--hover-color) !important;
          }
          .bubble-menu-items .pill-link:active {
            transform: rotate(var(--item-rot)) scale(.94);
          }
        }
        @media (max-width: 899px) {
          .bubble-menu-items {
            padding-top: 100px;
            align-items: flex-start;
          }
          .bubble-menu-items .pill-list {
            row-gap: 14px;
          }
          .bubble-menu-items .pill-list .pill-col {
            flex: 0 0 100% !important;
            margin-left: 0 !important;
            overflow: visible;
          }
          .bubble-menu-items .pill-link {
            font-size: clamp(1.2rem, 3.5vw, 2.5rem);
            padding: clamp(0.75rem, 2vw, 1.5rem) 0;
            min-height: 64px !important;
          }
          .bubble-menu-items .pill-link:hover {
            transform: scale(1.04);
            background: var(--hover-bg);
            color: var(--hover-color);
          }
          .bubble-menu-items .pill-link:active {
            transform: scale(.96);
          }
        }
      `}</style>

      {/* Navbar Container */}
      <nav
        className={[
          "bubble-menu",
          useFixedPosition ? "fixed" : "absolute",
          "left-0 right-0 top-5 md:top-6",
          "flex items-center justify-between",
          "gap-3 px-4 md:px-10",
          "pointer-events-none",
          "z-[1001]",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        style={style}
        aria-label="Main navigation"
      >
        {/* Logo Left */}
        {logo ? (
          <div className="pointer-events-auto flex items-center">
            {typeof logo === "string" ? (
              <img
                src={logo}
                alt="Logo"
                className="max-h-8 max-w-full object-contain block"
              />
            ) : (
              logo
            )}
          </div>
        ) : (
          <div />
        )}

        {/* Right side controls: Bubble Menu Button + DarkMode Toggle */}
        <div className="flex items-center gap-3 pointer-events-auto">
          {/* Menu Toggle Bubble */}
          <button
            type="button"
            className={[
              "bubble toggle-bubble menu-btn",
              isMenuOpen ? "open" : "",
              "inline-flex flex-col items-center justify-center",
              "rounded-full",
              "bg-card/90 dark:bg-[#151515]/90 backdrop-blur-xl",
              "border border-border/60 shadow-lg hover:shadow-xl",
              "w-11 h-11 md:w-13 md:h-13",
              "cursor-pointer p-0",
              "transition-transform duration-200 active:scale-95",
              "will-change-transform",
            ].join(" ")}
            onClick={handleToggle}
            aria-label={menuAriaLabel}
            aria-pressed={isMenuOpen}
          >
            <span
              className="menu-line block mx-auto rounded-[2px] bg-foreground"
              style={{
                width: 22,
                height: 2,
                transform: isMenuOpen ? "translateY(4px) rotate(45deg)" : "none",
              }}
            />
            <span
              className="menu-line short block mx-auto rounded-[2px] bg-foreground"
              style={{
                marginTop: "6px",
                width: 22,
                height: 2,
                transform: isMenuOpen ? "translateY(-4px) rotate(-45deg)" : "none",
              }}
            />
          </button>

          {/* Right Slot (Dark mode toggle button) */}
          {rightSlot && (
            <div className="flex items-center justify-center">
              {rightSlot}
            </div>
          )}
        </div>
      </nav>

      {/* Fullscreen Overlay Bubble Menu Items */}
      {showOverlay && (
        <div
          ref={overlayRef}
          className={[
            "bubble-menu-items",
            useFixedPosition ? "fixed" : "absolute",
            "inset-0",
            "bg-background/80 dark:bg-black/85 backdrop-blur-2xl",
            "flex items-center justify-center",
            "z-[1000]",
          ].join(" ")}
          onClick={(e) => {
            if (e.target === overlayRef.current) {
              setIsMenuOpen(false);
              onMenuClick?.(false);
            }
          }}
          aria-hidden={!isMenuOpen}
        >
          <ul
            className={[
              "pill-list",
              "list-none m-0 px-6",
              "w-full max-w-[1200px] mx-auto",
              "flex flex-wrap",
              "gap-x-4 gap-y-4 md:gap-y-6",
              "pointer-events-auto",
            ].join(" ")}
            role="menu"
            aria-label="Menu links"
          >
            {menuItems.map((item, idx) => (
              <li
                key={idx}
                role="none"
                className={[
                  "pill-col",
                  "flex justify-center items-stretch",
                  "[flex:0_0_calc(100%/3-1rem)]",
                  "box-border",
                ].join(" ")}
              >
                <a
                  role="menuitem"
                  href={item.href}
                  aria-label={item.ariaLabel || item.label}
                  onClick={(e) => {
                    e.preventDefault();
                    handleItemClick(item.href);
                  }}
                  className={[
                    "pill-link",
                    "w-full",
                    "rounded-[999px]",
                    "no-underline",
                    "bg-card dark:bg-[#161616]",
                    "text-foreground",
                    "border border-border/70 dark:border-white/10",
                    "shadow-[0_8px_30px_rgba(0,0,0,0.12)]",
                    "flex items-center justify-center",
                    "relative cursor-pointer",
                    "transition-[background,color,transform] duration-300 ease-out",
                    "box-border",
                    "whitespace-nowrap overflow-hidden",
                  ].join(" ")}
                  style={
                    {
                      ["--item-rot"]: `${item.rotation ?? 0}deg`,
                      ["--hover-bg"]: item.hoverStyles?.bgColor || "#6366f1",
                      ["--hover-color"]:
                        item.hoverStyles?.textColor || "#ffffff",
                      minHeight: "clamp(80px, 12vw, 130px)",
                      padding: "clamp(1.2rem, 2.5vw, 3rem) 0",
                      fontSize: "clamp(1.5rem, 3.5vw, 3rem)",
                      fontWeight: 700,
                      lineHeight: 1,
                      willChange: "transform",
                    } as CSSProperties
                  }
                  ref={(el) => {
                    if (el) bubblesRef.current[idx] = el;
                  }}
                >
                  <span
                    className="pill-label inline-block tracking-tight"
                    style={{
                      willChange: "transform, opacity",
                      lineHeight: 1.2,
                    }}
                    ref={(el) => {
                      if (el) labelRefs.current[idx] = el;
                    }}
                  >
                    {item.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
