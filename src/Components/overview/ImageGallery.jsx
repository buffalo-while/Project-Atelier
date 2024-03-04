import React, {useEffect, useState} from 'react';
import axios from 'axios';

  // rerenders on every change of productId
  // useEffect(() => {
  //   const getHeroImg = async (productId) => {
  //     try {
  //       const response = await axios.get(`api/products/${productId}/styles`);
  //       const firstImageUrl = response.data.results[0]?.photos[0]?.url;
  //       if (firstImageUrl) {
  //         setHeroImageUrl(firstImageUrl);
  //       }
  //     } catch (error) {
  //       console.error('Error fetching product styles:', error);
  //     }
  //    };

  //    if (productId) {
  //     getHeroImg(productId)
  //    }
  // }, [productId])

const ImageGallery = ({ productId }) => {
  const [heroImageUrl, setHeroImageUrl] = useState('');
  const [thumbnails, setThumbnails] = useState([]);

  useEffect(() => {
    const getImages = async () => {
      try {
        const response = await axios.get(`api/products/${productId}/styles`);
        const photos = response.data.results[0]?.photos; // Safely access the photos array
        if (photos && photos.length) {
          setHeroImageUrl(photos[0].url); // Set the first photo's URL as the hero image
          const thumbnailUrls = photos.map(photo => ({
            thumbnailUrl: photo.thumbnail_url,
            url: photo.url // Store both thumbnail and main image URLs
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

// also need a function that will generate the current style's thumbnails
  // productId/styleId/photos
    // for each  {}
      // create an element <img src=thumbnailUrl />

  //also need to write a function where  on img click, get thumbnail url, find the photo obj where thumbnail url matches, get big URL, set that as new hero img
  const changeHeroFromGallery = (newURL) => {
    setHeroImageUrl(newURL)
  }
  return (
    <div>
      {heroImageUrl ? <img src={heroImageUrl} alt="Hero" className="hero-image"/> : <p>Loading...</p>}
      <div className="thumbnail-gallery">
  {thumbnails.map((thumbnail, index) => (
    <img
      key={index}
      src={thumbnail.thumbnailUrl}
      alt={`Thumbnail ${index + 1}`}
      className="thumbnail-img"
      onClick={() => changeHeroFromGallery(thumbnail.url)} // This should probably change the hero image to the main image, not the thumbnail
    />
  ))}
</div>

    </div>
  );
};

export default ImageGallery