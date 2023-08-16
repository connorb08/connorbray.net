output "auth_namespace_id" {
  value = cloudflare_workers_kv_namespace.auth.id
}

output "auth_preview_namespace_id" {
  value = cloudflare_workers_kv_namespace.auth-preview.id
}
