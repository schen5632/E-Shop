import axios from "axios";

const url = process.env.REACT_APP_BACKEND_URL_PROD;
//const url = process.env.REACT_APP_BACKEND_URL_DEV;
const apiClient = axios.create({
  baseURL: url,
});

export const createProduct = (product) => apiClient.post(`product`, product);
export const getAllProducts = () =>
  apiClient.get(`products`, {
    auth: {
      username: process.env.REACT_APP_BACKEND_USERNAME,
      password: process.env.REACT_APP_BACKEND_PASSWORD,
    },
  });

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
