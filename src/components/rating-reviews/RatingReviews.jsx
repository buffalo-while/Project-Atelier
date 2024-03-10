import React, { useState } from 'react';
import RatingBreakdown from './components/RatingBreakdown.jsx';
import SortReviews from './components/SortReviews.jsx';
import ReviewsList from './components/ReviewsList.jsx';

function RatingReviews({ productId, getRatings, productName }) {
  const [metaResults, setMetaResults] = useState({});
  const [reviewsFilter, setReviewsFilter] = useState([]);
  const [reviewsSort, setReviewsSort] = useState('relevant');

  return (
    <section className="r-and-r" id="r-and-r">
      <h2>RATINGS AND REVIEWS</h2>
      <RatingBreakdown
        getRatings={getRatings}
        productId={productId}
        metaResults={metaResults}
        setMetaResults={setMetaResults}
        reviewsFilter={reviewsFilter}
        setReviewsFilter={setReviewsFilter}
      />
      <SortReviews
        metaResults={metaResults}
        reviewsSort={reviewsSort}
        setReviewsSort={setReviewsSort}
      />
      <ReviewsList
        metaResults={metaResults}
        productId={productId}
        reviewsFilter={reviewsFilter}
        reviewsSort={reviewsSort}
        productName={productName}
      />
    </section>
  );
}

export default RatingReviews;
