import api from "./api";

export async function countMembersByCommunity(communityId) {
  try {
    const response = await api.get(
      `/api/members/count/by-community/${communityId}`
    );
    return response.data;
  } catch (error) {
    return console.error("Error counting members by community", error);
  }
}
