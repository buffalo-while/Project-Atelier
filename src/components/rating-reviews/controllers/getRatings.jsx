import React from 'react';
import { StarIcon as SolidStar } from '@heroicons/react/24/solid';
import { StarIcon as OutlineStar } from '@heroicons/react/24/outline';
import { getReviewsMetaData } from '../models/reviewsModels';

// Function to render stars correctly based on the mean (average) rating, adding a given CSS class
const renderStars = (meanRating, cssClass) => {
  const solidStars = (n) => {
    let key = 0;
    return [...(new Array(n))].map(() => {
      key += 1;
      return (
        <span key={key} style={{ width: '1em' }}>
          <SolidStar style={{ height: '1em', width: '1em', position: 'relative' }} />
        </span>
      );
    });
  };
  const outlineStars = (n) => {
    let key = 0;
    return [...(new Array(n))].map(() => {
      key += 1;
      return (
        <span key={key} style={{ width: '1em' }}>
          <OutlineStar style={{ height: '1em', width: '1em', position: 'relative' }} />
        </span>
      );
    });
  };
  const partialStar = (decimal) => {
    // no partial star should show if decimal is 0
    if (!decimal) {
      return null;
    }
    // width of solid portion of partial star, note: 0.17em (or less) is empty and 0.83em is full
    const width = `${0.17 + (Math.round(decimal * 4) / 4) * 0.66}em`;
    return (
      <span style={{
        display: 'inline-flex',
        width: '1em',
        position: 'relative',
        textAlign: 'left',
      }}
      >
        <span style={{ width, overflow: 'hidden', position: 'absolute' }}>
          <SolidStar style={{ height: '1em', width: '1em' }} />
        </span>
        <span>
          <OutlineStar style={{ height: '1em', width: '1em' }} />
        </span>
      </span>
    );
  };

  return (
    <span
      className={`stars${(cssClass ? ` ${cssClass}` : '')}`}
      name="ave-rating-stars"
    >
      {solidStars(Math.floor(meanRating))}
      {partialStar(meanRating - Math.floor(meanRating))}
      {outlineStars(5 - Math.ceil(meanRating))}
    </span>
  );
};

// function returning a promise for an object containing rating stars element and other
// reviews metadata that may be needed, for a given productId
function getRatings(productId, cssClass) {
  return getReviewsMetaData(productId)
    .then((res) => {
      const metaData = res.data;
      // calculate average rating
      const { ratings } = metaData;
      let [totalStars, totalReviews] = [0, 0];
      Object.keys(ratings).forEach((key) => {
        totalStars += Number(ratings[key]) * Number(key);
        totalReviews += Number(ratings[key]);
      });
      const meanRating = Math.round((totalStars / totalReviews) * 10) / 10;
      // create results object
      const metaResults = {};
      metaResults.totalReviews = totalReviews.toString();
      metaResults.meanRating = meanRating.toString();
      metaResults.RatingStars = <>{renderStars(meanRating, cssClass)}</>;
      metaResults.allMetaData = metaData;
      return metaResults;
    }).catch(() => {
      const errResults = {};
      errResults.totalReviews = 'N/A';
      errResults.meanRating = 'N/A';
      errResults.RatingStars = (
        <span className={`stars${(cssClass ? ` ${cssClass}` : '')}`}>
          Unable to show rating
        </span>
      );
      errResults.allMetaData = {};
      return errResults;
    });
}

export default getRatings;
export { renderStars };
