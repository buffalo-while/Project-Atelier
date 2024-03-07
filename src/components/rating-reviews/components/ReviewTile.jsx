import React, { useState } from 'react';
import dayjs from 'dayjs';
import { CheckIcon } from '@heroicons/react/20/solid';
import { renderStars } from '../controllers/getRatings.jsx';
import RatingPhoto from './RatingPhoto.jsx';

function ReviewTile({ review }) {
  const [allText, setAllText] = useState(false);

  const handleShowMore = () => {
    setAllText(true);
  };

  const formatParagraphs = (text) => {
    let key = 0;
    return text.split('\n').map((paragraph) => {
      key += 1;
      return <p key={key}>{paragraph}</p>;
    });
  };

  const reviewText = () => {
    if (allText || review.body.length <= 250) {
      return (<article name="review-text" className="review-text">{formatParagraphs(review.body)}</article>);
    }
    return (
      <article name="review-text" className="review-text">
        {formatParagraphs(review.body.slice(0, 250))}
        <button type="button" onClick={handleShowMore}>Show more</button>
      </article>
    );
  };

  const images = () => (
    review.photos
      .filter((photo) => (photo.url.slice(0, 4) === 'http'))
      .map((photo) => (
        <RatingPhoto key={photo.id} photo={photo} />
      ))
  );

  return (
    <div role="listitem" name="review" className="review">
      <header className="review-topline">
        <span name="rating-stars" value={review.rating}>
          {renderStars(review.rating)}
        </span>
        <span name="reviewer-and-date">
          {/* verification not implemented as API does not provide reviewer email data */}
          {review.reviewer_name}
          {', '}
          {dayjs(review.date).format('MMMM DD, YYYY')}
        </span>
      </header>
      <section name="review-body" className="review-body">
        <p name="review-summary" className="review-summary">{review.summary}</p>
        {reviewText()}
        {images()}
        {review.recommend
          ? (
            <p>
              <CheckIcon style={{ height: '1em', width: '1em' }} />
              {' '}
              I recommend this product.
            </p>
          )
          : null}
      </section>
      {review.response
        ? (
          <section name="review-response" className="review-response">
            <h3>Response:</h3>
            <p>{review.response}</p>
          </section>
        )
        : null}
      <footer>
        <p>
          Helpful?
          {' '}
          <button type="button">Yes</button>
          {' ('}
          {review.helpfulness}
          {')  |  '}
          <button type="button">Report</button>
        </p>
      </footer>
    </div>
  );
}

export default ReviewTile;

//  Structure:
//  Header
//    Left: review stars
//    Right: verified check if email exists, reviewer name, formatted date
//  Review summary, limited to 60 characters, in bold, word-break truncate + ... to avoid two lines
//  ...rest of review summary if applicable
//  Review text & media (multi-media input with text and images), limited to 250 characters
//  Button to Show more, if review length is capped only (need a state)
//  Any images (up to 5) that were submitted at part of review show as thumbnails, can open in modal
//  Recommend, only shows if yes, includes checkmark icon + I recommend this product
//  Footer
//    Rating helpfulness, Yes, No, displays number and clickable once (note API does not allow No)
//    Report button also clicakble once only (either button cannot be clicked if other has)
