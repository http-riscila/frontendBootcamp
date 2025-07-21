import api from './api'

export const homeApi = {
    async getCommunities() {
        try {
            const response = await api.get('/communities');
            return response.data;
        } catch (error) {
            console.error('Erro ao buscar comunidades:', error);
            throw error;
        }
    },

    async getItems() {
        try {
            const response = await api.get('/items');
            return response.data;
        } catch (error) {
            console.error('Erro ao buscar itens:', error);
            throw error;
        }
    },

    async searchCommunities(searchTerm = '') {
        try {
            let url = '/communities';
            
            if (searchTerm.trim()) {
                url += `?search=${encodeURIComponent(searchTerm)}`;
            }
            
            const response = await api.get(url);
            return response.data;
        } catch (error) {
            console.error('Erro ao buscar comunidades:', error);
            throw error;
        }
    },

    async getHomeData() {
        try {
            const [communities, items] = await Promise.all([
                this.getCommunities(),
                this.getItems()
            ]);
            
            return {
                communities,
                items
            };
        } catch (error) {
            console.error('Erro ao carregar dados da home:', error);
            throw error;
        }
    }
};