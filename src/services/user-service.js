import api from "./api";

export async function getUserById(userId) {
  try {
    const response = await api.get(`/api/users/${userId}`);
    return response.data;
  } catch (error) {
    return console.error("Error getting the user's information", error);
  }
}
