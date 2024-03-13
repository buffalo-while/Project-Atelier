/* eslint-disable import/no-extraneous-dependencies */
import { render, renderIntoDocument, screen, fireEvent } from '@testing-library/react';
import { describe, expect, test } from '@jest/globals';
import '@testing-library/jest-dom';
import React from 'react';
import { createPortal } from 'react-dom';
import ReviewTile from '../../../../src/components/rating-reviews/components/ReviewTile.jsx';

describe('ReviewTile', () => {
  const testReview = {
    review_id: 5,
    rating: 3,
    summary: 'test',
    recommend: false,
    response: null,
    body: ('a test body of over 60 characters').repeat(4),
    date: '2019-04-14T00:00:00.000Z',
    reviewer_name: 'shortandsweeet',
    helpfulness: 5,
    photos: [
      { id: 1, url: 'https://fastly.picsum.photos/id/398/200/300.jpg?hmac=Hfi27DwRf-atKwN-O57cBXGhlUtMCe6rozr2rWH8xH8' },
    ],
  };

  test('ReviewTile component should render onto the screen', () => {
    render(<ReviewTile review={testReview} />);
    expect(screen.getByTestId('reviewItem')).toBeInTheDocument();
  });

  test('Should be able to open and close photo modal', () => {
    document.body.innerHTML = '<div id="root" />';
    render(<ReviewTile review={testReview} />);
    const openPhotoModal = screen.getByTestId('review-image-expand');
    expect(openPhotoModal).toBeInTheDocument();
    fireEvent.click(openPhotoModal);
    const closePhotoModal = screen.getByTestId('review-image-close');
    expect(closePhotoModal).toBeInTheDocument();
    fireEvent.click(closePhotoModal);
  });
});
