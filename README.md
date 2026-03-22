# zachara.dev

Personal portfolio site demonstrating DevOps infrastructure skills.

## Architecture

```
Browser → HTTPS → CloudFlare → HTTP → VPS:80 → Traefik → K8s Service → nginx Pod → Static HTML
```

## Stack

- **Hosting:** K3s on Oracle Cloud VPS
- **Web Server:** nginx:1.27-alpine (non-root, gzip, caching, /healthz)
- **Container Registry:** GHCR (ghcr.io)
- **Orchestration:** Kubernetes (K3s) + Helm
- **Ingress:** Traefik
- **TLS:** CloudFlare Flexible
- **CI/CD:** GitHub Actions (build → push → deploy)

## Local Development

```bash
docker build -t zachara-dev .
docker run -p 8080:8080 zachara-dev
# Visit http://localhost:8080
```

## Deploy

Push to `main` triggers GitHub Actions:
1. Builds Docker image
2. Pushes to ghcr.io/benzac708/zachara-dev
3. Deploys to K3s via Helm
