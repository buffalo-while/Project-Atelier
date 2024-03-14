import React from 'react';
import { FaCheck } from 'react-icons/fa';
import overviewStyles from './styles/Overview.module.css';

function StyleSelector({
  styles,
  setSelectedStyle,
  selectedStyleName,
  setSelectedStyleId,
  selectedStyleId,
  setSelectedImageIndex,
  selectedImageIndex,
  changeHeroFromGallery,
}) {
  const handleClick = (styleId, style) => {
    const imageCount = style.photos.length;
    const newIndex = selectedImageIndex < imageCount ? selectedImageIndex : 0;

    setSelectedStyleId(styleId);
    setSelectedStyle(style);
    setSelectedImageIndex(newIndex);
    changeHeroFromGallery(style.photos[newIndex].url);
  };

  return (
    <div>
      <h1>
        Style
        {'>'}
        {selectedStyleName}
      </h1>
      <div className={overviewStyles.styleThumbnails}>
        {styles.map((style, index) => (
          <div
            key={index}
            className={overviewStyles.styleThumbnail}
            onClick={() => handleClick(style.style_id, style)}
          >
            <img src={style.photos[0].thumbnail_url} alt={`Style ${index + 1}`} />
            {selectedStyleId === style.style_id && (
              <FaCheck className={overviewStyles.checkmarkIcon} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default StyleSelector;
