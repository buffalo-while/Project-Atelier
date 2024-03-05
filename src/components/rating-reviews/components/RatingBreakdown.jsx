import React, { useState, useEffect } from 'react';

function RatingBreakdown({ productId, getRatings }) {
  const [metaResults, setMetaResults] = useState({});

  useEffect(() => {
    if (getRatings) {
      getRatings(productId)
        .then((results) => {
          // console.log('Results from calling getRatings on productId: ', results);
          setMetaResults(results);
        });
    }
  }, [getRatings, productId]);

  return (
    <aside className="rating-breakdown">
      <span className="ave-rating" name="ave-rating">{metaResults.meanRating}</span>
      {metaResults.RatingStars}
    </aside>
  );
}

export default RatingBreakdown;
