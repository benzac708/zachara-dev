# zachara.dev

Personal portfolio site demonstrating DevOps infrastructure skills.

## Application Stack

- **Framework:** Astro
- **Language:** TypeScript
- **Package Manager / Build Tool:** Bun
- **Styling:** Tailwind CSS v4

## Architecture

```
Browser → HTTPS → Traefik → K3s Service → nginx container → Static HTML
```

## Stack

- **Hosting:** K3s on Oracle Cloud VPS
- **Web Server:** nginx:1.27-alpine (non-root, gzip, caching, /healthz)
- **Container Registry:** GHCR (ghcr.io)
- **Orchestration:** K3s
- **Ingress:** Traefik
- **Network Security:** Tailscale, UFW, fail2ban
- **CI/CD:** GitHub Actions (build → push → SSH → kubectl deploy)

## Local Development

```bash
bun install
bun run dev
bun run test:smoke
bun run build
docker build -t zachara-dev .
docker run --rm -p 8080:8080 zachara-dev
# Visit http://localhost:8080
```

## Monorepo Layout

```text
.
├── deploy/          # Deployment docs
├── scripts/          # CI repair scripts
├── src/              # Astro source
└── .github/workflows/
```

## Deploy

The repo deploys directly from GitHub Actions to the VPS-hosted K3s cluster:

1. Push to `main` triggers GitHub Actions.
2. CI builds the Astro site and pushes an image to GHCR.
3. CI SSHes to the VPS and runs `kubectl set image` with the image digest.
4. CI waits for rollout to complete.
5. Rollback is a revert or redeploy of the previous application commit.

## Health Check

The container exposes `GET /healthz` and returns a simple JSON response.
