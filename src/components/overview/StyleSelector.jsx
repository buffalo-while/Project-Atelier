/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function StyleSelector({ productId, changeHeroFromGallery, changeThumbnails }) {
  const [styles, setStyles] = useState([]);

  useEffect(() => {
    const getStyles = async () => {
      try {
        const response = await axios.get(`api/products/${productId}/styles`);
        const stylesData = response.data.results;
        setStyles(stylesData); // Save entire style objects
      } catch (error) {
        console.error('Error fetching styles:', error);
      }
    };
    if (productId) {
      getStyles();
    }
  }, [productId]);

  return (
    <div>
      <h1>Style: selected style</h1>
      <div className="style-thumbnails">
        {styles.map((style, index) => (

          <img
            key={index}
            src={style.photos[0].thumbnail_url}
            alt={`Style ${index + 1}`}
            className="style-thumbnail"
            onClick={() => {
              changeHeroFromGallery(style.photos[0].url);
              changeThumbnails(style.photos);
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default StyleSelector;
