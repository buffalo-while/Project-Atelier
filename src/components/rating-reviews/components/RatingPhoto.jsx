import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import RatingPhotoModal from './RatingPhotoModal.jsx';
import styles from '../styles/RatingPhoto.module.css';

function RatingPhoto({ photo }) {
  const [showPhotoPortal, setShowPhotoPortal] = useState(false);
  const handleOpenPhotoPortal = () => {
    setShowPhotoPortal(true);
  };
  return (
    <>
      <button type="button" className={styles.reviewImageExpand} name="review-image-expand" onClick={handleOpenPhotoPortal}>
        <img
          src={photo.url}
          alt={`Provided by reviewer id ${photo.id}`}
          className={styles.reviewThumbnailImg}
          name="review-image-thumbnail"
        />
      </button>
      {showPhotoPortal && createPortal(
        <RatingPhotoModal photo={photo} onClose={() => setShowPhotoPortal(false)} />,
        document.getElementById('root'),
      )}
    </>
  );
}

export default RatingPhoto;
