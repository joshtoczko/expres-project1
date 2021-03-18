variable "environment" {
  type        = string
  description = "The environment DynamoDb will be created in, used in Tags"
  validation {
    condition     = var.environment == "dev" || var.environment == "test" || var.environment == "prod"
    error_message = "The environment must be specified and valid."
  }
}

variable "read_capacity" {
  type        = number
  default     = 1
  description = "The read capacity in units provisioned for DynamoDb instance"
}

variable "write_capacity" {
  type        = number
  default     = 1
  description = "The write capacity in units provisioned for DynamoDb instance"
}
