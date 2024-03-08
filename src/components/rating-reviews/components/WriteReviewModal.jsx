import React, { useState } from 'react';
import WriteReviewStars from './WriteReviewStars.jsx';

function WriteReviewModal({ productId, productName, onClose }) {
  const [rating, setRating] = useState(null);

  const handleSubmitReview = (e) => {
    e.preventDefault();
    console.log('Submit happened for ', productId);
    onClose();
  };
  return (
    <dialog open className="write-review-portal">
      <form onSubmit={handleSubmitReview}>
        <h3>Write Your Review</h3>
        <p>
          About the
          {' '}
          {productName}
        </p>
        {' '}
        <WriteReviewStars rating={rating} setRating={setRating} />
        <button type="submit">Submit</button>
        <button type="button" onClick={onClose}>Close</button>
      </form>
    </dialog>
  );
}

export default WriteReviewModal;
