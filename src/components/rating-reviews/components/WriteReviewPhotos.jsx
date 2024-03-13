import React, { useState } from 'react';
import { postPhoto } from '../models/reviewsModels.js';
import styles from '../styles/WriteReviewPhotos.module.css';

function WriteReviewPhotos({ photos, setPhotos }) {
  const [remainingPhotos, setRemainingPhotos] = useState(5);

  const handlePhotoUpload = (e) => {
    const newPhotos = [...photos];
    const file = e.target.files[0];
    if (file && file.type.split('/')[0] === 'image' && remainingPhotos > 0) {
      const reader = new FileReader();
      reader.onloadend = () => {
        postPhoto(reader.result)
          .then((res) => {
            newPhotos.push(res.data);
            setPhotos(newPhotos);
            setRemainingPhotos(remainingPhotos - 1);
          })
          .catch((err) => console.log(err));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <label htmlFor="review-photos">
        Upload your photos:
        <input
          type="file"
          id="review-photos"
          data-testid="review-photos"
          name="review-photos"
          accept="image/*"
          onChange={handlePhotoUpload}
          disabled={remainingPhotos === 0}
        />
      </label>
      <div>
        {photos.map((photoURL, index) => (
          <img
            src={photoURL}
            alt={`uploaded-review-${index + 1}`}
            className={styles.reviewThumbnail}
            key={`uploaded-review-${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default WriteReviewPhotos;
