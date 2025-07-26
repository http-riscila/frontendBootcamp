import api from "./api";

// COMUNIDADES - Service de getAll
export async function getCommunities() {
  try {
    const response = await api.get("/api/communities");
    return response.data;
  } catch (error) {
    console.error("Error getting communities", error);
    throw error;
  }
}

// COMUNIDADES - Service de create
export async function createCommunity(communityData) {
  try {
    const response = await api.post("/api/communities", communityData);
    return response.data;
  } catch (error) {
    console.error("Error creating community", error);
    throw error;
  }
}

// Buscar comunidades com filtro
export async function searchCommunities(searchTerm = "") {
  try {
    let url = "/communities";

    if (searchTerm.trim()) {
      url += `?search=${encodeURIComponent(searchTerm)}`;
    }

    const response = await api.get(url);
    return response.data;
  } catch (error) {
    console.error("Error searching communities", error);
    throw error;
  }
}

// Obter uma comunidade específica por ID
export async function getCommunityById(communityId) {
  try {
    const response = await api.get(`/api/communities/${communityId}`);
    return response.data;
  } catch (error) {
    console.error("Error getting community by ID", error);
    throw error;
  }
}

export async function getCommunitiesByUser(userId) {
  console.log(userId);
  try {
    const response = await api.get(`/api/communities/by-user/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error getting community by user", error);
    throw error;
  }
}

// Buscar anúncios de uma comunidade com filtros
export async function searchCommunityAds(communityId, searchTerm = "") {
  try {
    let url = `/communities/${communityId}/ads`;

    if (searchTerm.trim()) {
      url += `?search=${encodeURIComponent(searchTerm)}`;
    }

    const response = await api.get(url);
    return response.data;
  } catch (error) {
    console.error("Error searching community ads", error);
    throw error;
  }
}

// Contar comunidades criadas por usuário
export async function countCreatedCommunities(userId) {
  try {
    const response = await api.get(
      `/api/communities/count/created-by/${userId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error counting communities by user", error);
    throw error;
  }
}

export async function addCommunityImage(imageUrl, communityId) {
  try {
    const response = await api.post(
      `/api/communities/${communityId}/image`,
      imageUrl
    );
    return response.data;
  } catch (error) {
    return console.error("Error adding community image for user", error);
  }
}
