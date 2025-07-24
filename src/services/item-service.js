import api from "./api";

export async function getItems() {
  try {
    const response = await api.get("/api/items");
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
