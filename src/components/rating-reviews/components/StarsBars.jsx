import React, { useState } from 'react';
import StarsBar from './StarsBar.jsx';
import ReviewsFilters from './ReviewsFilters.jsx';

function StarsBars({ metaResults, reviewsFilter, setReviewsFilter }) {
  const [clearFilters, setClearFilters] = useState(false);
  const starsBars = [...Array(5).keys()].map((index) => (
    <StarsBar
      numStars={5 - Number(index)}
      metaResults={metaResults}
      reviewsFilter={reviewsFilter}
      setReviewsFilter={setReviewsFilter}
      clearFilters={clearFilters}
      setClearFilters={setClearFilters}
      key={5 - Number(index)}

    />
  ));
  return (
    <>
      <h3>Rating Breakdown</h3>
      <ReviewsFilters
        reviewsFilter={reviewsFilter}
        setReviewsFilter={setReviewsFilter}
        setClearFilters={setClearFilters}
      />
      {starsBars}
    </>
  );
}

export default StarsBars;
