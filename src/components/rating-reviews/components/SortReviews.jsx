import React from 'react';

function SortReviews({ metaResults }) {
  return (
    <section className="sort-reviews" name="sort-reviews">
      <span className="review-count" name="review-count">
        {`${metaResults.totalReviews} reviews, sorted by RELEVANCE`}
      </span>
    </section>
  );
}

export default SortReviews;
