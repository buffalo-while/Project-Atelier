import React from 'react';
import StarsBar from './StarsBar.jsx';

function StarsBars({ metaResults, reviewsFilter, setReviewsFilter }) {
  return [...Array(5).keys()].map((index) => (
    <StarsBar
      numStars={5 - Number(index)}
      metaResults={metaResults}
      reviewsFilter={reviewsFilter}
      setReviewsFilter={setReviewsFilter}
      key={5 - Number(index)}
    />
  ));
}

export default StarsBars;
