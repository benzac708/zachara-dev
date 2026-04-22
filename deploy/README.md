# Deploy

This directory contains the production deployment docs.

## Layout

- `kubectl apply` manifests owned by the cluster (not tracked in git manifests)
- Kubernetes resources managed directly via `kubectl`

## Release Flow

1. App changes land in `main`.
2. GitHub Actions builds and pushes the container image to GHCR.
3. GitHub Actions SSHes to the VPS and runs `kubectl set image` with the image digest.
4. GitHub Actions waits for rollout to complete.
5. Rollback is a revert or redeploy of the previous application commit.

## Rules

- Production uses image digests, not mutable tags.
- GitHub Actions is the deploy entrypoint.
- Manual `kubectl set image` for emergency recovery.