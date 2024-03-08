import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import { CheckIcon } from '@heroicons/react/20/solid';
import { renderStars } from '../controllers/getRatings.jsx';
import RatingPhoto from './RatingPhoto.jsx';
import { putHelpfulOrReportReview } from '../models/reviewsModels.js';

function ReviewTile({ review }) {
  const [allText, setAllText] = useState(false);

  const [voted, setVoted] = useState(false);
  const [helpfulCount, setHelpfulCount] = useState(review.helpfulness);

  useEffect(() => {
    const votedStorage = localStorage.getItem(`review${review.review_id}voted`);
    if (votedStorage) {
      setVoted(true);
    }
  }, [review.review_id]);

  const toggleVoted = () => {
    setVoted(true);
    localStorage.setItem(`review${review.review_id}voted`, 'true');
  };

  const handleVoteClick = (e) => {
    const voteType = e.target.name;
    console.log(voteType);
    if (voteType === 'helpful') {
      setHelpfulCount(helpfulCount + 1);
    }
    toggleVoted();
    putHelpfulOrReportReview(review.review_id, voteType)
      .then(() => (console.log(`${voteType} put request successful`)))
      .catch(() => (console.log(`${voteType} put request errored`)));
  };

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
          <button type="button" name="helpful" onClick={handleVoteClick} disabled={voted}>Yes</button>
          {' ('}
          {helpfulCount}
          {')  |  '}
          <button type="button" name="report" onClick={handleVoteClick} disabled={voted}>Report</button>
        </p>
      </footer>
    </div>
  );
}

export default ReviewTile;
