import React, { useState } from 'react';
import WriteReviewStars from './WriteReviewStars.jsx';
import WriteReviewCharacteristics from './WriteReviewCharacteristics.jsx';
import WriteReviewPhotos from './WriteReviewPhotos.jsx';
import { postReview } from '../models/reviewsModels.js';
import styles from '../styles/WriteReviewModal.module.css';

function WriteReviewModal({
  productId, productName, onClose, metaResults,
}) {
  const [rating, setRating] = useState(null);
  const [recommend, setRecommend] = useState(null);
  const [characteristics, setCharacteristics] = useState({});
  const [summary, setSummary] = useState('');
  const [body, setBody] = useState('');
  const [photos, setPhotos] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const isValidEmail = (testEmail) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(testEmail);
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();
    let newErrorMessage = '';
    if (rating === null) {
      newErrorMessage += ' rating;';
    }
    if (recommend === null) {
      newErrorMessage += ' whether you recommend this product;';
    }
    if (
      Object.keys(characteristics).length
      !== Object.keys(metaResults.allMetaData.characteristics).length
    ) {
      newErrorMessage += ' characteristic(s);';
    }
    if (body.length < 50) {
      newErrorMessage += ' review body of at least 50 characters;';
    }
    if (name.length < 1) {
      newErrorMessage += ' nickname;';
    }
    if (!isValidEmail(email)) {
      newErrorMessage += ' valid email;';
    }

    if (newErrorMessage.length > 0) {
      newErrorMessage = `You must enter the following: ${newErrorMessage}`;
      setErrorMessage(newErrorMessage);
      return;
    }
    setErrorMessage('');
    const postBody = {
      product_id: productId, rating, recommend, characteristics, summary, body, photos, name, email,
    };
    postReview(postBody)
      .then(() => (console.log('successful review submit')))
      .catch(() => (console.log('error posting reviews')));
    onClose();
  };
  return (
    <dialog open className={styles.writeReviewPortal}>
      <form onSubmit={handleSubmitReview}>
        <h3>Write Your Review</h3>
        <p>
          About the
          {' '}
          {productName}
        </p>
        {' '}
        <WriteReviewStars rating={rating} setRating={setRating} />
        <div>
          Do you recommend this product? (mandatory)
          {' '}
          <label htmlFor="recommend-yes">
            Yes
            <input type="radio" id="recommend-yes" data-testid="recommend-yes" value="yes" name="recommend-radio" onChange={() => (setRecommend(true))} />
          </label>
          <label htmlFor="recommend-no">
            No
            <input type="radio" id="recommend-no" data-testid="recommend-no" value="no" name="recommend-radio" onChange={() => (setRecommend(false))} />
          </label>
        </div>
        <WriteReviewCharacteristics
          metaResults={metaResults}
          characteristics={characteristics}
          setCharacteristics={setCharacteristics}
        />
        <div>
          <label htmlFor="review-summary">
            Review summary
            {' '}
            <input
              type="text"
              name="review-summary"
              id="review-summary"
              placeholder="Example: Best purchase ever!"
              maxLength="60"
              onChange={(e) => (setSummary(e.target.value))}
            />
          </label>
        </div>
        <div>
          <label htmlFor="review-body">
            Review body (mandatory)
            {' '}
            <textarea
              rows="5"
              name="review-body"
              id="review-body"
              placeholder="Why did you like the product or not?"
              maxLength="1000"
              onChange={(e) => (setBody(e.target.value))}
            />
          </label>
          <p>{body.length < 50 ? `Minimum required characters left: ${50 - body.length}` : 'Minimum reached'}</p>
        </div>
        <WriteReviewPhotos photos={photos} setPhotos={setPhotos} />
        <div>
          <label htmlFor="review-nickname">
            What is your nickname (mandatory)
            {' '}
            <input
              type="text"
              name="review-nickname"
              id="review-nickname"
              placeholder="Example: jackson11!"
              maxLength="60"
              onChange={(e) => (setName(e.target.value))}
            />
          </label>
          <p>For privacy reasons, do not use your full name or email address</p>
        </div>
        <div>
          <label htmlFor="review-email">
            Your email (mandatory)
            {' '}
            <input
              type="text"
              name="review-email"
              id="review-email"
              placeholder="Example: jackson11@email.com"
              maxLength="60"
              onChange={(e) => (setEmail(e.target.value))}
            />
          </label>
          <p>For authentication reasons, you will not be emailed</p>
        </div>
        <button data-testid="writeReviewSubmit" type="submit">Submit review</button>
        <button data-testid="writeReviewCancel" type="button" onClick={onClose}>Cancel</button>
        {errorMessage.length > 0 ? <p data-testid="writeReviewError">{errorMessage}</p> : null}
      </form>
    </dialog>
  );
}

export default WriteReviewModal;
