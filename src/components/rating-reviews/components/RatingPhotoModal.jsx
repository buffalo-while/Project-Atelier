import React from 'react';
import styles from '../styles/RatingPhotoModal.module.css';

function RatingPhotoModal({ onClose, photo }) {
  return (
    <>
      <dialog open className={styles.expandedRatingPhoto} name="expanded-rating-photo">
        <img
          src={photo.url}
          alt={`Provided by reviewer id ${photo.id}`}
          className={styles.reviewImageFull}
          name="review-image-full"
        />
        <button type="button" onClick={onClose}>Close</button>
      </dialog>
      <div className={styles.ratingPhotoOverlay} />
    </>
  );
}

export default RatingPhotoModal;
