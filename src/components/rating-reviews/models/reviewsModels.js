import axios from 'axios';

const getReviewsMetaData = ((productId) => axios.get(`/api/reviews/meta/?product_id=${productId}`));

const getReviews = ((productId, count, page, sort) => (
  axios.get(`/api/reviews/?product_id=${productId}&count=${count}&page=${page}&sort=${sort}`)
));

const putHelpfulOrReportReview = ((reviewId, reportOrHelpful) => (
  axios.put(`/api/reviews/${reviewId}/${reportOrHelpful}`)
));

const getProductInfo = ((productId) => (
  axios.get(`/api/products/${productId}`)
));

export {
  getReviewsMetaData, getReviews, putHelpfulOrReportReview, getProductInfo,
};
