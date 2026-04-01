import { Title, Meta, Link } from "@solidjs/meta";
import TechBadge from "~/components/TechBadge";

const infrastructureHighlights = [
  {
    title: "Kubernetes Cluster",
    description: "Production k3s cluster running 12+ namespaces with 30+ deployments",
    icon: "kubernetes",
    metrics: ["12 Namespaces", "30+ Deployments", "99.9% Uptime"],
  },
  {
    title: "Multi-Cloud Infrastructure",
    description: "Terraform modules for AWS and Azure with reusable components",
    icon: "terraform",
    metrics: ["AWS", "Azure", "Infrastructure as Code"],
  },
  {
    title: "GitOps Workflow",
    description: "ArgoCD manages continuous deployment with Git as source of truth",
    icon: "argocd",
    metrics: ["GitHub Actions", "GHCR", "Helm Charts"],
  },
  {
    title: "Observability Stack",
    description: "Full monitoring with Prometheus metrics, Grafana dashboards, and ELK logging",
    icon: "prometheus",
    metrics: ["Prometheus", "Grafana", "ELK Stack"],
  },
];

const liveServices = [
  {
    name: "zachara.dev",
    url: "https://zachara.dev",
    description: "This portfolio site",
    status: "live",
  },
  {
    name: "grafana.zachara.dev",
    url: "https://grafana.zachara.dev",
    description: "Monitoring dashboards",
    status: "live",
  },
  {
    name: "mcp-dns.zachara.dev",
    url: "https://mcp-dns.zachara.dev",
    description: "DNS MCP server",
    status: "live",
  },
];

