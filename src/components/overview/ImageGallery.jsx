import React from 'react';

function ImageGallery({ heroImageUrl, changeHeroFromGallery, thumbnails }) {
  return (
    <div className="image-gallery-container">
      {heroImageUrl ? <img src={heroImageUrl} alt="Hero" className="hero-image" /> : <p>Loading...</p>}

      <div className="thumbnail-gallery">
        {thumbnails && thumbnails.map((thumbnail, index) => (
          <button
            type="submit"
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            className="thumbnail-button"
            onClick={() => changeHeroFromGallery(thumbnail.url)}
            style={{
              background: 'none', border: 'none', padding: 0, cursor: 'pointer',
            }}
          >
            <img
              src={thumbnail.thumbnailUrl}
              alt={`Thumbnail ${index + 1}`}
              className="thumbnail-img"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default ImageGallery;
