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
- **CI/CD:** GitHub Actions (build → push)

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

## Deploy

Push to `main` triggers GitHub Actions:
1. Builds the Astro site
2. Pushes to ghcr.io/benzac708/zachara-dev
3. Makes the latest image available for deployment on the VPS

## AI-assisted CI

This repo includes a one-shot CI repair wrapper at `scripts/ai-repair-ci.sh`.

- If tests or build fail, CI sends the error log to OpenCode once.
- The model is configurable with `CI_AI_MODEL` and defaults to `opencode/big-picle`.
- The step reruns the failed command one time after the AI edit.

## Health Check

The container exposes `GET /healthz` and returns a simple JSON response.
