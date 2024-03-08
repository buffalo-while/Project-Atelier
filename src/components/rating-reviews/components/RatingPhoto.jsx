import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import RatingPhotoModal from './RatingPhotoModal.jsx';

function RatingPhoto({ photo }) {
  const [showPhotoPortal, setShowPhotoPortal] = useState(false);
  const handleOpenPhotoPortal = () => {
    setShowPhotoPortal(true);
  };
  return (
    <>
      <button type="button" className="review-image-expand" name="review-image-expand" onClick={handleOpenPhotoPortal}>
        <img
          src={photo.url}
          alt={`Provided by reviewer id ${photo.id}`}
          className="thumbnail-img"
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
