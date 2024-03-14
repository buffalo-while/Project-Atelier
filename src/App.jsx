import React, { useState, createContext } from 'react';
import ReactSwitch from 'react-switch';
// Template: Uncomment and change when needed
import OverviewMain from './components/overview/OverviewMain.jsx';
import RelatedProducts from './components/related-products/RelatedProducts.jsx';
import RatingReviews from './components/rating-reviews/RatingReviews.jsx';
import QuestionAnswers from './components/question-answers/QuestionAnswers.jsx';
import getRatings from './components/rating-reviews/controllers/getRatings.jsx';

import './styles.css';

// testing for light dark mode
const ThemeContext = createContext(null);

function App() {
  // eslint-disable-next-line no-unused-vars
  const [productId, setProductId] = useState(40348);
  const [productName, setProductName] = useState('');
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div id={theme}>
        <div className="top-bar">
          <div className="logo-container">
            <img src="https://res.cloudinary.com/grubhub/image/upload/d_search:browse-images:default.jpg/w_auto,q_auto:low,fl_lossy,dpr_2.0,c_pad,f_auto,h_168/lvnnr6xijsgj7zmthirm" alt="Logo" className="logo" />
          </div>
          <div className='ldmodeswitch' >
            <label>{theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'} </label>
          <ReactSwitch onChange={toggleTheme} checked={theme === 'light'} />
          </div>
          <div className="search-container">
            <input type="text" placeholder="Search..." className="search-input" />
            <button type="submit" className="search-icon">
              🔎
            </button>
          </div>
        </div>
        <h1>Hello World!</h1>
        <OverviewMain productId={productId} getRatings={getRatings} setProductName={setProductName} />
        <RelatedProducts productId={productId} setProductId={setProductId} />
        <div className="question-answers-container-app">
          <QuestionAnswers productId={productId} productName={productName} />
        </div>
        <RatingReviews productId={productId} getRatings={getRatings} productName={productName} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
