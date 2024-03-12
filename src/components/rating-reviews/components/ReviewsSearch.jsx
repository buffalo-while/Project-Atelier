import React from 'react';

function ReviewsSearch({ reviewsSearchFilter, setReviewsSearchFilter }) {
  const handleReviewsSearchChange = (e) => {
    setReviewsSearchFilter(e.target.value);
  };
  return (
    <search>
      <input
        type="search"
        name="reviews-search-query"
        id="reviews-search-query"
        value={reviewsSearchFilter}
        placeholder="Search reviews..."
        onChange={handleReviewsSearchChange}
      />
    </search>
  );
}

export default ReviewsSearch;
