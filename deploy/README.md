# Deploy

This directory contains the production deployment chart and release docs.

## Layout

- `helm/zachara-dev/`: application chart

## Release Flow

1. App changes land in `main`.
2. GitHub Actions builds and pushes the container image to GHCR.
3. The release step deploys the pushed image digest directly to K3s with Helm.
4. Rollback is a revert or redeploy of the previous application commit.

## Rules

- Production uses image digests, not mutable tags.
- Helm owns Kubernetes application manifests.
- GitHub Actions is the deploy entrypoint for this application.
- Manual `kubectl set image` is only for emergency recovery.
