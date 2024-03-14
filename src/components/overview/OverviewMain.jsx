import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ImageGallery from './ImageGallery.jsx';
import ProdInfo from './ProdInfo.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';
import overviewStyles from './styles/Overview.module.css';
import SiteMessage from './SiteMessage.jsx';
import SloganDescription from './SloganDescription.jsx';

function OverviewMain({ productId, getRatings, setProductName }) {
  const [heroImageUrl, setHeroImageUrl] = useState('');
  const [thumbnails, setThumbnails] = useState([]);
  const [styles, setStyles] = useState([]);
  const [selectedStyleId, setSelectedStyleId] = useState(null);
  const [selectedStyleSkus, setSelectedStyleSkus] = useState({});
  const [selectedStyle, setSelectedStyle] = useState({});
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [product, setProduct] = useState('');

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

  const changeThumbnails = (stylePhotos) => {
    setThumbnails(stylePhotos.map((photo) => ({
      thumbnailUrl: photo.thumbnail_url,
      url: photo.url,
    })));
  };

  useEffect(() => {
    const currentSelectedStyle = styles.find((style) => style.style_id === selectedStyleId);
    if (currentSelectedStyle) {
      changeThumbnails(currentSelectedStyle.photos);
      setSelectedStyleSkus(currentSelectedStyle.skus);
      setSelectedStyle(currentSelectedStyle);
    }
  }, [selectedStyle, selectedStyleId, styles]);

  return (
    <div>
      <SiteMessage />
      <div className={overviewStyles.contentContainer}>
        <ImageGallery
          heroImageUrl={heroImageUrl}
          changeHeroFromGallery={changeHeroFromGallery}
          thumbnails={thumbnails}
          selectedImageIndex={selectedImageIndex}
          setSelectedImageIndex={setSelectedImageIndex}
        />
        <div className={overviewStyles.productInformationColumn}>
          <ProdInfo
            productId={productId}
            getRatings={getRatings}
            styles={styles}
            selectedStyle={selectedStyle}
            setProductName={setProductName}
            product={product}
            setProduct={setProduct}
          />
          <StyleSelector
            styles={styles}
            selectedStyle={selectedStyle}
            selectedStyleId={selectedStyleId}
            setSelectedStyle={setSelectedStyle}
            setSelectedStyleId={setSelectedStyleId}
            selectedStyleName={selectedStyle ? selectedStyle.name : ''}
            changeHeroFromGallery={changeHeroFromGallery}
            selectedImageIndex={selectedImageIndex}
            setSelectedImageIndex={setSelectedImageIndex}
          />
          <AddToCart
            selectedStyleSkus={selectedStyleSkus}
          />
        </div>
      </div>
      <SloganDescription product={product} />
    </div>
  );
}

export default OverviewMain;
