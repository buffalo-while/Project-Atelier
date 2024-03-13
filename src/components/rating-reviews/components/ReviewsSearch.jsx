import React from 'react';

function ReviewsSearch({ reviewsSearchFilter, setReviewsSearchFilter }) {
  const handleReviewsSearchChange = (e) => {
    setReviewsSearchFilter(e.target.value);
  };
  return (
    <div>
      <input
        type="search"
        name="reviews-search-query"
        id="reviews-search-query"
        value={reviewsSearchFilter}
        placeholder="Search reviews..."
        onChange={handleReviewsSearchChange}
      />
    </div>
  );
}

export default ReviewsSearch;
