import { Title, Meta, Link } from "@solidjs/meta";
import TechBadge from "~/components/TechBadge";

const FaviconLinks = () => (
  <>
    <link rel="icon" href="/favicon.ico" sizes="32x32" />
    <link rel="icon" href="/icon.svg" type="image/svg+xml" />
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
      <Title>Bernard Zachara - DevOps Engineer</Title>
      <Meta
        name="description"
        content="DevOps engineer specializing in Kubernetes, CI/CD, Infrastructure as Code, and cloud-native architecture."
      />
      <Link rel="canonical" href="https://zachara.dev/" />
      <Meta property="og:title" content="Bernard Zachara - DevOps Engineer" />
      <Meta property="og:description" content="DevOps engineer specializing in Kubernetes, CI/CD, Infrastructure as Code, and cloud-native architecture." />
      <Meta property="og:url" content="https://zachara.dev/" />
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
            DevOps engineer building reliable infrastructure with Kubernetes, Terraform, and CI/CD pipelines.
          </p>
          <p class="text-lg sm:text-xl text-slate-400 mb-8">
            I automate everything.
          </p>

          {/* CTAs */}
          <div class="flex flex-wrap gap-4 justify-center mb-12">
            <a
              href="/resume"
              class="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition"
            >
              View Resume
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
