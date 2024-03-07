import React, { useEffect, useState } from 'react';
import { getReviews } from '../models/reviewsModels';

function ReviewsList({
  productId, reviewsFilter, metaResults, reviewsSort,
}) {
  const [allReviews, setAllReviews] = useState([]);
  useEffect(() => {
    if (getReviews && metaResults.totalReviews && metaResults.totalReviews !== 'N/A') {
      const page = 1;
      const count = metaResults.totalReviews;
      getReviews(productId, count, page, reviewsSort)
        .then((response) => {
          // console.log('Results from calling getReviews on productId: ', results);
          setAllReviews(response.data.results);
        });
    }
  }, [productId, reviewsSort, metaResults]);
  // console.log(allReviews, reviewsFilter, metaResults.totalReviews);
  return (
    <p>Review List</p>
  );
}

export default ReviewsList;
