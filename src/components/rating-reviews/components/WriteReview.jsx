import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import WriteReviewModal from './WriteReviewModal.jsx';
import styles from '../styles/WriteReview.module.css';

function WriteReview({ productId, productName, metaResults }) {
  const [showWriteReviewPortal, setShowWriteReviewPortal] = useState(false);
  const handleOpenWriteReviewPortal = () => {
    setShowWriteReviewPortal(true);
  };
  return (
    <span>
      <button type="button" className={styles.writeReviewOpen} name="write-review-open" onClick={handleOpenWriteReviewPortal}>
        ADD A REVIEW +
      </button>
      {showWriteReviewPortal && createPortal(
        <WriteReviewModal
          productId={productId}
          onClose={() => setShowWriteReviewPortal(false)}
          productName={productName}
          metaResults={metaResults}
        />,
        document.getElementById('root'),
      )}
    </span>
  );
}

export default WriteReview;
