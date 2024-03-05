import React, { useEffect } from 'react';
import StarsBars from './StarsBars.jsx';

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
      <header className="rating-summary" name="rating-summary">
        <span className="ave-rating" name="ave-rating">{metaResults.meanRating}</span>
        {metaResults.RatingStars}
      </header>
      <section className="rating-breakdown" name="rating-breakdown">
        <StarsBars metaResults={metaResults} />
      </section>
    </aside>
  );
}

export default RatingBreakdown;
