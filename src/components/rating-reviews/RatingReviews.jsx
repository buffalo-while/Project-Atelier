import React, { useState, useEffect } from 'react';
import RatingBreakdown from './components/RatingBreakdown.jsx';
import SortReviews from './components/SortReviews.jsx';
import ReviewsList from './components/ReviewsList.jsx';
import { getProductInfo } from './models/reviewsModels';

// const RatingBreakdown = lazy(() => import('./components/RatingBreakdown.jsx'));
// const SortReviews = lazy(() => import('./components/SortReviews.jsx'));
// const ReviewsList = lazy(() => import('./components/ReviewsList.jsx'));

function RatingReviews({ productId, getRatings }) {
  const [metaResults, setMetaResults] = useState({});
  const [reviewsFilter, setReviewsFilter] = useState([]);
  const [reviewsSort, setReviewsSort] = useState('relevant');
  const [productName, setProductName] = useState('');

  useEffect(() => {
    getProductInfo(productId)
      .then((response) => {
        setProductName(response.data.name);
      });
  }, [productId]);
  // Adds suspense fallback to component provided until it is available
  // const suspenseView = (component) => (
  //   <Suspense fallback={<p>Loading...</p>}>
  //     {component}
  //   </Suspense>
  // );

  // const ratingBreakdown = (
  //   <RatingBreakdown
  //     getRatings={getRatings}
  //     productId={productId}
  //     metaResults={metaResults}
  //     setMetaResults={setMetaResults}
  //     reviewsFilter={reviewsFilter}
  //     setReviewsFilter={setReviewsFilter}
  //   />
  // );

  // const sortReviews = (
  //   <SortReviews
  //     metaResults={metaResults}
  //     reviewsSort={reviewsSort}
  //     setReviewsSort={setReviewsSort}
  //   />
  // );

  // const reviewsList = (
  //   <ReviewsList
  //     metaResults={metaResults}
  //     productId={productId}
  //     reviewsFilter={reviewsFilter}
  //     reviewsSort={reviewsSort}
  //   />
  // );

  return (
    <section className="r-and-r" id="r-and-r">
      <h2>RATINGS AND REVIEWS</h2>
      {/* {suspenseView(ratingBreakdown)}
      {suspenseView(sortReviews)}
      {suspenseView(reviewsList)} */}
      <RatingBreakdown
        getRatings={getRatings}
        productId={productId}
        metaResults={metaResults}
        setMetaResults={setMetaResults}
        reviewsFilter={reviewsFilter}
        setReviewsFilter={setReviewsFilter}
      />
      <SortReviews
        metaResults={metaResults}
        reviewsSort={reviewsSort}
        setReviewsSort={setReviewsSort}
      />
      <ReviewsList
        metaResults={metaResults}
        productId={productId}
        reviewsFilter={reviewsFilter}
        reviewsSort={reviewsSort}
        productName={productName}
      />
    </section>
  );
}

export default RatingReviews;
