import React, { useEffect, useState } from 'react';
import { getReviews } from '../models/reviewsModels';
import ReviewTile from './ReviewTile.jsx';

function ReviewsList({
  productId, reviewsFilter, metaResults, reviewsSort,
}) {
  const [allReviews, setAllReviews] = useState([]);
  const [visibleReviews, setVisibleReviews] = useState(null);
  const [nonVisibleReviews, setNonVisibleReviews] = useState([]);

  useEffect(() => {
    if (getReviews && metaResults.totalReviews && metaResults.totalReviews !== 'N/A') {
      const page = 1;
      const count = metaResults.totalReviews;
      getReviews(productId, count, page, reviewsSort)
        .then((response) => {
          console.log('Results from calling getReviews on productId: ', response.data.results);
          setAllReviews(response.data.results);
        });
    }
  }, [productId, reviewsSort, metaResults]);

  useEffect(() => {
    if (allReviews.length) {
      const filteredReviewElements = allReviews.filter((review) => {
        if (reviewsFilter.length === 0 || reviewsFilter.indexOf(review.rating) !== -1) {
          return true;
        }
        return false;
      }).map((review) => (
        <ReviewTile key={review.review_id} review={review} />
      ));
      setVisibleReviews(filteredReviewElements.slice(0, 2));
      setNonVisibleReviews(filteredReviewElements.slice(2));
    }
  }, [allReviews, reviewsFilter]);

  const handleMoreReviews = () => {
    setVisibleReviews(visibleReviews.concat(nonVisibleReviews.slice(0, 2)));
    setNonVisibleReviews(nonVisibleReviews.slice(2));
  };

  return (
    <div role="list" name="reviews-list" className="reviews-list">
      {visibleReviews}
      {nonVisibleReviews.length > 0
        ? (
          <button type="button" onClick={handleMoreReviews}>
            More Reviews
          </button>
        ) : null}
    </div>
  );
}

export default ReviewsList;
