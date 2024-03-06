import axios from 'axios';

export const getProduct = (id) => {
  return axios.get(`/api/products/${id}`)
  // .then((productData) => {
  //   productData.data;
  // })
  // .catch((err) => {
  //   console.log('error getting product', err);
  // })
};

export const getRelatedProducts = (id) => {
  return axios.get(`/api/products/${id}/related`)
};

export const getProductStyles = (id) => {
  return axios.get(`/api/products/${id}/styles`)
};
