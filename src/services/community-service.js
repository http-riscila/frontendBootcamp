import api from "./api";

// COMUNIDADES - Service de getAll
export async function getCommunities() {
  try {
    const response = await api.get("/communities");
    return response.data;
  } catch (error) {
    console.error("Error getting communities", error);
    throw error;
  }
}

// COMUNIDADES - Service de create
export async function createCommunity(communityData) {
  try {
    // Limpar e validar os dados
    const cleanDescription = communityData.description?.trim() || '';
    
    // Se há um arquivo de imagem, usar FormData
    if (communityData.imageFile) {
      const formData = new FormData();
      formData.append('name', communityData.name);
      formData.append('category', communityData.category || '');
      formData.append('description', cleanDescription);
      formData.append('communityImage', communityData.imageFile);
      
      const response = await api.post("/communities", formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } else {
      // Se não há imagem, enviar como JSON normal
      const response = await api.post("/communities", {
        name: communityData.name,
        category: communityData.category || '',
        description: cleanDescription,
      });
      return response.data;
    }
  } catch (error) {
    console.error("Error creating community", error);
    throw error;
  }
}

// Buscar comunidades com filtro
export async function searchCommunities(searchTerm = "") {
  try {
    let url = "/communities";

    if (searchTerm.trim()) {
      url += `?search=${encodeURIComponent(searchTerm)}`;
    }

    const response = await api.get(url);
    return response.data;
  } catch (error) {
    console.error("Error searching communities", error);
    throw error;
  }
}

// Obter uma comunidade específica por ID
export async function getCommunityById(communityId) {
  try {
    const response = await api.get(`/communities/${communityId}`);
    return response.data;
  } catch (error) {
    console.error("Error getting community by ID", error);
    throw error;
  }
}

export async function getCommunitiesByUser(userId) {
  console.log(userId);
  try {
    const response = await api.get(`/communities/by-user/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error getting community by user", error);
    throw error;
  }
}

// COMUNIDADE ESPECÍFICA - Service de getAll para anúncios (items)
export async function getCommunityAds(communityId) {
  try {
    const response = await api.get(`/items/by-community/${communityId}`);
    return response.data;
  } catch (error) {
    console.error("Error getting community ads", error);
    throw error;
  }
}

// COMUNIDADE ESPECÍFICA - Service de create para anúncios (items)
export async function createCommunityAd(communityId, adData) {
  try {
    // Adicionar o communityId aos dados do anúncio
    const itemData = {
      ...adData,
      communityId: communityId
    };
    const response = await api.post("/items", itemData);
    return response.data;
  } catch (error) {
    console.error("Error creating community ad", error);
    throw error;
  }
}

// Buscar anúncios de uma comunidade com filtros
export async function searchCommunityAds(communityId, searchTerm = "") {
  try {
    let url = `/items/by-community/${communityId}`;

    if (searchTerm.trim()) {
      url += `?search=${encodeURIComponent(searchTerm)}`;
    }

    const response = await api.get(url);
    return response.data;
  } catch (error) {
    console.error("Error searching community ads", error);
    throw error;
  }
}

// Contar comunidades criadas por usuário
export async function countCreatedCommunities(userId) {
  try {
    const response = await api.get(
      `/communities/count/created-by/${userId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error counting communities by user", error);
    throw error;
  }
}
