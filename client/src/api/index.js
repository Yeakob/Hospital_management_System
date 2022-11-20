import axios from 'axios';

const url = 'http://localhost:5000/posts';

const API = axios.create({ baseURL: 'http://localhost:5000' });




export const fetchPosts = (page) => axios.get(`${url}?page=${page}`);
export const createPost = (newPost) => axios.post(url, newPost);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const fetchPatientBySearch = (searchQuery) => API.get(`/posts/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`);
export const fetchPost = (id) => API.get(`/posts/${id}`);