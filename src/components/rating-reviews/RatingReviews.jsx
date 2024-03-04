import React, { lazy, Suspense } from 'react';

const RatingBreakdown = lazy(() => import('./components/RatingBreakdown.jsx'));

function RatingReviews({ productId, getRatings }) {
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
    />
  );

  return (
    <section className="r-and-r" id="r-and-r">
      <h2>RATINGS AND REVIEWS</h2>
      {suspenseView(ratingBreakdown)}
    </section>
  );
}

export default RatingReviews;
