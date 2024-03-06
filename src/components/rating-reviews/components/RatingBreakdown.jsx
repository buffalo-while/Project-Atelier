import React, { useEffect } from 'react';

function RatingBreakdown({
  productId, getRatings, metaResults, setMetaResults,
}) {
  useEffect(() => {
    if (getRatings) {
      getRatings(productId)
        .then((results) => {
          // console.log('Results from calling getRatings on productId: ', results);
          setMetaResults(results);
        });
    }
  }, [getRatings, productId, setMetaResults]);

  return (
    <aside className="rating-breakdown">
      <span className="ave-rating" name="ave-rating">{metaResults.meanRating}</span>
      {metaResults.RatingStars}
    </aside>
  );
}

export default RatingBreakdown;
