import React, {
  useEffect, useState, lazy, Suspense,
} from 'react';
import axios from 'axios';

const RatingBreakdown = lazy(() => import('../rating-reviews/components/RatingBreakdown.jsx'));

function ProdInfo({ productId, getRatings }) {
  const [product, setProduct] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`/api/products/${productId}`);
        setProduct(response.data);
      } catch (error) {
        console.error('There was an error: ', error);
      }
    };

    fetchProduct();
  }, [productId]);

  // Function to add suspense fallback
  const suspenseView = (component) => (
    <Suspense fallback={<p>Loading...</p>}>
      {component}
    </Suspense>
  );

  // Prepare the RatingBreakdown component for rendering with suspense
  const ratingBreakdown = (
    <RatingBreakdown
      productId={productId}
      getRatings={getRatings}
    />
  );

  return (
    <div>
      {product && (
        <div>
          <div className="prod-info-stars">{suspenseView(ratingBreakdown)}</div>
          <div className="prod-info-smalletext">read all reviews</div>
          <p className="prod-info-category">{product.category}</p>
          <p className="prod-info-name">{product.name}</p>
          <p className="prod-info-price">
            $
            {product.default_price}
          </p>
        </div>
      )}
    </div>
  );
}

export default ProdInfo;
