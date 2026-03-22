import type { JSX } from "solid-js";

interface TimelineItemProps {
  title: string;
  date: string;
  bullets: string[];
  active?: boolean;
}

export default function TimelineItem(props: TimelineItemProps) {
  return (
    <div class="relative pl-6 border-l-2 border-slate-700">
      <div
        class={`absolute -left-[9px] top-1 w-4 h-4 rounded-full border-4 border-slate-900 ${
          props.active ? "bg-emerald-400" : "bg-slate-600"
        }`}
      />
      <div class="mb-1">
        <h3 class="text-lg font-semibold text-white">{props.title}</h3>
        <p class={`text-sm ${props.active ? "text-emerald-400" : "text-slate-500"}`}>
          {props.date}
        </p>
      </div>
      <ul class="text-slate-400 text-sm space-y-1 mt-2">
        {props.bullets.map((bullet) => (
          <li>• {bullet}</li>
        ))}
      </ul>
    </div>
  );
}
