/**
 * @jest-environment jsdom
 */

/* eslint-disable object-curly-newline */
/* eslint-disable import/no-extraneous-dependencies */
import { render } from '@testing-library/react';
import { describe, expect, test } from '@jest/globals';

import getRatings, { renderStars } from '../../../../src/components/rating-reviews/controllers/getRatings.jsx';

describe('renderStars', () => {
  const { container } = render(renderStars(2.8, 'secondClass'));
  test('should have classes stars and secondClass', () => {
    expect(container.firstChild.className).toBe('stars secondClass');
  });
});
