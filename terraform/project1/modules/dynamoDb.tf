resource "aws_dynamodb_table" "entity" {
  name           = "tf-managed-entity"
  billing_mode   = "PROVISIONED"
  read_capacity  = "${var.read_capacity}"
  write_capacity = "${var.write_capacity}"
  hash_key       = "EntityId"
#   range_key      = "GameTitle"

  attribute {
    name = "EntityId"
    type = "S"
  }

  attribute {
    name = "User"
    type = "M"
  }

  attribute {
    name = "IsActive"
    type = "BOOL"
  }

#   ttl {
#     attribute_name = "TimeToExist"
#     enabled        = false
#   }

#   global_secondary_index {
#     name               = "GameTitleIndex"
#     hash_key           = "GameTitle"
#     range_key          = "TopScore"
#     write_capacity     = 10
#     read_capacity      = 10
#     projection_type    = "INCLUDE"
#     non_key_attributes = ["UserId"]
#   }

  tags = {
    Name        = "entity"
    Environment = "${var.environment}"
  }
}