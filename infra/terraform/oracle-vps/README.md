# Oracle VPS Terraform Plan

This directory is intentionally scoped before code is added.

## Target Outcome

Provision the minimum Oracle resources needed to stand up a replacement VPS safely:

- virtual cloud network and subnets if needed
- security list or NSG rules for HTTP and HTTPS only
- compute instance
- reserved or stable public IP if desired
- cloud-init user data for first boot

## What Happens After Terraform

Terraform should create the machine and network baseline.

Bootstrap should then install:

- Tailscale
- Docker or container runtime tools if needed
- K3s
- UFW and fail2ban baseline
- cert-manager, ArgoCD, and app sync path

## Implementation Rule

Do not add provider code until the exact Oracle tenancy inputs, network layout, and bootstrap method are decided. The goal is reproducible infrastructure, not fake completeness.
