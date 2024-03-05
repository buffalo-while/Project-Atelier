import React, { useState, useEffect } from 'react';

function RatingBreakdown({ productId, getRatings }) {
  const [ratingStars, setRatingStars] = useState(<p className="stars">Loading</p>);

  useEffect(() => {
    if (getRatings) {
      getRatings(productId)
        .then((metaResults) => {
          console.log('Results from calling getRatings on productId: ', metaResults);
          setRatingStars(metaResults.RatingStars);
        });
    }
  }, [getRatings, productId]);

  return (
    <aside className="rating-breakdown">
      {ratingStars}
    </aside>
  );
}

export default RatingBreakdown;
