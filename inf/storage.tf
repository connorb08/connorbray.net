resource "cloudflare_r2_bucket" "images-bucket" {
  account_id = var.account_id
  name       = "images"
}

resource "cloudflare_r2_bucket" "images-bucket-dev" {
  account_id = var.account_id
  name       = "images-dev"
}
