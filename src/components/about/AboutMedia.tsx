import Image from "next/image";
import { personalInfo } from "@/data/portfolio";

export default function AboutMedia() {
  return (
    <div className="relative rounded-3xl overflow-hidden aspect-video group cursor-pointer shadow-lg border border-border">
      {/* Image */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-violet-100 dark:from-indigo-950 dark:to-violet-950 flex items-center justify-center">
        <span className="text-6xl font-bold text-indigo-400/30">DP</span>
      </div>
      <Image
        src="/assets/about-photo.jpg"
        alt={`${personalInfo.name} at work`}
        fill
        className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = "none";
        }}
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Play button overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform duration-300">
          <div className="w-0 h-0 border-t-[7px] border-t-transparent border-l-[11px] border-l-white border-b-[7px] border-b-transparent ml-1" />
        </div>
      </div>
    </div>
  );
}
