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
    console.error(`Error getting items from community ${communityId}:`, error);
    return [];
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
    console.error("Error getting items by user", error);
    console.warn("Rota /api/items/by-user não implementada no backend");
    return []; 
  }
}

export async function countAvailableItems(userId) {
  try {
    const response = await api.get(`/api/items/count/available/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error counting available items by user", error);
    return 0; 
  }
}

// Criar novo item
export async function createItem(itemData) {
  try {
    const response = await api.post("/api/items", itemData);
    return response.data;
  } catch (error) {
    console.error("Error creating item", error);
    throw error;
  }
}

// Buscar item por ID
export async function getItemById(itemId) {
  try {
    const response = await api.get(`/api/items/${itemId}`);
    return response.data;
  } catch (error) {
    console.error("Error getting item by ID", error);
    throw error;
  }
}

// Atualizar item (substituição completa)
export async function updateItem(itemId, itemData) {
  try {
    const response = await api.put(`/api/items/${itemId}`, itemData);
    return response.data;
  } catch (error) {
    console.error("Error updating item", error);
    throw error;
  }
}

// Atualizar item parcialmente
export async function partiallyUpdateItem(itemId, itemData) {
  try {
    const response = await api.patch(`/api/items/${itemId}`, itemData);
    return response.data;
  } catch (error) {
    console.error("Error partially updating item", error);
    throw error;
  }
}

// Deletar item
export async function deleteItem(itemId) {
  try {
    const response = await api.delete(`/api/items/${itemId}`);
    return response.status === 204; // Backend retorna 204 no delete
  } catch (error) {
    console.error("Error deleting item", error);
    throw error;
  }
}
