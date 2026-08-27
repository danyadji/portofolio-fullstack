"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { X, Menu } from "lucide-react";
import NavLinks from "./NavLinks";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuRef.current) return;

    if (isOpen) {
      gsap.fromTo(
        menuRef.current,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
      );
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-background/60 backdrop-blur-sm md:hidden"
        onClick={onClose}
      />

      {/* Menu panel */}
      <div
        ref={menuRef}
        className="fixed top-16 left-4 right-4 z-50 md:hidden bg-card border border-border rounded-2xl shadow-xl p-4"
      >
        <NavLinks onClose={onClose} mobile />
      </div>
    </>
  );
}