const ArchitectureDiagram = () => (
  <svg viewBox="0 0 800 400" class="w-full h-auto max-w-3xl mx-auto">
    {/* Background */}
    <rect width="800" height="400" fill="#0f172a" rx="8"/>
    
    {/* Title */}
    <text x="400" y="30" text-anchor="middle" fill="#34d399" font-size="18" font-weight="bold">
      Infrastructure Architecture
    </text>
    
    {/* VPS Layer */}
    <rect x="50" y="60" width="140" height="80" fill="#1e293b" stroke="#34d399" stroke-width="2" rx="6"/>
    <text x="120" y="85" text-anchor="middle" fill="#fff" font-size="14" font-weight="bold">Oracle Cloud VPS</text>
    <text x="120" y="105" text-anchor="middle" fill="#94a3b8" font-size="11">Ubuntu 22.04 LTS</text>
    <text x="120" y="120" text-anchor="middle" fill="#94a3b8" font-size="11">ARM64 • 4GB RAM</text>
    
    {/* Arrow VPS → k3s */}
    <line x1="190" y1="100" x2="250" y2="100" stroke="#34d399" stroke-width="2" marker-end="url(#arrowhead)"/>
    
    {/* k3s Layer */}
    <rect x="250" y="60" width="140" height="80" fill="#1e293b" stroke="#34d399" stroke-width="2" rx="6"/>
    <text x="320" y="85" text-anchor="middle" fill="#fff" font-size="14" font-weight="bold">k3s Cluster</text>
    <text x="320" y="105" text-anchor="middle" fill="#94a3b8" font-size="11">Lightweight K8s</text>
    <text x="320" y="120" text-anchor="middle" fill="#94a3b8" font-size="11">Traefik Ingress</text>
    
    {/* Arrow k3s → Docker */}
    <line x1="390" y1="100" x2="450" y2="100" stroke="#34d399" stroke-width="2" marker-end="url(#arrowhead)"/>
    
    {/* Docker Layer */}
    <rect x="450" y="60" width="140" height="80" fill="#1e293b" stroke="#34d399" stroke-width="2" rx="6"/>
    <text x="520" y="85" text-anchor="middle" fill="#fff" font-size="14" font-weight="bold">Docker Runtime</text>
    <text x="520" y="105" text-anchor="middle" fill="#94a3b8" font-size="11">Containerd</text>
    <text x="520" y="120" text-anchor="middle" fill="#94a3b8" font-size="11">Multi-stage Builds</text>
    
    {/* Arrow Docker → Apps */}
    <line x1="590" y1="100" x2="650" y2="100" stroke="#34d399" stroke-width="2" marker-end="url(#arrowhead)"/>
    
    {/* Apps Layer */}
    <rect x="650" y="60" width="120" height="80" fill="#1e293b" stroke="#34d399" stroke-width="2" rx="6"/>
    <text x="710" y="85" text-anchor="middle" fill="#fff" font-size="14" font-weight="bold">Applications</text>
    <text x="710" y="105" text-anchor="middle" fill="#94a3b8" font-size="11">30+ Deployments</text>
    <text x="710" y="120" text-anchor="middle" fill="#94a3b8" font-size="11">12 Namespaces</text>
    
    {/* CI/CD Pipeline Box */}
    <rect x="200" y="180" width="400" height="90" fill="#1e293b" stroke="#64748b" stroke-width="1" stroke-dasharray="5,5" rx="6"/>
    <text x="400" y="205" text-anchor="middle" fill="#94a3b8" font-size="12" font-weight="bold">CI/CD Pipeline</text>
    
    {/* CI/CD Steps */}
    <rect x="220" y="220" width="80" height="40" fill="#0f172a" stroke="#34d399" stroke-width="1" rx="4"/>
    <text x="260" y="240" text-anchor="middle" fill="#fff" font-size="10">GitHub Actions</text>
    
    <text x="310" y="242" text-anchor="middle" fill="#64748b" font-size="16">→</text>
    
    <rect x="330" y="220" width="60" height="40" fill="#0f172a" stroke="#34d399" stroke-width="1" rx="4"/>
    <text x="360" y="240" text-anchor="middle" fill="#fff" font-size="10">GHCR</text>
    
    <text x="400" y="242" text-anchor="middle" fill="#64748b" font-size="16">→</text>
    
    <rect x="420" y="220" width="60" height="40" fill="#0f172a" stroke="#34d399" stroke-width="1" rx="4"/>
    <text x="450" y="240" text-anchor="middle" fill="#fff" font-size="10">Helm</text>
    
    <text x="490" y="242" text-anchor="middle" fill="#64748b" font-size="16">→</text>
    
    <rect x="510" y="220" width="70" height="40" fill="#0f172a" stroke="#34d399" stroke-width="1" rx="4"/>
    <text x="545" y="240" text-anchor="middle" fill="#fff" font-size="10">ArgoCD</text>
    
    {/* Connection lines */}
    <line x1="320" y1="140" x2="320" y2="180" stroke="#64748b" stroke-width="1" stroke-dasharray="3,3"/>
    <line x1="545" y1="220" x2="545" y2="200" stroke="#64748b" stroke-width="1"/>
    <line x1="545" y1="200" x2="320" y2="200" stroke="#64748b" stroke-width="1"/>
    <line x1="320" y1="200" x2="320" y2="180" stroke="#64748b" stroke-width="1"/>
    
    {/* CloudFlare & Monitoring */}
    <rect x="50" y="300" width="160" height="70" fill="#1e293b" stroke="#f59e0b" stroke-width="2" rx="6"/>
    <text x="130" y="325" text-anchor="middle" fill="#fff" font-size="13" font-weight="bold">CloudFlare</text>
    <text x="130" y="345" text-anchor="middle" fill="#94a3b8" font-size="11">DNS • CDN • TLS</text>
    <text x="130" y="360" text-anchor="middle" fill="#94a3b8" font-size="11">DDoS Protection</text>
    
    <rect x="240" y="300" width="160" height="70" fill="#1e293b" stroke="#3b82f6" stroke-width="2" rx="6"/>
    <text x="320" y="325" text-anchor="middle" fill="#fff" font-size="13" font-weight="bold">Observability</text>
    <text x="320" y="345" text-anchor="middle" fill="#94a3b8" font-size="11">Prometheus • Grafana</text>
    <text x="320" y="360" text-anchor="middle" fill="#94a3b8" font-size="11">ELK Stack</text>
    
    <rect x="430" y="300" width="160" height="70" fill="#1e293b" stroke="#8b5cf6" stroke-width="2" rx="6"/>
    <text x="510" y="325" text-anchor="middle" fill="#fff" font-size="13" font-weight="bold">IaC & GitOps</text>
    <text x="510" y="345" text-anchor="middle" fill="#94a3b8" font-size="11">Terraform • Ansible</text>
    <text x="510" y="360" text-anchor="middle" fill="#94a3b8" font-size="11">ArgoCD • Helm</text>
    
    <rect x="620" y="300" width="130" height="70" fill="#1e293b" stroke="#10b981" stroke-width="2" rx="6"/>
    <text x="685" y="325" text-anchor="middle" fill="#fff" font-size="13" font-weight="bold">Security</text>
    <text x="685" y="345" text-anchor="middle" fill="#94a3b8" font-size="11">Tailscale Mesh</text>
    <text x="685" y="360" text-anchor="middle" fill="#94a3b8" font-size="11">CloudFlare Access</text>
    
    {/* Arrow marker definition */}
    <defs>
      <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
        <polygon points="0 0, 10 3, 0 6" fill="#34d399"/>
      </marker>
    </defs>
  </svg>
);

