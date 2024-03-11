import React, { useState } from 'react';
import RatingBreakdown from './components/RatingBreakdown.jsx';
import SortReviews from './components/SortReviews.jsx';
import ReviewsList from './components/ReviewsList.jsx';
import ProductBreakdown from './components/ProductBreakdown.jsx';
import styles from './styles/RatingReviews.module.css';

function RatingReviews({ productId, getRatings, productName }) {
  const [metaResults, setMetaResults] = useState({});
  const [reviewsFilter, setReviewsFilter] = useState([]);
  const [reviewsSort, setReviewsSort] = useState('relevant');

  return (
    <section className={styles.rAndR} id="r-and-r">
      <h2>RATINGS AND REVIEWS</h2>
      <div className={styles.reviewsBox}>
        <aside className={styles.reviewsAside}>
          <RatingBreakdown
            getRatings={getRatings}
            productId={productId}
            metaResults={metaResults}
            setMetaResults={setMetaResults}
            reviewsFilter={reviewsFilter}
            setReviewsFilter={setReviewsFilter}
          />
          <ProductBreakdown
            metaResults={metaResults}
          />
        </aside>
        <section className={styles.reviewsMain}>
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
      </div>
    </section>
  );
}

export default RatingReviews;
