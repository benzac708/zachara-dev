output "instance_id" {
  description = "Created EC2 instance ID"
  value       = aws_instance.this.id
}

output "public_ip" {
  description = "Public IP address of the EC2 instance"
  value       = aws_instance.this.public_ip
}

output "public_dns" {
  description = "Public DNS of the EC2 instance"
  value       = aws_instance.this.public_dns
}

output "ssh_command" {
  description = "SSH command for the EC2 instance"
  value       = "ssh -i ~/.ssh/azure_lab_rsa ec2-user@${aws_instance.this.public_ip}"
}
