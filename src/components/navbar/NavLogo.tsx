import Link from "next/link";

export default function NavLogo() {
  return (
    <Link
      href="/"
      className="flex items-center group transition-colors"
      aria-label="Dany Prasetyo Adji Home"
    >
      <span className="font-bold text-base md:text-lg tracking-tight text-foreground group-hover:text-indigo-500 transition-colors">
        Dany Prasetyo Adji<span className="text-indigo-500">.</span>
      </span>
    </Link>
  );
}
