import apiClient from './apiClient';

export const productService = {
  getAll: () => apiClient.get('/products').then((r) => r.data),
  getById: (id) => apiClient.get(`/products/${id}`).then((r) => r.data),
  create: (payload) => apiClient.post('/products', payload).then((r) => r.data),
  update: (id, payload) => apiClient.put(`/products/${id}`, payload).then((r) => r.data),
  remove: (id) => apiClient.delete(`/products/${id}`).then((r) => r.data),
};
