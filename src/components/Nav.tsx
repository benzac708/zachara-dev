import { A, useLocation } from "@solidjs/router";

export default function Nav() {
  const location = useLocation();

  const isActive = (path: string) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  const isHomeActive = () => location.pathname === "/";

  return (
    <nav class="border-b border-slate-800 bg-slate-900/80 backdrop-blur sticky top-0 z-50">
      <div class="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
        <A href="/" class="flex items-center gap-2 shrink-0">
          <img src="/icon.svg" alt="zachara.dev" class="w-10 h-10" />
          <span class="text-lg font-bold text-white tracking-tight hidden sm:inline">zachara<span class="text-emerald-400">.dev</span></span>
        </A>
        <div class="flex items-center gap-2 sm:gap-4">
          <div class="flex gap-4 sm:gap-6 text-sm font-medium shrink-0">
            <A
              href="/"
              class={isHomeActive() ? "text-emerald-400" : "text-slate-400 hover:text-white transition"}
            >
              Home
            </A>
            <A
              href="/infrastructure"
              class={isActive("/infrastructure") ? "text-emerald-400" : "text-slate-400 hover:text-white transition"}
            >
              <span class="hidden sm:inline">Infrastructure</span>
              <span class="sm:hidden">Infra</span>
            </A>
            <A
              href="/projects"
              class={isActive("/projects") ? "text-emerald-400" : "text-slate-400 hover:text-white transition"}
            >
              Projects
            </A>
            <A
              href="/resume"
              class={isActive("/resume") ? "text-emerald-400" : "text-slate-400 hover:text-white transition"}
            >
              Resume
            </A>
            <A
              href="/contact"
              class={isActive("/contact") ? "text-emerald-400" : "text-slate-400 hover:text-white transition"}
            >
              Contact
            </A>
          </div>
          <a
            href="/resume-cloud-devops.pdf"
            download="resume-cloud-devops.pdf"
            class="hidden md:inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 text-xs font-medium rounded-lg border border-emerald-500/30 transition"
          >
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
