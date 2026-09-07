import { API_BASE_URL } from "../config/api";

function authHeaders() {
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("sya_admin_token")}`,
  };
}

export async function getAdminConfig() {
  const response = await fetch(`${API_BASE_URL}/api/admin/configuracion`, {
    headers: authHeaders(),
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.message || "No se pudo cargar la configuración");
  return data;
}

export async function updateAdminConfig(config) {
  const response = await fetch(`${API_BASE_URL}/api/admin/configuracion`, {
    method: "PUT",
    headers: authHeaders(),
    body: JSON.stringify(config),
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.message || "No se pudo guardar la configuración");
  return data;
}

export async function getPublicConfig() {
  const response = await fetch(`${API_BASE_URL}/api/configuracion`);
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.message || "No se pudo cargar la configuración pública");
  return data;
}

