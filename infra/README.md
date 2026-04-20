# Infrastructure

This directory is for infrastructure code and bootstrap plans that are worth recreating on a fresh environment.

## Scope

Use Terraform here for:

- Oracle VPS provisioning and baseline network resources
- AWS lab environments for learning and interview demos
- Azure lab environments for learning and interview demos
- DNS or cloud primitives that benefit from reproducible creation

Do not use Terraform here for normal application releases. Helm and ArgoCD own application deployment state.

## Layout

- `terraform/oracle-vps/`: Oracle bootstrap plan and notes
- `terraform/aws-lab/`: AWS practice environment plan and notes
- `terraform/aws-lab-minimal/`: minimal AWS EC2 lab with Terraform
- `terraform/azure-lab-minimal/`: minimal Azure VM lab with Terraform
- `terraform/azure-lab/`: larger Azure practice environment plan and notes
