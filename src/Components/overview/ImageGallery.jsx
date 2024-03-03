import React, {useEffect, useState} from 'react';
import axios from 'axios';

const ImageGallery = ({ productId }) => {
  const [heroImageUrl, setHeroImageUrl] = useState('');

  // rerenders on every change of productId
  useEffect(() => {
    const getHeroImg = async (productId) => {
      try {
        const response = await axios.get(`api/products/${productId}/styles`);
        const firstImageUrl = response.data.results[0]?.photos[0]?.url;
        if (firstImageUrl) {
          setHeroImageUrl(firstImageUrl);
        }
      } catch (error) {
        console.error('Error fetching product styles:', error);
      }
     };

     if (productId) {
      getHeroImg(productId)
     }
  }, [productId])

  return (
    <div>
      {heroImageUrl ? <img src={heroImageUrl} alt="Hero" /> : <p>Loading...</p>}

    </div>
  );
};

export default ImageGallery