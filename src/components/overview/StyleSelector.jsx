import React from 'react';
import { FaCheck } from 'react-icons/fa';

function StyleSelector({
  styles,
  setSelectedStyle,
  selectedStyleName,
  setSelectedStyleId,
  selectedStyleId,
  selectedStyle,
  setSelectedImageIndex,
  selectedImageIndex,
  changeHeroFromGallery,
}) {
  const handleClick = (styleId, style) => {
    setSelectedStyleId(styleId);
    setSelectedStyle(style);

    const imageCount = style.photos.length;
    const newIndex = selectedImageIndex < imageCount ? selectedImageIndex : 0;

    setSelectedImageIndex(newIndex);
    changeHeroFromGallery(style.photos[newIndex].url);

  };


  return (
    <div>
      <h1>Style: {selectedStyleName}</h1>
      <div className="style-thumbnails">
        {styles.map((style, index) => (
          <div key={index} className="style-thumbnail" onClick={() => handleClick(style.style_id, style)}>
            <img src={style.photos[0].thumbnail_url} alt={`Style ${index + 1}`} />
            {selectedStyleId === style.style_id && (
              <FaCheck className="checkmark-icon" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default StyleSelector;
