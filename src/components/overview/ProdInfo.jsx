import React, {
  useEffect, useState, lazy, Suspense,
} from 'react';
import axios from 'axios';

const RatingBreakdown = lazy(() => import('../rating-reviews/components/RatingBreakdown.jsx'));

function ProdInfo({ productId, getRatings, selectedStyle }) {
  const [product, setProduct] = useState('');
  const [ratingData, setRatingData] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`/api/products/${productId}`);
        setProduct(response.data);
      } catch (error) {
        console.error('There was an error: ', error);
      }
    };

    const fetchRatings = async () => {
      try {
        const ratings = await getRatings(productId);
        setRatingData(ratings);
      } catch (error) {
        console.error('There was an error fetching ratings: ', error);
      }
    };

    fetchProduct();
    fetchRatings();
  }, [productId, getRatings]);

  const suspenseView = (component) => (
    <Suspense fallback={<p>Loading...</p>}>
      {component}
    </Suspense>
  );
  console.log('selected style: ', selectedStyle);
// if i'm grabbing produce.name and product.category, i'm not in the right place. // this is totally a gotcha
  return (
    <div>
      {product && (
        <div>
          <div className="prod-info-stars">
            {ratingData ? suspenseView(ratingData.RatingStars) : <p>Loading ratings...</p>}
          </div>
          <div className="prod-info-smalletext">read all reviews</div>
          <p className="prod-info-category">{product.category}</p>
          <p className="prod-info-name">{product.name}</p>
          <p className="prod-info-price">
            {selectedStyle && selectedStyle.sale_price > 1 ? (
              <>
                <span style={{ color: 'red', textDecoration: 'line-through' }}>
                  ${selectedStyle.original_price}
                </span>
                <span style={{ color: 'red', marginLeft: '5px' }}>
                  ${selectedStyle.sale_price}
                </span>
              </>
            ) : (
              <span style={{ color: 'black' }}>
              ${product.default_price}
            </span>
            )}
          </p>
        </div>
      )}
    </div>
  );
}

export default ProdInfo;
