import React, { useState } from 'react';

function WriteReviewPhotos({ photos, setPhotos }) {
  const [remainingPhotos, setRemainingPhotos] = useState(5);

  const handlePhotoUpload = (e) => {
    const newPhotos = [...photos];
    const file = e.target.files[0];
    if (file && file.type.split('/')[0] === 'image' && remainingPhotos > 0) {
      const photoURL = URL.createObjectURL(file);
      newPhotos.push(photoURL);
      setPhotos(newPhotos);
      setRemainingPhotos(remainingPhotos - 1);
    }
  };

  return (
    <div>
      <label htmlFor="review-photos">
        Upload your photos:
        <input
          type="file"
          id="review-photos"
          name="review-photos"
          accept="image/*"
          onChange={handlePhotoUpload}
          multiple
          disabled={remainingPhotos === 0}
        />
      </label>
      <div>
        {photos.map((photoURL, index) => (
          <img src={photoURL} alt={`uploaded-review-${index + 1}`} className="review-thumbnail" key={`uploaded-review-${index + 1}`} />
        ))}
      </div>
    </div>
  );
}

export default WriteReviewPhotos;
