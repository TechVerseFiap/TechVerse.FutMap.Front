export async function apiGet(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Erro GET: ${res.status}`);
  return res.json();
}

export async function apiPost(url, data) {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  if (!res.ok) throw new Error(`Erro POST: ${res.status}`);
  return res.json();
}

export async function apiDelete(url) {
  const res = await fetch(url, { method: "DELETE" });
  if (!res.ok) throw new Error(`Erro DELETE: ${res.status}`);
  return true;
}
