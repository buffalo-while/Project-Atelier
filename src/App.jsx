import React, { useState } from 'react';
// Template: Uncomment and change when needed
import OverviewMain from './components/overview/OverviewMain.jsx';
import RelatedProducts from './components/related-products/RelatedProducts.jsx';
import RatingReviews from './components/rating-reviews/RatingReviews.jsx';
import QuestionAnswers from './components/question-answers/QuestionAnswers.jsx';
import getRatings from './components/rating-reviews/controllers/getRatings.jsx';

import './styles.css';
// useEffect(() => {
//   axios.get(`products/${id}`)
//   .then((productIdData) => {
//     setProductId(productIdData.data);
//   })
//   .catch((err) => {
//     console.log('err getting productId', err);
//   })
// }, []);

function App() {
  // eslint-disable-next-line no-unused-vars
  const [productId, setProductId] = useState(40347);

  return (
    <div>
      <div className="top-bar">
        <div className="logo-container">
          <img src="https://res.cloudinary.com/grubhub/image/upload/d_search:browse-images:default.jpg/w_auto,q_auto:low,fl_lossy,dpr_2.0,c_pad,f_auto,h_168/lvnnr6xijsgj7zmthirm" alt="Logo" className="logo" />
        </div>
        <div className="search-container">
          <input type="text" placeholder="Search..." className="search-input" />
          <button type="submit" className="search-icon">
            🔍
          </button>
        </div>
      </div>
      <h1>Hello World!</h1>
      <OverviewMain productId={productId} getRatings={getRatings} />
      <RelatedProducts productId={productId} />
      <QuestionAnswers productId={productId} />
      <RatingReviews productId={productId} getRatings={getRatings} />
    </div>
  );
}

export default App;
