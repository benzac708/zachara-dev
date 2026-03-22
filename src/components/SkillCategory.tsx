interface SkillCategoryProps {
  title: string;
  skills: string[];
}

export default function SkillCategory(props: SkillCategoryProps) {
  return (
    <div class="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
      <h3 class="text-sm font-semibold text-emerald-400 mb-3 uppercase tracking-wider">
        {props.title}
      </h3>
      <div class="flex flex-wrap gap-2">
        {props.skills.map((skill) => (
          <span class="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
