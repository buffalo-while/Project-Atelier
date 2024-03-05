import axios from 'axios';

export const getProduct = (id) => {
  return axios.get(`/api/products/${id}`)
};

export const getRelatedProducts = (id) => {
  return axios.get(`/api/products/${id}/related`)
};

export const getProductStyles = (id) => {
  return axios.get(`/api/products/${id}/styles`)
};
