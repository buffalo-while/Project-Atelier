import React, { useState, useEffect } from 'react';
// Template: Uncomment and change when needed
// import ProductsInfo from 'ProductsInfo';
// import RelatedProducts from 'RelatedProducts';
// import RatingReviews from 'RatingReviews';
// import QuestionAnswers from 'QuestionAnswers';

  const [productId, setProductId] = useState(6);

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
  return (
    <div>
      <h1>Hello World!</h1>
      {/* <ProductsInfo/>
      <RelatedProducts/>
      <RatingReviews/>
      <QuestionAnswers/> */}
    </div>
  )
}

export default App;
