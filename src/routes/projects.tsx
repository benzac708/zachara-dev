import { Title, Meta, Link } from "@solidjs/meta";
import ProjectCard from "~/components/ProjectCard";

const projects = [
  {
    title: "zachara-dev",
    description:
      "This portfolio site - built with SolidJS/SolidStart, pre-rendered to static HTML at build time. CI/CD via GitHub Actions builds a Docker image and deploys to K3s with Helm. Served through CloudFlare and Traefik ingress.",
    href: "https://github.com/benzac708/zachara-dev",
    tech: ["SolidJS", "TailwindCSS", "Docker", "Helm", "GitHub Actions"],
  },
  {
    title: "vps-infrastructure",
    description:
      "Self-hosted Ubuntu Oracle Cloud VPS running K3s, serving multiple containerized applications. Managed from an Omarchy desktop workflow. Includes Traefik ingress with TLS, Prometheus and Grafana monitoring, automated backups, Tailscale mesh networking for secure CI/CD access, and scheduled maintenance with safe reboot automation.",
    href: "https://github.com/benzac708",
    tech: ["K3s", "Traefik", "Prometheus", "Grafana", "Tailscale", "Oracle Cloud"],
  },
  {
    title: "cloud-app",
    description:
      "Full-stack cloud-native application deployed on K3s with Helm charts, health checks, and Traefik ingress routing. Demonstrates end-to-end container orchestration workflow.",
    href: "https://github.com/benzac708/cloud-app",
    tech: ["Kubernetes", "Helm", "Docker", "Traefik", "Python"],
  },
  {
    title: "aws-lab",
    description:
      "AWS infrastructure lab environment for hands-on practice with cloud services. VPC networking, EC2 instances, S3 storage, IAM policies, and Terraform provisioning.",
    href: "https://github.com/benzac708/aws-lab",
    tech: ["AWS", "Terraform", "VPC", "IAM", "EC2"],
  },
  {
    title: "terraform-localstack",
    description:
      "Terraform modules tested against LocalStack for local AWS development. Provisions S3 buckets, DynamoDB tables, Lambda functions, and API Gateway endpoints without cloud costs.",
    href: "https://github.com/benzac708/terraform-localstack",
    tech: ["Terraform", "LocalStack", "AWS", "S3", "Lambda"],
  },
];

export default function Projects() {
  return (
    <>
      <link rel="icon" href="/favicon.ico" sizes="32x32" />
      <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      <link rel="icon" href="/favicon-48x48.png" sizes="48x48" />
      <link rel="icon" href="/favicon-64x64.png" sizes="64x64" />
      <link rel="icon" href="/favicon-16x16.png" sizes="16x16" />
      <link rel="icon" href="/favicon-32x32.png" sizes="32x32" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <Title>Projects - Bernard Zachara</Title>
      <Meta
        name="description"
        content="DevOps projects by Bernard Zachara - Kubernetes deployments, AWS labs, and Terraform infrastructure."
      />
      <Link rel="canonical" href="https://zachara.dev/projects" />
      <Meta property="og:title" content="Projects - Bernard Zachara" />
      <Meta property="og:description" content="DevOps projects by Bernard Zachara - Kubernetes deployments, AWS labs, and Terraform infrastructure." />
      <Meta property="og:url" content="https://zachara.dev/projects" />

      <main class="flex-1 max-w-4xl mx-auto px-6 py-12 w-full">
        <div class="mb-12 text-center">
          <h1 class="text-3xl sm:text-4xl font-bold text-white mb-2">Projects</h1>
          <p class="text-slate-400">
            Hands-on DevOps work - each repo is a working demonstration of infrastructure skills.
          </p>
        </div>

        <div class="grid gap-6">
          {projects.map((project) => (
            <ProjectCard
              title={project.title}
              description={project.description}
              href={project.href}
              tech={project.tech}
            />
          ))}
        </div>
      </main>
    </>
  );
}
