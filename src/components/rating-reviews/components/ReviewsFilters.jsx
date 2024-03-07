import React from 'react';

function ReviewsFilters({ reviewsFilter, setReviewsFilter, setClearFilters }) {
  if (reviewsFilter.length === 0) {
    return null;
  }
  const filtersApplied = () => {
    let filtersMessage = '';
    reviewsFilter.sort((a, b) => (Number(b) - Number(a))).forEach((numStars) => {
      filtersMessage += ` ${numStars} Stars,`;
    });
    filtersMessage = filtersMessage.slice(0, -1);
    filtersMessage += '; ';
    return filtersMessage;
  };
  const handleRemoveFiltersClick = () => {
    setReviewsFilter([]);
    setClearFilters(true);
  };
  return (
    <p>
      Filters currently applied:
      {filtersApplied()}
      <span
        name="remove-filters"
        className="remove-filters"
        role="button"
        onClick={handleRemoveFiltersClick}
        onKeyPress={handleRemoveFiltersClick}
        tabIndex={0}
      >
        Remove all filters
      </span>
    </p>
  );
}

export default ReviewsFilters;
