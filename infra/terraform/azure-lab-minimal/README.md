# Azure Terraform Lab

Minimal Azure Infrastructure as Code lab for interview and portfolio use.

This lab provisions:

- one resource group
- one virtual network
- one subnet
- one network security group
- one public IP
- one small Ubuntu Linux VM

It is intentionally separate from the production `zachara.dev` deployment on Oracle Cloud. The goal is to demonstrate Terraform fundamentals on Azure with a clean provision and destroy lifecycle.

## Prerequisites

- Azure CLI logged in: `az account show`
- Terraform installed: `terraform version`
- RSA SSH public key available

Azure does not accept Ed25519 keys for this VM resource. Generate a dedicated RSA key if you do not already have one:

```bash
ssh-keygen -t rsa -b 4096 -f ~/.ssh/azure_lab_rsa -N ""
```

## Files

- `main.tf`: resources and provider setup
- `variables.tf`: configurable inputs
- `outputs.tf`: public IP and SSH command
- `terraform.tfvars.example`: example values

## Usage

```bash
cd infra/terraform/azure-lab-minimal
cp terraform.tfvars.example terraform.tfvars

terraform init
terraform plan -out azure-lab.tfplan
terraform apply azure-lab.tfplan
terraform output
```

Test the VM after apply:

```bash
terraform output -raw ssh_command
ssh $(terraform output -raw ssh_command | sed 's/^ssh //')
```

Destroy when finished:

```bash
terraform destroy
```

## Honest Scope

This lab proves basic Azure and Terraform workflow competence. It is not a production environment and does not run the portfolio site.
