// // Test render of Card / List / Comparison

// // Test object being rendered

// // Test organization of Related Prodcuts List & Cart List

/**
 * @jest-environment jsdom
 */

/* eslint-disable object-curly-newline */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from '@jest/globals';
import RelatedCard from '../RelatedCard.jsx';
import '@testing-library/jest-dom';

describe('Related Card', () => {
  test('RelatedCard component should render onto the screen', async () => {
    const productTest = {
      name: 'testName',
      category: 'testCategory',
      slogan: 'testSlogan',
    };
    render(<RelatedCard product={productTest} />);
    const relatedCardTest = screen.getByTestId('related-card');
    expect(relatedCardTest).toBeInTheDocument();
  });

  // test('The SearchQuestion component should have the correct placeholder text', async () => {
  //   render(<SearchQuestion handleSearchQuestion={() => { }} />);
  //   const placeholderText =
  // screen.getByPlaceholderText('HAVE A QUESTION? SEARCH FOR ANSWERS...');
  //   expect(placeholderText).toBeInTheDocument();
  // });
});
