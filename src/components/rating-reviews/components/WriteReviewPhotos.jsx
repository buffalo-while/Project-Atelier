import React, { useState } from 'react';

function WriteReviewPhotos({ photos, setPhotos }) {
  const [remainingPhotos, setRemainingPhotos] = useState(5);

  const handlePhotoUpload = (e) => {
    const newPhotos = [...photos];
    const fileValue = e.target.value;
    const files = e.target.files;
    const file = e.target.files[0];
    console.log(fileValue);
    console.log(files);
    console.log(file);
    if (file && file.type.split('/')[0] === 'image' && remainingPhotos > 0) {
      const photoURL = URL.createObjectURL(file);
      console.log('PhotoURL: ', photoURL);
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
