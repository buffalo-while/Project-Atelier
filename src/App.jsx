import React, { useState, useEffect } from 'react';
// Template: Uncomment and change when needed
// import ProductsInfo from 'ProductsInfo';
// import RelatedProducts from 'RelatedProducts';
// import RatingReviews from 'RatingReviews';
// import QuestionAnswers from 'QuestionAnswers';
import OverviewMain from './Components/overview/OverviewMain.jsx'
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


const App = () => {
  const [productId, setProductId] = useState(40344);

  useEffect(() => {
  setProductId(40346);
  }, []);

    return (
      <div>
          <div className="top-bar">
        <div className="logo-container">
        <img src="https://res.cloudinary.com/grubhub/image/upload/d_search:browse-images:default.jpg/w_auto,q_auto:low,fl_lossy,dpr_2.0,c_pad,f_auto,h_168/lvnnr6xijsgj7zmthirm" alt="Logo" className="logo" />

        </div>
        <div className="search-container">
          <input type="text" placeholder="Search..." className="search-input" />
          <button className="search-icon">
            🔍
          </button>
        </div>
      </div>
        <h1>Hello World!</h1>
        <OverviewMain productId={productId}/>/
         {/* <RelatedProducts productId={productId}/>
        <RatingReviews productId={productId}/>
        <QuestionAnswers productId={productId}/>  */}
      </div>
    )
  }

export default App;
