import axios from 'axios';

const getProduct = (id) => {
  return axios.get(`/api/products/${id}`)
};

const getRelatedProducts = (id) => {
  return axios.get(`/api/products/${id}/related`)
};

const getProductStyles = (id) => {
  return axios.get(`/api/products/${id}/styles`)
};

export default { getProduct, getRelatedProducts, getProductStyles }
