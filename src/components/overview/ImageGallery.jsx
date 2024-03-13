import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import HeroModal from './HeroModal.jsx';
import overviewStyles from './styles/Overview.module.css';
import VerticalCarousel from './VerticalCarousel.jsx';

function ImageGallery({ heroImageUrl, changeHeroFromGallery, thumbnails, setSelectedImageIndex }) {
  // Assuming you have a way to keep track of the current index of the displayed hero image
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to navigate to the previous or next hero image
  const navigateHeroImage = (direction) => {
    setCurrentIndex((prevIndex) => {
      let newIndex = direction === 'left' ? prevIndex - 1 : prevIndex + 1;
      // Ensure newIndex is within bounds
      newIndex = Math.max(0, Math.min(newIndex, thumbnails.length - 1));
      // Update the hero image based on the newIndex
      if (newIndex < 1 ) {
        const last = thumbnails.length - 1;
        changeHeroFromGallery(thumbnails[last].url)
      } else if (newIndex === thumbnails.length) {
        newIndex = 0;
      }
      changeHeroFromGallery(thumbnails[newIndex].url);
      // if newIndex is < 1, change it to the last index,
        // else if the last index === lastIndex, change it to zero
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

      </div>

      <FaChevronRight
        className={overviewStyles.navigationIconRight}
        onClick={() => navigateHeroImage('right')}
      />
      <HeroModal heroImageUrl={heroImageUrl} />

    </div>
  );
}

export default ImageGallery;
