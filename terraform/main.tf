resource "null_resource" "example" {
  provisioner "local-exec" {
    command = "cd ../app && docker build -t devops-poc ."
  }
}
