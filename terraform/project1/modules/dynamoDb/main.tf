resource "aws_dynamodb_table" "user" {
  name           = "tf-managed-user"
  billing_mode   = "PROVISIONED"
  read_capacity  = var.read_capacity
  write_capacity = var.write_capacity
  hash_key       = "UserId"

  attribute {
    name = "UserId"
    type = "S"
  }

  tags = {
    Name        = "user"
    Environment = var.environment
  }
}
