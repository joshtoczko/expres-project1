resource "aws_dynamodb_table" "entity" {
  name           = "entity"
  billing_mode   = "PROVISIONED"
  read_capacity  = var.read_capacity
  write_capacity = var.write_capacity
  hash_key       = "EntityId"
  range_key      = "EntityType"

  attribute {
    name = "EntityId"
    type = "S"
  }

  attribute {
    name = "EntityType"
    type = "S"
  }

  tags = {
    Name        = "entity"
    Environment = var.environment
  }
}
