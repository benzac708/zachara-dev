interface TechBadgeProps {
  name: string;
}

export default function TechBadge(props: TechBadgeProps) {
  return (
    <span class="inline-flex items-center justify-center px-3 py-1 bg-slate-800 text-slate-300 text-xs font-mono rounded-full border border-slate-700">
      {props.name}
    </span>
  );
}
