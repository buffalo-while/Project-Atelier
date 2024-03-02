import React from "react";
import { lazy, Suspense, useState } from "react";
const RatingBreakdown = lazy(() => import("./components/RatingBreakdown.jsx"));

const RatingReviews = ( {product_id} ) => {

  // Adds suspense fallback to component provided until it is available
  const suspenseView = (component) => (
    <Suspense fallback={<p>Loading...</p>}>
      {component}
    </Suspense>
  );

  const ratingBreakdown = <RatingBreakdown />


  return(
  <section className="r-and-r">
    <h2>RATINGS AND REVIEWS</h2>
    {suspenseView(ratingBreakdown)}
  </section>
  );
};

export default RatingReviews;
