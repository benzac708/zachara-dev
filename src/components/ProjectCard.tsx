interface ProjectCardProps {
  title: string;
  description: string;
  href: string;
  tech: string[];
  featured?: boolean;
  live?: boolean;
}

export default function ProjectCard(props: ProjectCardProps) {
  return (
    <div class={`bg-slate-800/50 border ${props.featured ? 'border-emerald-400/50 ring-1 ring-emerald-400/20' : 'border-slate-700'} rounded-lg p-6 hover:border-emerald-400/50 transition group relative`}>
      {props.featured && (
        <div class="absolute -top-3 left-4">
          <span class="px-2 py-1 bg-emerald-500 text-white text-xs font-bold rounded">
            FEATURED
          </span>
        </div>
      )}
      <div class="flex items-start justify-between mb-3">
        <h2 class={`text-xl font-bold ${props.featured ? 'text-emerald-400' : 'text-white group-hover:text-emerald-400'} transition`}>
          {props.title}
        </h2>
        <div class="flex items-center gap-2">
          {props.live && (
            <span class="flex items-center gap-1 text-xs text-emerald-400">
              <span class="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span>
              Live
            </span>
          )}
          <a
            href={props.href}
            target="_blank"
            rel="noopener"
            class="text-slate-500 hover:text-emerald-400 transition text-sm flex items-center gap-1"
          >
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub
          </a>
        </div>
      </div>
      <p class="text-slate-400 text-sm mb-4">{props.description}</p>
      <div class="flex flex-wrap gap-2">
        {props.tech.map((t) => (
          <span class="px-2 py-1 bg-emerald-400/10 text-emerald-400 text-xs font-mono rounded border border-emerald-400/20">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
