export default function Footer() {
  return (
    <footer class="border-t border-slate-800 py-6 text-center text-sm text-slate-500">
      <p>
        Deployed on <span class="text-emerald-400/70">K3s</span> · Served through{" "}
        <span class="text-emerald-400/70">CloudFlare</span> · CI/CD via{" "}
        <span class="text-emerald-400/70">GitHub Actions</span>
      </p>
      <p class="mt-1">
        <a
          href="https://github.com/benzac708/zachara-dev"
          class="hover:text-emerald-400 transition"
        >
          View Source
        </a>
      </p>
    </footer>
  );
}
