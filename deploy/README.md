# Deploy

This directory contains Kubernetes manifests for the production deployment.

## Layout

```
deploy/k8s/
├── namespace.yaml     # zachara-dev-prod namespace
├── deployment.yaml   # App deployment with probes
├── service.yaml       # ClusterIP service
├── ingress.yaml       # Traefik ingress
└── kustomization.yaml # Kustomize bundle
```

## Apply Manifests (full redeploy)

```bash
kubectl apply -k deploy/k8s/
```

## Update Image Only (common case)

```bash
kubectl set image deployment/zachara-dev zachara-dev=ghcr.io/benzac708/zachara-dev@sha256:DIGEST -n zachara-dev-prod
kubectl rollout status deployment/zachara-dev -n zachara-dev-prod --timeout=5m
```

## CI/CD

GitHub Actions handles this automatically on push to main:
1. Build and push image to GHCR
2. SSH to VPS
3. Update image with kubectl
4. Wait for rollout

## Rules

- Production uses image digests, not mutable tags
- Manifests in git are the source of truth
- CI manages image tag updates via kubectl set image