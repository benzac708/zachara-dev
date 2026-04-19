import { access, readFile } from "node:fs/promises";

const requiredFiles = [
  "package.json",
  "astro.config.mjs",
  "Dockerfile",
  "nginx.conf",
  "src/layouts/BaseLayout.astro",
  "src/pages/index.astro",
  "src/pages/projects.astro",
  "src/pages/infrastructure.astro",
  "src/pages/resume.astro",
  "src/pages/contact.astro",
];

const claimSensitiveFiles = [
  "src/pages/index.astro",
  "src/pages/projects.astro",
  "src/pages/infrastructure.astro",
  "src/pages/resume.astro",
  "src/components/Footer.astro",
  "public/llms.txt",
  "public/llms-full.txt",
];

const forbiddenTerms = [
  "ArgoCD",
  "CloudFlare",
  "GitLab CI",
  "Prometheus",
  "Grafana",
  "Loki",
  "Ansible",
  "SolidStart",
  "Vinxi",
];

for (const file of requiredFiles) {
  try {
    await access(new URL(`../${file}`, import.meta.url));
  } catch {
    console.error(`Missing required file: ${file}`);
    process.exit(1);
  }
}

for (const file of claimSensitiveFiles) {
  const content = await readFile(new URL(`../${file}`, import.meta.url), "utf8");
  for (const term of forbiddenTerms) {
    if (content.includes(term)) {
      console.error(`Found unsupported claim \"${term}\" in ${file}`);
      process.exit(1);
    }
  }
}

console.log("Smoke test passed: required files exist and public unsupported claims were not found.");
