# Production Release Flow

This monorepo uses GitOps release state under `deploy/`.

## Normal Flow

1. Merge application code to `main`.
2. GitHub Actions builds and pushes the image to GHCR.
3. GitHub Actions captures the pushed image digest.
4. GitHub Actions updates `deploy/helm/zachara-dev/values-prod.yaml` with that digest.
5. GitHub Actions commits the digest change back to `main`.
6. ArgoCD syncs the cluster.
7. Verify site health and rollout status.

## Current Promotion Policy

This repo currently uses a direct commit back to `main` for digest promotion.

That is acceptable for a solo production setup because:

- application code is already reviewed before merge
- the follow-up commit only changes the immutable image digest
- ArgoCD deploys only what is recorded in git

If you later want a stricter approval boundary, switch this step to an automated pull request instead of a direct commit.

## Example Digest Update

```yaml
image:
  repository: ghcr.io/benzac708/zachara-dev
  digest: sha256:REPLACE_WITH_RELEASE_DIGEST
```

## Rollback

1. Revert the commit that changed `values-prod.yaml`.
2. Push the revert.
3. Let ArgoCD sync the previous digest.
4. Verify health.

## Emergency Recovery

If ArgoCD is unavailable, use a one-off manual `kubectl set image` with a pinned digest. After recovery, update git so ArgoCD and cluster state match again.
