import React, { useEffect, useState, Suspense } from 'react';
import axios from 'axios';
import { FaFacebook, FaPinterest, FaTwitter } from 'react-icons/fa';
import overviewStyles from './styles/Overview.module.css';

function ProdInfo({
  productId, getRatings, selectedStyle, setProductName, product, setProduct,
}) {
  const [ratingData, setRatingData] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`/api/products/${productId}`);
        setProduct(response.data);
        setProductName(response.data.name);
      } catch (error) {
        console.error('There was an error: ', error);
      }
    };

    const fetchRatings = async () => {
      try {
        const ratings = await getRatings(productId);
        setRatingData(ratings);
      } catch (error) {
        console.error('There was an error fetching product: ', error);
      }
      try {
        const ratings = await getRatings(productId);
        setRatingData(ratings);
      } catch (error) {
        console.error('There was an error fetching product: ', error);
      }
    };

    const initiateFetches = async() => {
      await Promise.all([fetchProduct(), fetchRatings()]);
    };

    initiateFetches();
  }, [productId, getRatings, setProductName, setProduct]);

  const suspenseView = (component) => (
    <Suspense fallback={<p>Loading...</p>}>
      {component}
    </Suspense>
  );

  return (
    <div>
      {product && (
        <div>
          <div className={overviewStyles.prodInfoStarSection}>
            <div className={overviewStyles.prodInfoStars}>
              {ratingData ? suspenseView(ratingData.RatingStars) : <p>Loading ratings...</p>}
            </div>
            <div className={overviewStyles.prodInfoSmalltext}>read all reviews</div>
          </div>
          <p className={overviewStyles.prodInfoCategory}>{product.category}</p>
          <p className={overviewStyles.prodInfoName}>
            {product.name}
          </p>
          <p className={overviewStyles.prodInfoPrice}>
            {selectedStyle && selectedStyle.sale_price > 1 ? (
              <>
                <span style={{ color: 'red', textDecoration: 'line-through' }}>
                  $
                  {selectedStyle.original_price}
                </span>
                <span style={{ color: 'red', marginLeft: '5px' }}>
                  $
                  {selectedStyle.sale_price}
                </span>
              </>
            ) : (
              <span style={{ color: 'black' }}>
                $
                {product.default_price}
              </span>
            )}
          </p>
          <div>
            <p className={overviewStyles.socials}>
              <a href="https://www.facebook.com/" aria-label="Link to Facebook" target="_blank" rel="noopener noreferrer" className={overviewStyles.socialIcon}>
                <FaFacebook />
              </a>
              <a href="https://www.pinterest.com/" aria-label="Link to Pinterest" target="_blank" rel="noopener noreferrer" className={overviewStyles.socialIcon}>
                <FaPinterest />
              </a>
              <a href="https://www.twitter.com" aria-label="Link to Twitter" target="_blank" rel="noopener noreferrer" className={overviewStyles.socialIcon}>
                <FaTwitter />
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProdInfo;
