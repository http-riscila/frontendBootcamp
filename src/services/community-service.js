import api from "./api";

export async function getCommunities() {
  try {
    const response = await api.get("/communities");
    return response.data;
  } catch (error) {
    console.error("Error getting communities", error);
    throw error;
  }
}

export async function searchCommunities(searchTerm = "") {
  try {
    let url = "/communities";

    if (searchTerm.trim()) {
      url += `?search=${encodeURIComponent(searchTerm)}`;
    }

    const response = await api.get(url);
    return response.data;
  } catch (error) {
    console.error("Error saerching communities", error);
    throw error;
  }
}

export async function countCreatedCommunities(userId) {
  try {
    const response = await api.get(
      `/api/communities/count/created-by/${userId}`
    );
    return response.data;
  } catch (error) {
    return console.error("Error counting communities by user", error);
  }
}
