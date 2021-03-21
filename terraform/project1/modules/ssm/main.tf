resource "aws_ssm_parameter" "jwt-secret" {
  name  = "${var.environment}-express-project1-jwt-secret"
  type  = "SecureString"
  value = "REDACTED"
}
