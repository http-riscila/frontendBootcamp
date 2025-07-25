import api from "./api";

export async function getItems() {
  try {
    // Adiciona parâmetros para ordenar por data de criação (descendente)
    const response = await api.get("/items?_sort=createdAt&_order=desc");
    return response.data;
  } catch (error) {
    console.error("Error getting items", error);
    throw error;
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
