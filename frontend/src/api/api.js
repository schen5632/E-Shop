import axios from "axios";

const apiClient = axios.create({ baseURL: "http://localhost:8080" });

export const createProduct = (product) => apiClient.post(`product`, product);

export const getAllProducts = () => apiClient.get(`products`);

export const getProductById = (id) => apiClient.get(`product/${id}`);

export const updateProduct = (product, id) =>
  apiClient.put(`product/${id}`, product, id);

export const deleteProduct = (id) => apiClient.delete(`product/${id}`);

export const createOrder = (order) => apiClient.post(`order`, order);

export const getAllOrders = () => apiClient.get(`orders`);

export const createOrderItem = (orderItem) =>
  apiClient.post(`orderItem`, orderItem);

export const getAllOrderItems = () => apiClient.get(`orderItems`);

export const assignOrderToOrderItem = (orderItemId, orderId) =>
  apiClient.put(`orderItem/${orderItemId}/order/${orderId}`);
