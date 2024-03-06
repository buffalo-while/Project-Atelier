import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ImageGallery from './ImageGallery.jsx';
import ProdInfo from './ProdInfo.jsx';
import StyleSelector from './StyleSelector.jsx';

function OverviewMain({ productId, getRatings }) {
  const [heroImageUrl, setHeroImageUrl] = useState('');
  const [thumbnails, setThumbnails] = useState([]);

  useEffect(() => {
    const getImages = async () => {
      try {
        const response = await axios.get(`api/products/${productId}/styles`);
        const photos = response.data.results[0]?.photos;
        if (photos && photos.length) {
          setHeroImageUrl(photos[0].url); // Assume first photo is the hero image
          const thumbnailUrls = photos.map((photo) => ({
            thumbnailUrl: photo.thumbnail_url,
            url: photo.url,
          }));
          setThumbnails(thumbnailUrls);
        }
      } catch (error) {
        console.error('Error fetching product styles:', error);
      }
    };

    if (productId) {
      getImages();
    }
  }, [productId]);

  const changeHeroFromGallery = (newURL) => {
    setHeroImageUrl(newURL);
  };
  const changeThumbnails = (stylePhotos) => {
    setThumbnails(stylePhotos.map((photo) => ({
      thumbnailUrl: photo.thumbnail_url,
      url: photo.url,
    })));
  };
  return (
    <div>
      <h1>
        productId:
        {productId}
      </h1>
      <div className="content-container-1">
        <ImageGallery
          className="image-gallery"
          productId={productId}
          heroImageUrl={heroImageUrl}
          changeHeroFromGallery={changeHeroFromGallery}
          thumbnails={thumbnails}
        />
        <div className="product-information-column">
          <ProdInfo
            className="product-info"
            productId={productId}
            getRatings={getRatings}
          />
          <StyleSelector
            className="style-selector"
            productId={productId}
            changeHeroFromGallery={changeHeroFromGallery}
            heroImageUrl={heroImageUrl}
            changeThumbnails={changeThumbnails}
          />
        </div>

      </div>
    </div>
  );
}

export default OverviewMain;
