resource "cloudflare_workers_kv_namespace" "auth" {
  account_id = var.account_id
  title      = "AUTH"
}

resource "cloudflare_workers_kv_namespace" "auth-preview" {
  account_id = var.account_id
  title      = "AUTH-PREVIEW"
}
