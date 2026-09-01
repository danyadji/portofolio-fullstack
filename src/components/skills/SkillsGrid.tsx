import { skills } from "@/data/portfolio";
import SkillBadge from "./SkillBadge";

const categories = [
  { label: "Frontend", data: skills.frontend, color: "text-foreground" },
  { label: "Backend", data: skills.backend, color: "text-foreground" },
  { label: "CMS", data: skills.cms, color: "text-foreground" },
  { label: "Tools", data: skills.tools, color: "text-foreground" },
];

export default function SkillsGrid() {
  return (
    <div className="space-y-8">
      {categories.map((cat) => (
        <div key={cat.label}>
          <span className={`text-xs font-bold uppercase tracking-widest ${cat.color} mb-3 block`}>
            {cat.label}
          </span>
          <div className="flex flex-wrap gap-2.5">
            {cat.data.map((skill) => (
              <SkillBadge key={skill.name} name={skill.name} icon={skill.icon} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
