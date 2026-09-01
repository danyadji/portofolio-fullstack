import { Code2, Globe, Zap, Server, Palette, Settings, LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Code2, Globe, Zap, Server, Palette, Settings,
};

interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
  dark: boolean;
}

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = iconMap[service.icon];

  if (service.dark) {
    return (
      <div className="relative bg-foreground text-background rounded-3xl p-8 flex flex-col justify-between h-[260px] overflow-hidden group">
        {/* Content */}
        <div className="z-10 relative">
          {Icon && <Icon className="w-6 h-6 mb-4 opacity-80" />}
          <h4 className="text-lg font-bold mb-3">{service.title}</h4>
          <p className="text-sm opacity-60 leading-relaxed">{service.description}</p>
        </div>

        {/* Decorative circles */}
        <div className="absolute -bottom-10 -right-10 w-40 h-40 border-2 border-white/10 rounded-full" />
        <div className="absolute -bottom-20 -right-20 w-60 h-60 border border-white/5 rounded-full" />

        {/* Arrow */}
        <div className="z-10 relative flex justify-end mt-4">
          <span className="text-2xl opacity-60 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 inline-block">
            ↗
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-3xl border border-border p-8 flex flex-col justify-between h-[260px] group hover:shadow-xl hover:border-foreground/30 hover:-translate-y-1 transition-all duration-300">
      <div>
        {Icon && (
          <Icon className="w-6 h-6 mb-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300" />
        )}
        <h4 className="text-lg font-bold text-foreground mb-3">{service.title}</h4>
        <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
      </div>
      <div className="flex justify-end">
        <span className="text-xl text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 inline-block">
          →
        </span>
      </div>
    </div>
  );
}
