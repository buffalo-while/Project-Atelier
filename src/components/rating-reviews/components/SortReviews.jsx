import React from 'react';
import styles from '../styles/SortReviews.module.css';

function SortReviews({ metaResults, reviewsSort, setReviewsSort }) {
  const handleSortReviews = (e) => {
    e.preventDefault();
    setReviewsSort(e.target.value);
  };
  return (
    <section className={styles.sortReviews} name="sort-reviews">
      <span name="review-count">
        {`${metaResults.totalReviews} `}
      </span>
      <label htmlFor="sort-reviews-criteria">
        reviews, sorted by
        {' '}
        <select
          name="sort-reviews-criteria"
          className={styles.sortReviewsCriteria}
          id="sort-reviews-criteria"
          value={reviewsSort}
          onChange={handleSortReviews}
        >
          <option value="helpful" name="helpfulness">helpfulness</option>
          <option value="newest" name="newest">newest</option>
          <option value="relevant" name="relevance">relevance</option>
        </select>
      </label>
    </section>
  );
}

export default SortReviews;
