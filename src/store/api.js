import axios from 'axios';
export default {
  getAllProducts: (param = {}) => axios.get(`http://localhost:8080/api/products`),
  getCategorise: (param = {}) => axios.get(`http://localhost:8080/api/categories`),
  getProduct: (id = {}) => axios.get(`http://localhost:8080/api/products/${id}`),
  getProductByCategoryId: (id = {}) => axios.get(`http://localhost:8080/api/products/category/${id}`),
  getProductByShopId: (id = {}) => axios.get(`http://localhost:8080/api/products/shop/${id}`),
  getShop: (id = {}) => axios.get(`http://localhost:8080/api/shop/${id}`),
  getProfile: (id = {}) => axios.get(`http://localhost:8080/api/users/${id}`),
  getCart: (id = {}) => axios.get(`http://localhost:8080/api/customers/${id}/cart`),
  search: (keyword = {}) => axios.post(`localhost:8080/api/search`, {keyword}),
};