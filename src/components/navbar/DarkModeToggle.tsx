"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function DarkModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-11 h-11 md:w-13 md:h-13 rounded-full bg-card/90 dark:bg-[#151515]/90 border border-border/60 shadow-lg flex items-center justify-center">
        <span className="w-4 h-4" />
      </div>
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="w-11 h-11 md:w-13 md:h-13 rounded-full bg-card/90 dark:bg-[#151515]/90 backdrop-blur-xl border border-border/60 shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 active:scale-95 cursor-pointer text-foreground"
    >
      <span
        className="transition-all duration-300 flex items-center justify-center"
        style={{ transform: isDark ? "rotate(0deg)" : "rotate(180deg)" }}
      >
        {isDark ? (
          <Sun className="w-4 h-4 md:w-5 md:h-5 text-amber-400" />
        ) : (
          <Moon className="w-4 h-4 md:w-5 md:h-5 text-foreground" />
        )}
      </span>
    </button>
  );
}
