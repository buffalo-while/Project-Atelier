import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ImageGallery from './ImageGallery.jsx';
import ProdInfo from './ProdInfo.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';

function OverviewMain({ productId, getRatings }) {
  const [heroImageUrl, setHeroImageUrl] = useState('');
  const [thumbnails, setThumbnails] = useState([]);
  const [styles, setStyles] = useState([]);
  const [selectedStyleId, setSelectedStyleId] = useState(null);
  const [selectedStyleSkus, setSelectedStyleSkus] = useState({});
  const [selectedStyle, setSelectedStyle] = useState({});

  // const selectedStyle = styles.find((style) => style.style_id === selectedStyleId);

  useEffect(() => {
    const fetchStyles = async () => {
      try {
        const response = await axios.get(`api/products/${productId}/styles`);
        const stylesData = response.data.results;
        setStyles(stylesData);
        if (stylesData.length > 0) {
          const defaultStyle = stylesData[0];
          setSelectedStyleId(defaultStyle.style_id);
          setHeroImageUrl(defaultStyle.photos[0].url);
          setThumbnails(defaultStyle.photos.map((photo) => ({
            thumbnailUrl: photo.thumbnail_url,
            url: photo.url,
          })));
        }
      } catch (error) {
        console.error('Error fetching styles:', error);
      }
    };

    fetchStyles();
  }, [productId]);

  const changeHeroFromGallery = (newURL) => {
    setHeroImageUrl(newURL);
  };
  // maybe move this one into imagegallery
  const changeThumbnails = (stylePhotos) => {
    setThumbnails(stylePhotos.map((photo) => ({
      thumbnailUrl: photo.thumbnail_url,
      url: photo.url,
    })));
  };

  useEffect(() => {
    const currentSelectedStyle = styles.find((style) => style.style_id === selectedStyleId);
    if (currentSelectedStyle) {
      setHeroImageUrl(currentSelectedStyle.photos[0].url);
      changeThumbnails(currentSelectedStyle.photos);
      setSelectedStyleSkus(currentSelectedStyle.skus);
      setSelectedStyle(currentSelectedStyle);
    }
  }, [selectedStyle, selectedStyleId, styles]);
  return (
    <div>
      <h1>
        productId:
        {productId}
      </h1>
      <div className="content-container-1">
        <ImageGallery
          heroImageUrl={heroImageUrl}
          changeHeroFromGallery={changeHeroFromGallery}
          thumbnails={thumbnails}
        />
        <div className="product-information-column">
          <ProdInfo
            productId={productId}
            getRatings={getRatings}
            styles={styles}
            selectedStyle={selectedStyle}
          />
          <StyleSelector
            styles={styles}
            setSelectedStyle={setSelectedStyle}
            setSelectedStyleId={setSelectedStyleId}
            selectedStyleName={selectedStyle ? selectedStyle.name : ''}
          />
          <AddToCart
            selectedStyleSkus={selectedStyleSkus}
          />
        </div>
      </div>
    </div>
  );
}

export default OverviewMain;
