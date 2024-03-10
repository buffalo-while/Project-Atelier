import axios from 'axios';

const getReviewsMetaData = ((productId) => axios.get(`/api/reviews/meta/?product_id=${productId}`));

const getReviews = ((productId, count, page, sort) => (
  axios.get(`/api/reviews/?product_id=${productId}&count=${count}&page=${page}&sort=${sort}`)
));

const putHelpfulOrReportReview = ((reviewId, reportOrHelpful) => (
  axios.put(`/api/reviews/${reviewId}/${reportOrHelpful}`)
));

const postReview = ((bodyParameters) => (
  axios.post('/api/reviews', bodyParameters)
));

const postPhoto = ((base64dataURI) => (
  axios.post('/photos', { url: base64dataURI })
));

export {
  getReviewsMetaData, getReviews, putHelpfulOrReportReview, postReview, postPhoto,
};