export default function Infrastructure() {
  return (
    <>
      {/* Favicon Links */}
      <link rel="icon" href="/favicon.ico" sizes="32x32" />
      <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      <link rel="icon" href="/favicon-48x48.png" sizes="48x48" />
      <link rel="icon" href="/favicon-64x64.png" sizes="64x64" />
      <link rel="icon" href="/favicon-16x16.png" sizes="16x16" />
      <link rel="icon" href="/favicon-32x32.png" sizes="32x32" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* SEO Meta Tags */}
      <Title>Cloud & DevOps Infrastructure | Bernard Zachara</Title>
      <Meta name="description" content="Production-grade Kubernetes cluster with k3s, Terraform multi-cloud infrastructure, GitOps with ArgoCD, and full observability stack." />
      <Link rel="canonical" href="https://zachara.dev/infrastructure" />
      <Meta property="og:title" content="Cloud & DevOps Infrastructure | Bernard Zachara" />
      <Meta property="og:description" content="Production-grade Kubernetes cluster with k3s, Terraform multi-cloud infrastructure, GitOps with ArgoCD, and full observability stack." />
      <Meta property="og:url" content="https://zachara.dev/infrastructure" />
      <Meta property="og:type" content="website" />
      <Meta property="og:image" content="https://zachara.dev/img/og-infrastructure.png" />
      
      <script type="application/ld+json" innerHTML={JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Cloud & DevOps Infrastructure",
        "description": "Production-grade Kubernetes cluster with k3s, Terraform multi-cloud infrastructure, GitOps with ArgoCD, and full observability stack.",
        "url": "https://zachara.dev/infrastructure",
        "author": {
          "@type": "Person",
          "name": "Bernard Zachara",
          "jobTitle": "DevOps Engineer"
        }
      })} />

      <main class="flex-1 max-w-5xl mx-auto px-6 py-12 w-full">
        {/* Header */}
        <div class="mb-12 text-center">
          <h1 class="text-3xl sm:text-4xl font-bold text-white mb-4">
            Cloud & <span class="text-emerald-400">DevOps</span> Infrastructure
          </h1>
          <p class="text-slate-400 max-w-2xl mx-auto text-lg">
            Production-grade infrastructure serving as living proof of DevOps capabilities. 
            This website runs on the exact infrastructure described below.
          </p>
        </div>

        {/* Architecture Diagram */}
        <section class="mb-16">
          <h2 class="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <span class="w-3 h-0.5 bg-emerald-400 inline-block" />
            Architecture Overview
          </h2>
          <div class="bg-slate-800/50 border border-slate-700 rounded-lg p-6 overflow-x-auto">
            <ArchitectureDiagram />
          </div>
          <p class="text-slate-500 text-sm mt-4 text-center">
            VPS → k3s → Docker → Applications with CI/CD pipeline and observability stack
          </p>
        </section>

        {/* Infrastructure Highlights */}
        <section class="mb-16">
          <h2 class="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <span class="w-3 h-0.5 bg-emerald-400 inline-block" />
            Infrastructure Highlights
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            {infrastructureHighlights.map((item) => (
              <div class="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-emerald-400/50 transition">
                <div class="flex items-start gap-4 mb-4">
                  <div class="w-12 h-12 rounded-lg bg-emerald-400/10 flex items-center justify-center flex-shrink-0">
                    <img 
                      src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${item.icon}/${item.icon}-original.svg`}
                      alt={item.title}
                      class="w-8 h-8"
                      onError={(e) => {
                        e.currentTarget.src = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${item.icon}/${item.icon}-plain.svg`;
                      }}
                    />
                  </div>
                  <div>
                    <h3 class="text-lg font-bold text-white mb-1">{item.title}</h3>
                    <p class="text-slate-400 text-sm">{item.description}</p>
                  </div>
                </div>
                <div class="flex flex-wrap gap-2">
                  {item.metrics.map((metric) => (
                    <span class="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs font-mono rounded">
                      {metric}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Live Services */}
        <section class="mb-16">
          <h2 class="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <span class="w-3 h-0.5 bg-emerald-400 inline-block" />
            Live Infrastructure Services
          </h2>
          <div class="space-y-4">
            {liveServices.map((service) => (
              <a
                href={service.url}
                target="_blank"
                rel="noopener"
                class="flex items-center gap-4 p-4 bg-slate-800/50 border border-slate-700 rounded-lg hover:border-emerald-400/50 transition group"
              >
                <div class="flex items-center gap-2 flex-shrink-0">
                  <span class={`w-2 h-2 rounded-full ${service.status === 'live' ? 'bg-emerald-400 animate-pulse' : 'bg-slate-500'}`} />
                  <span class="text-xs font-mono text-slate-500 uppercase">{service.status}</span>
                </div>
                <div class="flex-1 min-w-0">
                  <h3 class="font-semibold text-white group-hover:text-emerald-400 transition truncate">
                    {service.name}
                  </h3>
                  <p class="text-slate-400 text-sm">{service.description}</p>
                </div>
                <svg class="w-5 h-5 text-slate-500 group-hover:text-emerald-400 transition flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            ))}
          </div>
        </section>

        {/* GitHub Repository */}
        <section class="mb-16">
          <h2 class="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <span class="w-3 h-0.5 bg-emerald-400 inline-block" />
            Infrastructure as Code Repository
          </h2>
          <a
            href="https://github.com/benzac708/cloud-devops-portfolio"
            target="_blank"
            rel="noopener"
            class="flex items-start gap-4 p-6 bg-slate-800/50 border border-slate-700 rounded-lg hover:border-emerald-400/50 transition group"
          >
            <div class="w-12 h-12 rounded-lg bg-slate-700/50 flex items-center justify-center flex-shrink-0">
              <svg class="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </div>
            <div class="flex-1 min-w-0">
              <h3 class="text-lg font-bold text-white group-hover:text-emerald-400 transition mb-2">
                cloud-devops-portfolio
              </h3>
              <p class="text-slate-400 text-sm mb-4">
                Complete infrastructure-as-code repository containing Terraform modules, 
                Kubernetes manifests, Helm charts, CI/CD workflows, and documentation for 
                the entire DevOps stack.
              </p>
              <div class="flex flex-wrap gap-2">
                <TechBadge name="Terraform" />
                <TechBadge name="Kubernetes" />
                <TechBadge name="Helm" />
                <TechBadge name="GitHub Actions" />
                <TechBadge name="AWS" />
                <TechBadge name="Azure" />
              </div>
            </div>
            <svg class="w-5 h-5 text-slate-500 group-hover:text-emerald-400 transition flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </section>

        {/* Infrastructure as Code */}
        <section class="mb-12">
          <h2 class="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <span class="w-3 h-0.5 bg-emerald-400 inline-block" />
            Infrastructure as Code
          </h2>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Terraform", icon: "terraform" },
              { name: "Kubernetes", icon: "kubernetes" },
              { name: "Docker", icon: "docker" },
              { name: "Helm", icon: "helm" },
              { name: "Ansible", icon: "ansible" },
              { name: "GitHub Actions", icon: "github" },
              { name: "Prometheus", icon: "prometheus" },
              { name: "Grafana", icon: "grafana" },
            ].map((tech) => (
              <div class="flex items-center gap-3 p-3 bg-slate-800/30 border border-slate-700/50 rounded-lg">
                <img 
                  src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon}/${tech.icon}-original.svg`}
                  alt={tech.name}
                  class="w-6 h-6"
                  onError={(e) => {
                    e.currentTarget.src = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon}/${tech.icon}-plain.svg`;
                  }}
                />
                <span class="text-slate-300 text-sm font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
