# Deploy

This directory is the git source of truth for production deployment state.

## Layout

- `helm/zachara-dev/`: application chart
- `argocd/`: ArgoCD application manifests

## Release Flow

1. App changes land in `main`.
2. GitHub Actions builds and pushes the container image to GHCR.
3. The release step updates `deploy/helm/zachara-dev/values-prod.yaml` with the pushed image digest.
4. ArgoCD watches this repo and syncs the cluster to match git.
5. Rollback is a git revert of the digest change.

## Rules

- Production uses image digests, not mutable tags.
- Helm owns Kubernetes application manifests.
- ArgoCD watches git, not the image registry.
- Manual `kubectl set image` is only for emergency recovery.
