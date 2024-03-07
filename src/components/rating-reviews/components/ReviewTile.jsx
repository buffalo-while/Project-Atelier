import React, { useState } from 'react';
import dayjs from 'dayjs';
import { renderStars } from '../controllers/getRatings.jsx';

function ReviewTile({ review }) {
  const [allText, setAllText] = useState(false);

  const handleShowMore = () => {
    setAllText(true);
  };

  const reviewText = () => {
    if (allText || review.body.length <= 250) {
      return (<p name="review-text" className="review-text">{review.body}</p>);
    }
    return (
      <>
        <p name="review-text" className="review-text">{review.body.slice(0, 250)}</p>
        <button type="button" onClick={handleShowMore}>Show more</button>
      </>
    );
  };
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
      </section>
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