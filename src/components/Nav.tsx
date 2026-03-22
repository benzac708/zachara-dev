import { A, useLocation } from "@solidjs/router";

export default function Nav() {
  const location = useLocation();

  const isActive = (path: string) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  return (
    <nav class="border-b border-slate-800 bg-slate-900/80 backdrop-blur sticky top-0 z-50">
      <div class="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between gap-4 overflow-x-auto">
        <A href="/" class="flex items-center gap-2 shrink-0">
          <img src="/icon.svg" alt="zachara.dev" class="w-7 h-7" />
          <span class="text-lg font-bold text-white tracking-tight hidden sm:inline">zachara<span class="text-emerald-400">.dev</span></span>
        </A>
        <div class="flex gap-4 sm:gap-6 text-sm font-medium shrink-0">
          <A
            href="/"
            class={isActive("/") && location.pathname === "/" ? "text-emerald-400" : "text-slate-400 hover:text-white transition"}
          >
            Home
          </A>
          <A
            href="/resume"
            class={isActive("/resume") ? "text-emerald-400" : "text-slate-400 hover:text-white transition"}
          >
            Resume
          </A>
          <A
            href="/projects"
            class={isActive("/projects") ? "text-emerald-400" : "text-slate-400 hover:text-white transition"}
          >
            Projects
          </A>
          <A
            href="/contact"
            class={isActive("/contact") ? "text-emerald-400" : "text-slate-400 hover:text-white transition"}
          >
            Contact
          </A>
          <a
            href="https://grafana.zachara.dev"
            target="_blank"
            rel="noopener"
            class="text-slate-400 hover:text-white transition"
          >
            Monitoring
          </a>
        </div>
      </div>
    </nav>
  );
}
