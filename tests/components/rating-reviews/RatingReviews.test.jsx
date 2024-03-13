/* eslint-disable import/no-extraneous-dependencies */
import { render } from '@testing-library/react';
import { describe, expect, test } from '@jest/globals';
import '@testing-library/jest-dom';
import React from 'react';
import RatingReviews from '../../../src/components/rating-reviews/RatingReviews.jsx';

describe('RatingReviews', () => {
  const { container } = render(<RatingReviews productId="" productName="" />);
  test('RatingReviews component should render onto the screen', () => {
    expect(container.firstChild.id).toBe('r-and-r');
  });
});
