import axios from 'axios';

export function getProduct(id) {
  return axios.get(`/api/products/${id}`);
}

export function getRelatedProducts(id) {
  return axios.get(`/api/products/${id}/related`);
}

export function getProductStyles(id) {
  return axios.get(`/api/products/${id}/styles`);
}
