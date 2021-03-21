resource "aws_dynamodb_table" "entity" {
  name           = "entity"
  billing_mode   = "PROVISIONED"
  read_capacity  = var.read_capacity
  write_capacity = var.write_capacity
  hash_key       = "entityId"
  range_key      = "entityType"

  attribute {
    name = "entityId"
    type = "S"
  }

  attribute {
    name = "entityType"
    type = "S"
  }

  tags = {
    Name        = "entity"
    Environment = var.environment
  }
}
