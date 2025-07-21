import api from "./api";

export async function registerUser(userData) {
  try {
    const response = await api.post("/auth/register", userData);
    return response.data;
  } catch (error) {
    return console.error("Error registering a new user: ", error);
  }
}

export async function login(credentials) {
  try {
    const response = await api.post("/auth/login", credentials);
    return response.data;
  } catch (error) {
    return console.error("Error authenticating an user", error);
  }
}
