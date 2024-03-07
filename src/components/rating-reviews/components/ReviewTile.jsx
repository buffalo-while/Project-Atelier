import React from 'react';

function ReviewTile() {
  return (
    <p>
      A review
    </p>
  );
}

export default ReviewTile;

//  Structure:
//  First line
//    Left: review stars
//    Right: verified check if email exists, reviewer name, formatted date
//  Review summary, limited to 60 characters, in bold, word-break truncate + ... to avoid two lines
//  ...rest of review summary if applicable
//  Review text & media (multi-media input with text and images), limited to 250 characters
//  Button to Show more, if review length is capped only (need a state)
//  Any images (up tothat were submitted at part of review show as thumbnails, can open in modal
