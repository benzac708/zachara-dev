import { Title, Meta, Link } from "@solidjs/meta";
import SkillCategory from "~/components/SkillCategory";
import TimelineItem from "~/components/TimelineItem";

const skills = [
  { title: "Containers & Orchestration", skills: ["Kubernetes", "Docker", "K3s", "Helm", "containerd"] },
  { title: "Infrastructure as Code", skills: ["Terraform", "Ansible"] },
  { title: "CI/CD", skills: ["GitHub Actions", "GitLab CI", "ArgoCD"] },
  { title: "Cloud Platforms", skills: ["AWS", "Oracle Cloud", "CloudFlare"] },
  { title: "Monitoring & Observability", skills: ["Prometheus", "Grafana", "Loki"] },
  { title: "Scripting & Languages", skills: ["Bash", "Python", "TypeScript", "Go", "YAML"] },
];

export default function Resume() {
  return (
    <>
      <link rel="icon" href="/favicon.ico" sizes="32x32" />
      <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      <link rel="icon" href="/favicon-16x16.png" sizes="16x16" />
      <link rel="icon" href="/favicon-32x32.png" sizes="32x32" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <Title>Resume - Bernard Zachara</Title>
      <Meta
        name="description"
        content="Bernard Zachara's resume - DevOps engineer with expertise in Kubernetes, Terraform, CI/CD, and cloud infrastructure."
      />
      <Link rel="canonical" href="https://zachara.dev/resume" />
      <Meta property="og:title" content="Resume - Bernard Zachara" />
      <Meta property="og:description" content="Bernard Zachara's resume - DevOps engineer with expertise in Kubernetes, Terraform, CI/CD, and cloud infrastructure." />
      <Meta property="og:url" content="https://zachara.dev/resume" />
      <script type="application/ld+json" innerHTML={JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Bernard Zachara",
        "url": "https://zachara.dev",
        "jobTitle": "DevOps Engineer",
        "sameAs": ["https://github.com/benzac708"],
        "knowsAbout": ["Kubernetes", "Docker", "K3s", "Helm", "containerd", "Terraform", "Ansible", "GitHub Actions", "GitLab CI", "ArgoCD", "AWS", "Oracle Cloud", "CloudFlare", "Prometheus", "Grafana", "Loki", "Bash", "Python", "TypeScript", "Go"]
      })} />

      <main class="flex-1 max-w-4xl mx-auto px-6 py-12 w-full">
        {/* Header */}
        <div class="mb-12 text-center">
          <h1 class="text-3xl sm:text-4xl font-bold text-white mb-2">Bernard Zachara</h1>
          <p class="text-lg text-emerald-400 mb-4">DevOps Engineer</p>
          <p class="text-slate-400 mb-6">
            Infrastructure-focused engineer with hands-on experience in container orchestration,
            infrastructure as code, CI/CD pipelines, and cloud-native architecture. Passionate about
            automation, reliability, and building systems that scale.
          </p>
          <a
            href="https://d34u1oflqrjm2f.cloudfront.net/resume.pdf"
            target="_blank"
            class="inline-flex items-center gap-2 px-5 py-2.5 border border-slate-600 hover:border-emerald-400 text-slate-300 hover:text-white font-medium rounded-lg transition text-sm"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l6 6v8a2 2 0 01-2 2z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M17 6v-2M14 2v6h6" />
            </svg>
            View PDF Resume
          </a>
        </div>

        {/* Skills Grid */}
        <section class="mb-12">
          <h2 class="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <span class="w-3 h-0.5 bg-emerald-400 inline-block" />
            Skills
          </h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((cat) => (
              <SkillCategory title={cat.title} skills={cat.skills} />
            ))}
          </div>
        </section>

        {/* Experience */}
        <section class="mb-12">
          <h2 class="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <span class="w-3 h-0.5 bg-emerald-400 inline-block" />
            Experience
          </h2>
          <div class="space-y-8">
            <TimelineItem
              title="DevOps Engineer - Self-Directed Projects"
              date="2024 - Present"
              active
              bullets={[
                "Built and maintained K3s cluster on Ubuntu-based Oracle Cloud VPS with Traefik ingress and CloudFlare TLS",
                "Operated day-to-day infrastructure workflows from an Omarchy Linux desktop environment",
                "Designed CI/CD pipelines with GitHub Actions for container builds, GHCR publishing, and Helm deploys",
                "Implemented infrastructure as code with Terraform for AWS and LocalStack environments",
                "Deployed monitoring stack (Prometheus, Grafana) for cluster observability",
                "Containerized applications with Docker using multi-stage builds and security best practices",
              ]}
            />
          </div>
        </section>

        {/* Education */}
        <section class="mb-12">
          <h2 class="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <span class="w-3 h-0.5 bg-emerald-400 inline-block" />
            Education & Certifications
          </h2>
          <div class="space-y-4">
            <div class="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
              <div class="flex items-start justify-between gap-4">
                <h3 class="font-semibold text-white">University of Information Technology and Management in Rzeszów</h3>
                <span class="text-sm text-slate-400 whitespace-nowrap">Expected March 2028</span>
              </div>
            </div>
            <div class="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
              <h3 class="font-semibold text-white">Continuous Self-Directed Learning</h3>
              <p class="text-sm text-slate-400 mt-1">
                Cloud architecture, Kubernetes administration, infrastructure as code, and DevOps
                practices through hands-on projects, labs, and industry documentation.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
