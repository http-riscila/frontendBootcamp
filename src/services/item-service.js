import api from "./api";

// Buscar todos os itens (requer autenticação)
export async function getAllItems() {
  try {
    const response = await api.get("/api/items");
    return response.data;
  } catch (error) {
    console.error("Error getting all items", error);
    return [];
  }
}

export async function getItemsByCommunity(communityId) {
  try {
    // Adiciona parâmetros para ordenar por data de criação (descendente)
    const response = await api.get(`/api/items/by-community/${communityId}`);
    return response.data;
  } catch (error) {
    console.error("Error getting items", error);
    throw error;
  }
}

export async function createItem(itemData) {
  try {
    const response = await api.post("/api/items", itemData);
    return response.data;
  } catch (error) {
    console.error("Error creating item", error);
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
