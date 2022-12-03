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
  search: (keyword = {}) => axios.post(`http://localhost:8080/api/search?keyword=${keyword}`),
  getOrder: (id = {}) => axios.get(`http://localhost:8080/api/customers/${id}/orders`),
  addShipment: (data = {}) => axios.post(`http://localhost:8080/api/shipment/add`, data),
  addPayment: (data = {}) => axios.post(`http://localhost:8080/api/payment/add`, data),
  addOrder: (data = {}) => axios.post(`http://localhost:8080/api/customers/1/orders/add`, data),
  addCart: (data = {}) => axios.post(`http://localhost:8080/api/customers/1/cart/add`, data),
};