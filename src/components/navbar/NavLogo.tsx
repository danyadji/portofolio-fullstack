import Link from "next/link";

export default function NavLogo() {
  return (
    <Link
      href="/"
      className="flex items-center group transition-colors"
      aria-label="Dany Prasetyo Adji Home"
    >
      <span className="font-bold text-base md:text-lg tracking-tight text-foreground group-hover:opacity-80 transition-opacity">
        Dany Prasetyo Adji<span>.</span>
      </span>
    </Link>
  );
}
