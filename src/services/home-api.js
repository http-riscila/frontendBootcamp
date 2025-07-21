import api from "./api";

export const homeApi = {
  async getCommunities() {
    try {
      const response = await api.get("/communities");
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar comunidades:", error);
      throw error;
    }
  },

  async getItems() {
    try {
      const response = await api.get("/items");
      return response.data;
    } catch (error) {
      console.log("Erro ao buscar itens:", error);
      throw error;
    }
  },

  async getUserStats(userId) {
    try {
      const [communities, items, proposals] = await Promise.all([
        api.get(`/communities/count/created-by/${userId}`),
        api.get(`/items/count/available/${userId}`),
        api.get(`/proposals/count/accepted/${userId}`),
      ]);
      return {
        communities: communities.data,
        items: items.data,
        proposals: proposals.data,
      };
    } catch (error) {
      console.error("Erro ao buscar estatísticas do usuário:", error);
      return { communities: 0, items: 0, proposals: 0 };
    }
  },

  async getHomeData() {
    try {
      const userId = localStorage.getItem("userId"); // Se o usuário estiver logado

      const promises = [this.getCommunities(), this.getItems()];

      if (userId) {
        promises.push(this.getUserStats(userId));
      }

      const results = await Promise.all(promises);

      return {
        communities: results[0],
        items: results[1],
        userStats: userId ? results[2] : null,
      };
    } catch (error) {
      console.error("Erro ao carregar dados da home:", error);
      throw error;
    }
  },
};
