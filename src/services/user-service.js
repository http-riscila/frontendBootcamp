import api from "./api";

export async function getUserById(userId) {
  try {
    const response = await api.get(`/api/users/${userId}`);
    return response.data;
  } catch (error) {
    return console.error("Error getting the user's information", error);
  }
}

export async function getUserByEmail(userEmail) {
  try {
    const response = await api.get("/api/users", userEmail);
    return response.data;
  } catch (error) {
    return console.error("Error getting the user's information", error);
  }
}

export async function editUserInfo(newData, userId) {
  try {
    const response = await api.patch(`/api/users/${userId}`, newData);
    return response.data;
  } catch (error) {
    return console.error("Error editing the user's information", error);
  }
}

export async function editProfileImage(profileImage, userId) {
  try {
    const response = await api.post(
      `api/users/${userId}/profile-image`,
      profileImage
    );
    return response.data;
  } catch (error) {
    return console.error("Error updating profile image for user", error);
  }
}
