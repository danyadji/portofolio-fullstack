"use client";

import BubbleMenu from "./BubbleMenu";
import NavLogo from "./NavLogo";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      <BubbleMenu
        logo={
          <div className="flex items-center px-4 md:px-5 py-2 md:py-2.5 rounded-full bg-card/90 dark:bg-[#151515]/90 backdrop-blur-xl border border-border/60 shadow-lg">
            <NavLogo />
          </div>
        }
        rightSlot={<DarkModeToggle />}
        useFixedPosition={true}
      />
    </header>
  );
}
