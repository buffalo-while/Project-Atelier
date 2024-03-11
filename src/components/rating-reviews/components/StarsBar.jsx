import React, { useState, useEffect } from 'react';

function StarsBar({
  numStars, metaResults, reviewsFilter, setReviewsFilter, clearFilters, setClearFilters,
}) {
  // States
  const [reviewsFilterClass, setReviewsFilterClass] = useState('reviews-filter');
  const [ratingFilterSelected, setRatingFilterSelected] = useState(false);

  useEffect(() => {
    if (clearFilters) {
      setReviewsFilterClass('reviews-filter');
      setRatingFilterSelected(false);
      setClearFilters(false);
    }
  }, [clearFilters, setClearFilters]);

  // Handler functions
  const handleStarsBarMouseEnter = () => {
    setReviewsFilterClass(`${reviewsFilterClass} reviews-filter-hover`);
  };

  const handleStarsBarMouseLeave = () => {
    setReviewsFilterClass(reviewsFilterClass.slice(0, reviewsFilterClass.indexOf(' reviews-filter-hover')));
  };

  const handleStarsBarClick = () => {
    const newFilter = [...reviewsFilter];
    if (ratingFilterSelected) {
      newFilter.splice(newFilter.indexOf(numStars), 1);
      setReviewsFilterClass('reviews-filter reviews-filter-hover');
    } else {
      newFilter.push(numStars);
      setReviewsFilterClass('reviews-filter reviews-filter-selected reviews-filter-hover');
    }
    setRatingFilterSelected(!ratingFilterSelected);
    setReviewsFilter(newFilter);
  };

  // Create the bar element, once metaResults are available
  let barElement = (
    <>
      <span className="num-stars" name="num-stars" style={{ width: '15%', float: 'left' }}>
        {`${numStars} stars`}
      </span>
      <span className="stars-bar-loading" name="stars-bar-loading">
        Loading...
      </span>
    </>
  );

  if (metaResults.allMetaData && metaResults.allMetaData.ratings) {
    const { totalReviews, allMetaData } = metaResults;
    const ratingCount = allMetaData.ratings[numStars] ? allMetaData.ratings[numStars] : 0;
    console.log('Stars: ', numStars, '; ratingCount: ', ratingCount, '; totalReviws: ', totalReviews);
    barElement = (
      <>
        <span className="num-stars" name="num-stars" style={{ width: '15%', float: 'left' }}>
          {`${numStars} stars`}
        </span>
        <span
          className="stars-bar"
          name="stars-bar"
          style={{
            width: '66%',
            height: '0.5em',
            display: 'inline-block',
            verticalAlign: 'middle',
            backgroundColor: '#E6ECEC',
          }}
        >
          <span
            className="stars-bar-filled"
            name="stars-bar"
            style={{
              width: `${(ratingCount / totalReviews) * 22}%`,
              backgroundColor: '#004346',
              position: 'absolute',
              height: '0.5em',
              display: 'inline-block',
              verticalAlign: 'middle',
            }}
          />
        </span>
        <span className="count-stars" name="count-stars" style={{ width: '15%', float: 'right' }}>
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
      onMouseEnter={handleStarsBarMouseEnter}
      onMouseLeave={handleStarsBarMouseLeave}
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
