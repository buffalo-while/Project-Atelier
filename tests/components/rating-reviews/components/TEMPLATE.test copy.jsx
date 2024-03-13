/* eslint-disable import/no-extraneous-dependencies */
import { render } from '@testing-library/react';
import { describe, expect, test } from '@jest/globals';
import '@testing-library/jest-dom';
import React from 'react';
import TEMPLATE from '../../../../src/components/rating-reviews/components/TEMPLATE.jsx';

describe('TEMPLATE', () => {
  const { container } = render(<TEMPLATE productId="" productName="" />);
  test('TEMPLATE component should render onto the screen', () => {
    expect(container.firstChild.id).toBe('ADD SOMETHING APPROPRIATE HERE');
  });
});
