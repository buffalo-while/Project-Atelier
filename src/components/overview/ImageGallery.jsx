import React from 'react';
import HeroModal from './HeroModal.jsx';
import overviewStyles from './styles/Overview.module.css';

function ImageGallery({ heroImageUrl, changeHeroFromGallery, thumbnails, setSelectedImageIndex }) {
  const selectImage = (index) => {
    setSelectedImageIndex(index);
    changeHeroFromGallery(thumbnails[index].url);
  };

  return (
    <div className={overviewStyles.imageGalleryContainer}>
      {heroImageUrl ? <img src={heroImageUrl} alt="Hero" className={overviewStyles.heroImage} /> : <p>Loading...</p>}

      <div className={overviewStyles.thumbnailGallery}>
        {thumbnails && thumbnails.map((thumbnail, index) => (
          <button
            type="button"
            key={index}
            className={overviewStyles.thumbnailButton}
            onClick={() => selectImage(index)}
            style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
          >
            <img src={thumbnail.thumbnailUrl} alt={`Thumbnail ${index + 1}`} className={overviewStyles.thumbnailImg} />
          </button>
        ))}
      </div>
      <HeroModal heroImageUrl={heroImageUrl} />
    </div>
  );
}

export default ImageGallery;
