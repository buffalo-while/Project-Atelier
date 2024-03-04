import axios from 'axios';

const getReviewsMetaData = ((productId) => axios.get(`/api/reviews/meta/?product_id=${productId}`));

export { getReviewsMetaData };
