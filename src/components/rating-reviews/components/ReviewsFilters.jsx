import React from 'react';
import styles from '../styles/ReviewsFilters.module.css';

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
    <p className={styles.filtersApplied}>
      Filters currently applied:
      {filtersApplied()}
      <button
        name="remove-filters"
        type="button"
        className={styles.removeFilters}
        onClick={handleRemoveFiltersClick}
      >
        remove all filters
      </button>
    </p>
  );
}

export default ReviewsFilters;
