variable "environment" {
  type        = string
  description = "The environment DynamoDb will be created in, used in Tags"
  validation {
    condition     = var.environment == "dev" || var.environment == "test" || var.environment == "prod"
    error_message = "The environment must be specified and valid."
  }
}
