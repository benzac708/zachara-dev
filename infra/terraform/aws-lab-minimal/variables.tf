variable "project_name" {
  description = "Short prefix for AWS resource names"
  type        = string
  default     = "zachara-awslab"
}

variable "aws_region" {
  description = "AWS region"
  type        = string
  default     = "us-east-1"
}

variable "instance_type" {
  description = "AWS EC2 instance type"
  type        = string
  default     = "t4g.nano"
}

variable "ssh_public_key_path" {
  description = "Path to the RSA SSH public key used for EC2 access"
  type        = string
  default     = "~/.ssh/azure_lab_rsa.pub"
}

variable "allowed_ssh_cidr" {
  description = "CIDR allowed to SSH to the instance"
  type        = string
  default     = "0.0.0.0/0"
}
