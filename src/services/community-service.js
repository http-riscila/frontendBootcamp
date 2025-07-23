import api from "./api";

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
