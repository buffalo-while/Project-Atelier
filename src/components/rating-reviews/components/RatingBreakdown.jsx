import React, { useEffect } from 'react';
import StarsBars from './StarsBars.jsx';

function RatingBreakdown({
  productId, getRatings, metaResults, setMetaResults, reviewsFilter, setReviewsFilter,
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
  let percentRecommend = 'Loading...';
  if (metaResults.allMetaData && metaResults.allMetaData.recommended) {
    const recommend = Number(metaResults.allMetaData.recommended.true);
    const notRecommend = Number(metaResults.allMetaData.recommended.false);
    percentRecommend = Math.round((recommend / (recommend + notRecommend)) * 100);
  }
  return (
    <aside className="rating-breakdown">
      <header className="rating-summary" name="rating-summary">
        <span className="ave-rating" name="ave-rating">{metaResults.meanRating}</span>
        {metaResults.RatingStars}
      </header>
      <section className="rating-breakdown" name="rating-breakdown">
        <StarsBars
          metaResults={metaResults}
          reviewsFilter={reviewsFilter}
          setReviewsFilter={setReviewsFilter}
        />
        <p>
          {percentRecommend}
          % of reviews recommend this product
        </p>
      </section>
    </aside>
  );
}

export default RatingBreakdown;
