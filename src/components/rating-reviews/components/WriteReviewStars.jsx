import React from 'react';
import { StarIcon as SolidStar } from '@heroicons/react/24/solid';
import { StarIcon as OutlineStar } from '@heroicons/react/24/outline';
import styles from '../styles/WriteReviewStars.module.css';

function WriteReviewStars({ rating, setRating }) {
  const ratingStars = ([...Array(5)]).map((star, index) => {
    const currRating = index + 1;
    return (
      <label key={currRating} htmlFor={`star${currRating}`}>
        <input
          type="radio"
          name="star-rating-radio"
          id={`star${currRating}`}
          data-testid={`star${currRating}`}
          value={currRating}
          onChange={() => setRating(currRating)}
          className={styles.starRatingRadio}
        />
        {currRating <= rating
          ? <SolidStar className={styles.writeReviewStar} />
          : <OutlineStar className={styles.writeReviewStar} />}
      </label>
    );
  });

  const ratingStarsComment = (ratingSelected) => {
    if (ratingSelected === 1) {
      return 'Poor';
    }
    if (ratingSelected === 2) {
      return 'Fair';
    }
    if (ratingSelected === 3) {
      return 'Average';
    }
    if (ratingSelected === 4) {
      return 'Good';
    }
    if (ratingSelected === 5) {
      return 'Great';
    }
    return '';
  };

  return (
    <p className="star-rating-fieldset">
      {'Overall rating (mandatory) '}
      {ratingStars}
      {' '}
      {ratingStarsComment(rating)}
    </p>
  );
}

export default WriteReviewStars;
