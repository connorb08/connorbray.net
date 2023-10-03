terraform {
  backend "s3" {}

  required_providers {
    cloudflare = {
      source  = "cloudflare/cloudflare"
      version = "~> 4.0"
    }

  }
}

provider "cloudflare" {
  api_token = var.cf_api_token
}

resource "cloudflare_r2_bucket" "content" {
  account_id = var.account_id
  name       = "content"
}

resource "cloudflare_r2_bucket" "content-dev" {
  account_id = var.account_id
  name       = "content-dev"
}
