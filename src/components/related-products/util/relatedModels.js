import axios from 'axios';

export function getProduct(id) {
  return axios.get(`/api/products/${id}`);
  // .then((productData) => {
  //   productData.data;
  // })
  // .catch((err) => {
  //   console.log('error getting product', err);
  // })
}

export function getRelatedProducts(id) {
  return axios.get(`/api/products/${id}/related`);
}

export function getProductStyles(id) {
  return axios.get(`/api/products/${id}/styles`);
}
