import apiClient from './apiClient';

export const userService = {
  getAll: () => apiClient.get('/users').then((r) => r.data),
  getById: (id) => apiClient.get(`/users/${id}`).then((r) => r.data),
  create: (payload) => apiClient.post('/users', payload).then((r) => r.data),
  update: (id, payload) => apiClient.put(`/users/${id}`, payload).then((r) => r.data),
  remove: (id) => apiClient.delete(`/users/${id}`).then((r) => r.data),
};
