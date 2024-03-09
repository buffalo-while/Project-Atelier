import React, { useEffect, useState } from 'react';
import { getReviews } from '../models/reviewsModels';
import ReviewTile from './ReviewTile.jsx';
import WriteReview from './WriteReview.jsx';

function ReviewsList({
  productId, reviewsFilter, metaResults, reviewsSort, productName,
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
          console.log(response.data.results);
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
    <div className="reviews-list">
      <div role="list" name="reviews-list">
        {visibleReviews}
      </div>
      {nonVisibleReviews.length > 0
        ? (
          <button type="button" name="more-reviews" onClick={handleMoreReviews}>
            MORE REVIEWS
          </button>
        ) : null}
      <WriteReview
        productId={productId}
        productName={productName}
        metaResults={metaResults}
      />
    </div>
  );
}

export default ReviewsList;
