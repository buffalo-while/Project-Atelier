import React, { lazy, Suspense, useState } from 'react';

const RatingBreakdown = lazy(() => import('./components/RatingBreakdown.jsx'));
const SortReviews = lazy(() => import('./components/SortReviews.jsx'));

function RatingReviews({ productId, getRatings }) {
  const [metaResults, setMetaResults] = useState({});
  const [reviewsFilter, setReviewsFilter] = useState([]);
  // Adds suspense fallback to component provided until it is available
  const suspenseView = (component) => (
    <Suspense fallback={<p>Loading...</p>}>
      {component}
    </Suspense>
  );

  const ratingBreakdown = (
    <RatingBreakdown
      getRatings={getRatings}
      productId={productId}
      metaResults={metaResults}
      setMetaResults={setMetaResults}
      reviewsFilter={reviewsFilter}
      setReviewsFilter={setReviewsFilter}
    />
  );

  const sortReviews = (
    <SortReviews metaResults={metaResults} />
  );

  return (
    <section className="r-and-r" id="r-and-r">
      <h2>RATINGS AND REVIEWS</h2>
      {suspenseView(ratingBreakdown)}
      {suspenseView(sortReviews)}
    </section>
  );
}

export default RatingReviews;
