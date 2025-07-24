import api from "./api";

export async function countAcceptedProposals(userId) {
  try {
    const response = await api.get(`/api/proposals/count/accepted/${userId}`);
    return response.data;
  } catch (error) {
    return console.error("Error counting accepted proposals by user", error);
  }
}
