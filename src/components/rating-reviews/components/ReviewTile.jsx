import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import { CheckIcon } from '@heroicons/react/20/solid';
import { renderStars } from '../controllers/getRatings.jsx';
import RatingPhoto from './RatingPhoto.jsx';
import { putHelpfulOrReportReview } from '../models/reviewsModels.js';
import styles from '../styles/ReviewTile.module.css';

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
      return (<article name="review-text">{formatParagraphs(review.body)}</article>);
    }
    return (
      <article name="review-text">
        {formatParagraphs(review.body.slice(0, 250))}
        <button name="show-more" className={styles.showMore} type="button" onClick={handleShowMore}>Show more</button>
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
    <div role="listitem" name="review" className={styles.review}>
      <header className={styles.reviewHeader}>
        <span name="rating-stars" value={review.rating}>
          {renderStars(review.rating)}
        </span>
        <span name="reviewer-and-date" className={styles.reviewerAndDate}>
          {/* verification not implemented as API does not provide reviewer email data */}
          {review.reviewer_name}
          {', '}
          {dayjs(review.date).format('MMMM DD, YYYY')}
        </span>
      </header>
      <section name="review-body">
        <p name="review-summary" className={styles.reviewSummary}>{review.summary}</p>
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
          <section name="review-response">
            <h3>Response:</h3>
            <p>{review.response}</p>
          </section>
        )
        : null}
      <footer className={styles.reviewFooter}>
        Helpful?
        {' '}
        <button type="button" name="helpful" onClick={handleVoteClick} disabled={voted}>Yes</button>
        {' ('}
        {helpfulCount}
        )
        <span>|</span>
        <button type="button" name="report" onClick={handleVoteClick} disabled={voted}>Report</button>
      </footer>
    </div>
  );
}

export default ReviewTile;
