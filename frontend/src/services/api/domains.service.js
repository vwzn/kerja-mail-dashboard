import api from '../config/api.config';

class DomainService {
    async getDomains(params = {}) {
        try {
            const response = await api.get('/domains', { params });
            return response.data;
        } catch (error) {
            throw this.handleError(error);
        }
    }

    async getDomain(id) {
        try {
            const response = await api.get(`/domains/${id}`);
            return response.data;
        } catch (error) {
            throw this.handleError(error);
        }
    }

    async createDomain(data) {
        try {
            const response = await api.post('/domains', data);
            return response.data;
        } catch (error) {
            throw this.handleError(error);
        }
    }

    async updateDomain(id, data) {
        try {
            const response = await api.put(`/domains/${id}`, data);
            return response.data;
        } catch (error) {
            throw this.handleError(error);
        }
    }

    async deleteDomain(id) {
        try {
            const response = await api.delete(`/domains/${id}`);
            return response.data;
        } catch (error) {
            throw this.handleError(error);
        }
    }

    handleError(error) {
        if (error.response) {
            // Server responded with error
            return {
                message: error.response.data.message || 'An error occurred',
                status: error.response.status,
                data: error.response.data
            };
        } else if (error.request) {
            // Request made but no response
            return {
                message: 'Network error. Please check your connection.',
                status: 0
            };
        } else {
            // Something else happened
            return {
                message: error.message || 'An unexpected error occurred',
                status: 0
            };
        }
    }
}

export default new DomainService