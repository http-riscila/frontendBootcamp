import api from "./api";

export async function countAvailableItems(userId) {
  try {
    const response = await api.get(`/api/items/count/available/${userId}`);
    return response.data;
  } catch (error) {
    return console.error("Error counting available items by user", error);
  }
}
