import axios from 'axios';

const API_URL = ' https://api.escuelajs.co/api/v1/products';

export const fetchProducts = () => axios.get(API_URL);
export const fetchProductById = (id) => axios.get(`${API_URL}/products/${id}`);