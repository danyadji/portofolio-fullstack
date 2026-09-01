import FooterLinks from "./FooterLinks";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#000000] text-white pt-14 md:pt-24 pb-20 md:pb-32 relative z-10">
      <div className="container-custom">
        {/* Brand & Contact row */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
          {/* Logo + Tagline */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-bold text-2xl tracking-tight text-white">
                Dany Prasetyo Adji<span>.</span>
              </span>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed max-w-[240px]">
              Fullstack Web Developer - Membangun pengalaman web yang modern, cepat, dan elegan.
            </p>
          </div>

          {/* Quick info */}
          <div className="grid grid-cols-2 gap-x-16 gap-y-4 text-xs">
            <div>
              <h5 className="text-neutral-500 uppercase tracking-widest font-bold mb-2">Email</h5>
              <a
                href="mailto:danyadji90@gmail.com"
                className="text-neutral-300 hover:text-white transition-colors"
              >
                danyadji90@gmail.com
              </a>
            </div>
            <div>
              <h5 className="text-neutral-500 uppercase tracking-widest font-bold mb-2">Location</h5>
              <p className="text-neutral-300">Yogyakarta, Indonesia</p>
            </div>
          </div>
        </div>

        {/* Links + social + copyright */}
        <FooterLinks />

        <p className="text-center text-[11px] text-neutral-600 mt-8">
          © {currentYear} Dany Prasetyo Adji. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
