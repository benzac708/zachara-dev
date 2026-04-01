import { Title, Meta, Link } from "@solidjs/meta";
import TechBadge from "~/components/TechBadge";

const FaviconLinks = () => (
  <>
    <link rel="icon" href="/favicon.ico" sizes="32x32" />
    <link rel="icon" href="/icon.svg" type="image/svg+xml" />
    <link rel="icon" href="/favicon-48x48.png" sizes="48x48" />
    <link rel="icon" href="/favicon-64x64.png" sizes="64x64" />
    <link rel="icon" href="/favicon-16x16.png" sizes="16x16" />
    <link rel="icon" href="/favicon-32x32.png" sizes="32x32" />
    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    <link rel="manifest" href="/site.webmanifest" />
  </>
);

const techs = [
  "Kubernetes", "Docker", "Terraform", "AWS", "GitHub Actions", "Helm",
  "Ubuntu", "Omarchy", "Linux", "Python", "Bash", "Traefik", "CloudFlare", "Prometheus", "Tailscale",
];

export default function Home() {
  return (
    <>
      <FaviconLinks />
      <Title>Bernard Zachara | Cloud/DevOps Engineer & Infrastructure Specialist</Title>
      <Meta
        name="description"
        content="Self-taught DevOps engineer with production-grade Kubernetes, Terraform, and multi-cloud infrastructure experience. Building reliable systems that scale."
      />
      <Meta name="viewport" content="width=device-width, initial-scale=1" />
      <Link rel="canonical" href="https://zachara.dev/" />
      <Meta property="og:title" content="Bernard Zachara | Cloud/DevOps Engineer & Infrastructure Specialist" />
      <Meta property="og:description" content="Self-taught DevOps engineer with production-grade Kubernetes, Terraform, and multi-cloud infrastructure experience." />
      <Meta property="og:url" content="https://zachara.dev/" />
      <Meta property="og:type" content="website" />
      <Meta property="og:image" content="https://zachara.dev/img/og-home.png" />
      <Meta property="og:site_name" content="zachara.dev" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Bernard Zachara | Cloud/DevOps Engineer" />
      <Meta name="twitter:description" content="Self-taught DevOps engineer with production-grade Kubernetes, Terraform, and multi-cloud infrastructure experience." />
      <script type="application/ld+json" innerHTML={JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "zachara.dev",
        "url": "https://zachara.dev",
        "author": {
          "@type": "Person",
          "name": "Ben Zachara",
          "url": "https://zachara.dev",
          "jobTitle": "DevOps Engineer",
          "sameAs": ["https://github.com/benzac708"],
          "knowsAbout": ["Kubernetes", "Docker", "Terraform", "AWS", "CI/CD", "Infrastructure as Code", "Cloud Architecture", "Linux", "Python", "Bash"]
        }
      })} />

      <main class="flex-1 flex items-center justify-center px-6">
        <div class="max-w-2xl text-center py-20">
          {/* Avatar */}
          <div class="mb-8 flex justify-center">
            <div class="w-32 h-32 rounded-full ring-4 ring-emerald-400/50 bg-slate-800 flex items-center justify-center text-4xl overflow-hidden">
              <img
                src="/img/avatar.webp"
                alt="Ben Zachara"
                class="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.parentElement!.innerHTML = "<span class='text-4xl'>BZ</span>";
                }}
              />
            </div>
          </div>

          <h1 class="text-4xl sm:text-5xl font-bold text-white mb-4">
            Hey, I'm <span class="text-emerald-400">Ben</span>.
          </h1>
          <p class="text-lg sm:text-xl text-slate-400 mb-2 max-w-lg mx-auto">
            Self-taught DevOps engineer pivoting to infrastructure. I build production-grade systems with Kubernetes, Terraform, and CI/CD pipelines.
          </p>
          <p class="text-lg sm:text-xl text-slate-400 mb-8">
            This website runs on the infrastructure I built. Proof, not promises.
          </p>

          {/* CTAs */}
          <div class="flex flex-wrap gap-4 justify-center mb-12">
            <a
              href="/resume-cloud-devops.pdf"
              download="resume-cloud-devops.pdf"
              class="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition flex items-center gap-2"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </a>
            <a
              href="/infrastructure"
              class="px-6 py-3 border border-slate-600 hover:border-emerald-400 text-slate-300 hover:text-white font-semibold rounded-lg transition"
            >
              View Infrastructure
            </a>
            <a
              href="/projects"
              class="px-6 py-3 border border-slate-600 hover:border-emerald-400 text-slate-300 hover:text-white font-semibold rounded-lg transition"
            >
              See Projects
            </a>
          </div>

          {/* Tech Badges */}
          <div class="flex flex-wrap gap-2 justify-center">
            {techs.map((tech) => (
              <TechBadge name={tech} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
