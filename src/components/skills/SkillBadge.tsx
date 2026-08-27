import { skillIconMap } from "./iconMap";

interface SkillBadgeProps {
  name: string;
  icon: string;
}

export default function SkillBadge({ name, icon }: SkillBadgeProps) {
  const Icon = skillIconMap[icon];

  return (
    <div className="skill-badge group flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-border bg-card hover:border-indigo-500/50 dark:hover:border-indigo-400/50 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-default">
      {Icon && (
        <Icon className="w-4 h-4 text-muted-foreground group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors duration-300 flex-shrink-0" />
      )}
      <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors duration-300 whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}
