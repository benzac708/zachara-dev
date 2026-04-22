# Production Release Flow

## Normal Flow

1. Merge application code to `main`.
2. GitHub Actions builds and pushes the image to GHCR.
3. GitHub Actions captures the pushed image digest.
4. GitHub Actions SSHes to the VPS and runs `kubectl set image` with that digest.
5. Verify site health and rollout status.

## Promotion Policy

This repo deploys directly from CI instead of committing release state back into git.

That keeps the path simple for a personal infrastructure project because:

- the application commit is the only production trigger
- the cluster still receives an immutable image digest
- there is no second "promotion commit" to reconcile

## Rollback

1. Revert the application commit you want to roll back.
2. Push the revert.
3. Let GitHub Actions rebuild and redeploy.
4. Verify health.

## Emergency Recovery

If GitHub Actions is unavailable, use `kubectl set image` with a pinned digest:

```bash
kubectl set image deployment/zachara-dev zachara-dev=ghcr.io/benzac708/zachara-dev@sha256:REPLACE_DIGEST -n zachara-dev-prod
kubectl rollout status deployment/zachara-dev -n zachara-dev-prod
```