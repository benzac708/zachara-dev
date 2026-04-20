# AWS Terraform Lab

Minimal AWS Infrastructure as Code lab for interview and portfolio use.

This lab provisions:

- one EC2 key pair from a local RSA public key
- one security group for SSH
- one small EC2 instance in the default VPC

It is intentionally separate from the production `zachara.dev` deployment on Oracle Cloud. The goal is to demonstrate Terraform fundamentals on AWS with a clean provision and destroy lifecycle.

## Prerequisites

- AWS CLI authenticated: `aws sts get-caller-identity`
- Terraform installed: `terraform version`
- RSA SSH public key available

## Usage

```bash
cd infra/terraform/aws-lab-minimal
cp terraform.tfvars.example terraform.tfvars

terraform init
terraform plan -out aws-lab.tfplan
terraform apply aws-lab.tfplan
terraform output
```

Test the instance after apply:

```bash
terraform output -raw ssh_command
ssh -i ~/.ssh/azure_lab_rsa ec2-user@$(terraform output -raw public_ip)
```

Destroy when finished:

```bash
terraform destroy
```

## Honest Scope

This lab proves basic AWS and Terraform workflow competence. It is not a production environment and does not run the portfolio site.
