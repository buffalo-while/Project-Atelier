import React, { useState, useEffect } from 'react';
// Template: Uncomment and change when needed
// import ProductsInfo from 'ProductsInfo';
// import RelatedProducts from 'RelatedProducts';
// import RatingReviews from 'RatingReviews';
// import QuestionAnswers from 'QuestionAnswers';

import getRatings from './components/rating-reviews/controllers/getRatings.jsx';

  // useEffect(() => {
  //   axios.get(`products/${id}`)
  //   .then((productIdData) => {
  //     setProductId(productIdData.data);
  //   })
  //   .catch((err) => {
  //     console.log('err getting productId', err);
  //   })
  // }, []);


const App = () => {
  const [productId, setProductId] = useState(40344);

  useEffect(() => {
  setProductId(40344);
  }, []);

    return (
      <div>
        <h1>Hello World!</h1>
        {/* <ProductsInfo productId={productId}/> */}
        <RelatedProducts productId={productId}/>
        <QuestionAnswers productId={productId}/>
        <RatingReviews productId={productId} getRatings={getRatings}/>
      </div>
    )
  }

export default App;
