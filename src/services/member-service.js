import api from "./api";

export async function createMember(memberData) {
  try {
    const response = await api.post("/members", memberData);
    return response.data;
  } catch (error) {
    return console.error("Error creating a new member", error);
  }
}

export async function countMembersByCommunity(communityId) {
  try {
    const response = await api.get(
      `/members/count/by-community/${communityId}`
    );
    return response.data;
  } catch (error) {
    return console.error("Error getting members", error);
  }
}

export async function getAllMembersByCommunity(communityId) {
  try {
    const response = await api.get(`/members/${communityId}`);
    return response.data;
  } catch (error) {
    return console.error("Error getting members", error);
  }
}
