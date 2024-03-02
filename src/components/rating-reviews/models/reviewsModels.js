import axios from "axios";

const getReviewsMetaData = ((productId) => {
  return axios.get(`/api/reviews/meta/?product_id=${productId}`);
});

export { getReviewsMetaData };