terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.27"
    }
  }
}

provider "aws" {
  profile = "default"
  region  = "us-east-1"
}

module "dynamoDb" {
  source         = "./modules/dynamoDb"
  environment    = var.environment
  read_capacity  = var.read_capacity
  write_capacity = var.write_capacity
}
