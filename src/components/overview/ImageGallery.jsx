import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import HeroModal from './HeroModal.jsx';
import overviewStyles from './styles/Overview.module.css';
import VerticalCarousel from './VerticalCarousel.jsx';

function ImageGallery({ heroImageUrl, changeHeroFromGallery, thumbnails, setSelectedImageIndex }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const navigateHeroImage = (direction) => {
    setCurrentIndex((prevIndex) => {
      let newIndex = direction === 'left' ? prevIndex - 1 : prevIndex + 1;
      newIndex = Math.max(0, Math.min(newIndex, thumbnails.length - 1));
      if (newIndex < 1 ) {
        const last = thumbnails.length - 1;
        changeHeroFromGallery(thumbnails[last].url);
      } else if (newIndex === thumbnails.length) {
        newIndex = 0;
      }
      changeHeroFromGallery(thumbnails[newIndex].url);
      return newIndex;
    });
  };

  return (
    <div className={overviewStyles.imageGalleryContainer}>
      <VerticalCarousel
        thumbnails={thumbnails}
        setSelectedImageIndex={setSelectedImageIndex}
        changeHeroFromGallery={changeHeroFromGallery}
        navigateHeroImage={navigateHeroImage}
      />
      <FaChevronLeft
        className={overviewStyles.navigationIconLeft}
        onClick={() => navigateHeroImage('left')}
      />
      <div className="heroContainer">
        {heroImageUrl ? (
          <img src={heroImageUrl} alt="Hero" className={overviewStyles.heroImage} />
        ) : (
          <p>Loading...</p>
        )}
        <HeroModal heroImageUrl={heroImageUrl} />

      </div>

      <FaChevronRight
        className={overviewStyles.navigationIconRight}
        onClick={() => navigateHeroImage('right')}
      />

    </div>
  );
}

export default ImageGallery;
