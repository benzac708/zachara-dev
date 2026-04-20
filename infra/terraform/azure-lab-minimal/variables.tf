variable "project_name" {
  description = "Short prefix for Azure resource names"
  type        = string
  default     = "zachara-azlab"
}

variable "resource_group_name" {
  description = "Resource group name for the lab"
  type        = string
  default     = "zachara-azure-lab-rg"
}

variable "location" {
  description = "Azure region"
  type        = string
  default     = "East US"
}

variable "vm_size" {
  description = "Azure VM size"
  type        = string
  default     = "Standard_B1s"
}

variable "admin_username" {
  description = "Linux admin username"
  type        = string
  default     = "labuser"
}

variable "ssh_public_key_path" {
  description = "Path to the RSA SSH public key used for VM access"
  type        = string
  default     = "~/.ssh/azure_lab_rsa.pub"
}

variable "allowed_ssh_cidr" {
  description = "CIDR allowed to SSH to the VM"
  type        = string
  default     = "0.0.0.0/0"
}

variable "vnet_cidr" {
  description = "CIDR for the virtual network"
  type        = string
  default     = "10.20.0.0/16"
}

variable "subnet_cidr" {
  description = "CIDR for the subnet"
  type        = string
  default     = "10.20.1.0/24"
}
