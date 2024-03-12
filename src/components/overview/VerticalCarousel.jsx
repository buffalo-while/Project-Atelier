import React, { useState } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import overviewStyles from './styles/Overview.module.css';

const VerticalCarousel = ({
  thumbnails, setSelectedImageIndex,
  changeHeroFromGallery, navigateHeroImage,
}) => {
  const [visibleIndex, setVisibleIndex] = useState(0);
  const displaySize = 5;
  const classes = 'overviewStyles.thumbnailButton, styleThumbnailSelected '

  const selectImage = (index) => {
    const adjustedIndex = index + visibleIndex;
    setSelectedImageIndex(adjustedIndex);
    changeHeroFromGallery(thumbnails[adjustedIndex].url);
  };

  return (
    <div className={overviewStyles.verticalCarouselContainer}>
      <FaChevronUp
        className={overviewStyles.carouselNavUp}
        onClick={() => navigateHeroImage('up')}
      />
      <div className={overviewStyles.thumbnailDisplay}>
        {thumbnails.slice(visibleIndex, visibleIndex + displaySize).map((thumbnail, index) => (
          <button
          key={index}
          className={{classes}}
          onClick={() => {
            selectImage(index);
            setVisibleIndex(index);
          }}
        >
            <img src={thumbnail.thumbnailUrl} alt={`Thumbnail ${index + 1}`} className={overviewStyles.thumbnailImg} />
          </button>
        ))}
      </div>
      <FaChevronDown
        className={overviewStyles.carouselNavDown}
        onClick={() => navigateHeroImage('down')}
      />
    </div>
  );
};

export default VerticalCarousel;
