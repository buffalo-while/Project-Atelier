import React, { useState, useEffect } from 'react';
import styles from '../styles/StarsBar.module.css';

function StarsBar({
  numStars, metaResults, reviewsFilter, setReviewsFilter, clearFilters, setClearFilters,
}) {
  const [reviewsFilterClass, setReviewsFilterClass] = useState(styles.reviewsFilter);
  const [ratingFilterSelected, setRatingFilterSelected] = useState(false);

  useEffect(() => {
    if (clearFilters) {
      setReviewsFilterClass(styles.reviewsFilter);
      setRatingFilterSelected(false);
      setClearFilters(false);
    }
  }, [clearFilters, setClearFilters]);

  const handleStarsBarClick = () => {
    const newFilter = [...reviewsFilter];
    if (ratingFilterSelected) {
      newFilter.splice(newFilter.indexOf(numStars), 1);
      setReviewsFilterClass(styles.reviewsFilter);
    } else {
      newFilter.push(numStars);
      setReviewsFilterClass(`${styles.reviewsFilter} ${styles.reviewsFilterSelected}`);
    }
    setRatingFilterSelected(!ratingFilterSelected);
    setReviewsFilter(newFilter);
  };

  // Create the bar element, once metaResults are available
  let barElement = (
    <>
      <span name="num-stars" className={styles.numStars}>
        {`${numStars} stars`}
      </span>
      <span name="stars-bar-loading">
        Loading...
      </span>
    </>
  );

  if (metaResults.allMetaData && metaResults.allMetaData.ratings) {
    const { totalReviews, allMetaData } = metaResults;
    const ratingCount = allMetaData.ratings[numStars] ? allMetaData.ratings[numStars] : 0;
    barElement = (
      <>
        <span className={styles.numStars} name="num-stars">
          {`${numStars} stars`}
        </span>
        <span
          className={styles.starsBar}
          name="stars-bar"
        >
          <span
            className={styles.starsBarFilled}
            name="stars-bar"
            style={{
              width: `${(ratingCount / totalReviews) * 25}%`,
            }}
          />
        </span>
        <span name="count-stars" className={styles.countStars}>
          {ratingCount}
        </span>
      </>
    );
  }

  return (
    <div
      name="reviews-rating-filter"
      className={reviewsFilterClass}
      value={numStars}
      onClick={handleStarsBarClick}
      onKeyPress={handleStarsBarClick}
      role="option"
      aria-selected={ratingFilterSelected}
      tabIndex={0}
    >
      {barElement}
    </div>
  );
}

export default StarsBar;
