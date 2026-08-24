const API_BASE_URL = "http://localhost:5000/api";

export async function searchSkill(query) {
  const response = await fetch(
    `${API_BASE_URL}/search?q=${encodeURIComponent(query)}`
  );

  if (!response.ok) {
    throw new Error("Search failed");
  }

  return response.json();
}

export async function getSkills() {
  const response = await fetch(`${API_BASE_URL}/skills`);

  if (!response.ok) {
    throw new Error("Failed to load skills");
  }

  return response.json();
}

export async function getRoles() {
  const response = await fetch(`${API_BASE_URL}/roles`);

  if (!response.ok) {
    throw new Error("Failed to load roles");
  }

  return response.json();
}