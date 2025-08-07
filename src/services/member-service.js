import api from "./api";

export async function createMember(memberData) {
  try {
    const response = await api.post("/api/members", memberData);
    return response.data;
  } catch (error) {
    return console.error("Error creating a new member", error);
  }
}

export async function countMembersByCommunity(communityId) {
  try {
    const response = await api.get(
      `/api/members/count/by-community/${communityId}`
    );
    return response.data;
  } catch (error) {
    return console.error("Error getting members", error);
  }
}

export async function getAllMembersByCommunity(communityId) {
  try {
    const response = await api.get(`/api/members/${communityId}`);
    return response.data;
  } catch (error) {
    return console.error("Error getting members", error);
  }
}

export async function getMembersByCommunityAndUser(communityId, userId) {
  try {
    const response = await api.get(`/api/members/${userId}/by-community-and-user`,  {
      params: { communityId },
    });
    return response.data;
  } catch (error) {
    console.error("Error getting members by user", error);
    return null;
  }
}

export async function getMemberById(memberId) {
  try {
    const response = await api.get(`/api/members/${memberId}`);
    return response.data;
  } catch (error) {
    console.error("Error getting member by ID", error);
    return null;
  }
}
