import api from "./api";

export async function getProposalsBySender(userId) {
  try {
    const response = await api.get(`/api/proposals/by-sender/${userId}`);
    return response.data;
  } catch (error) {
    return console.error("Error getting sent proposals by user", error);
  }
}

export async function getProposalsByRecipient(userId) {
  try {
    const response = await api.get(`/api/proposals/by-recipient/${userId}`);
    return response.data;
  } catch (error) {
    return console.error("Error getting received proposals by user", error);
  }
}

export async function countAcceptedProposals(userId) {
  try {
    const response = await api.get(`/api/proposals/count/accepted/${userId}`);
    return response.data;
  } catch (error) {
    return console.error("Error counting accepted proposals by user", error);
  }
}
