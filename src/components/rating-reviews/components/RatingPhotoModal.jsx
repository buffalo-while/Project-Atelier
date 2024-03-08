import React from 'react';

function RatingPhotoModal({ onClose, photo }) {
  return (
    <dialog open className="expanded-rating-photo" name="expanded-rating-photo">
      <img
        src={photo.url}
        alt={`Provided by reviewer id ${photo.id}`}
        className="review-image-full"
        name="review-image-thumbnail"
      />
      <button type="button" onClick={onClose}>Close</button>
    </dialog>
  );
}

export default RatingPhotoModal;
