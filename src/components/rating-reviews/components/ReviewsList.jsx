import React, { useEffect, useState } from 'react';
import { getReviews } from '../models/reviewsModels';
import ReviewTile from './ReviewTile.jsx';

function ReviewsList({
  productId, reviewsFilter, metaResults, reviewsSort,
}) {
  const [allReviews, setAllReviews] = useState([]);
  useEffect(() => {
    if (getReviews && metaResults.totalReviews && metaResults.totalReviews !== 'N/A') {
      const page = 1;
      // revert later when have built limitations on number of reviews that render initially
      const count = 5;
      // const count = metaResults.totalReviews;
      getReviews(productId, count, page, reviewsSort)
        .then((response) => {
          console.log('Results from calling getReviews on productId: ', response.data.results);
          setAllReviews(response.data.results);
        });
    }
  }, [productId, reviewsSort, metaResults]);
  const reviewElements = allReviews.filter((review) => {
    if (reviewsFilter.length === 0 || reviewsFilter.indexOf(review.rating) !== -1) {
      return true;
    }
    return false;
  }).map((review) => (
    <ReviewTile key={review.review_id} review={review} />
  ));
  return (
    <section name="reviews-list" className="reviews-list">
      {reviewElements}
    </section>
  );
}

export default ReviewsList;
