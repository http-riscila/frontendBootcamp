import api from "./api";

export async function getItemsByCommunity(communityId) {
  try {
    // Adiciona parâmetros para ordenar por data de criação (descendente)
    const response = await api.get(
      `/api/items/${communityId}?_sort=createdAt&_order=desc`
    );
    return response.data;
  } catch (error) {
    console.error("Error getting items", error);
    throw error;
  }
}

export async function getItemsByUser(userId) {
  try {
    const response = await api.get(`/api/items/by-user/${userId}`);
    return response.data;
  } catch (error) {
    return console.error("Error getting items by user", error);
  }
}

export async function countAvailableItems(userId) {
  try {
    const response = await api.get(`/api/items/count/available/${userId}`);
    return response.data;
  } catch (error) {
    return console.error("Error counting available items by user", error);
  }
}
