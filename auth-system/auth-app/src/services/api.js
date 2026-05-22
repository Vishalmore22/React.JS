import axios from 'axios';

const api = axios.create({ baseURL: 'http://localhost:5000' });

export const getUsers = () => api.get('/users');
export const getUserByEmail = (email) => api.get(`/users?email=${encodeURIComponent(email)}`);
export const createUser = (user) => api.post('/users', user);

export default api;
