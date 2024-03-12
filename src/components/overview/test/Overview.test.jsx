/**
* @jest-environment jsdom
*/

import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { describe, expect, test } from '@jest/globals';
import ProdInfo from '../ProdInfo.jsx';
import '@testing-library/jest-dom';
import axios from 'axios';

jest.mock('axios');

describe('ProdInfo', () => {
  const productId = '12345';
  const getRatings = jest.fn();
  const selectedStyle = { sale_price: "50", original_price: "100" };
  const setProductName = jest.fn();

  beforeEach(() => {
    axios.get.mockResolvedValue({
      data: {
        name: 'Test Product',
        category: 'Test Category',
        default_price: '100',
      },
    });

    getRatings.mockResolvedValue({
      RatingStars: <div>Stars</div>,
    });
  });

  test('renders product information correctly', async () => {
    render(<ProdInfo
      productId={productId}
      getRatings={getRatings}
      selectedStyle={selectedStyle}
      setProductName={setProductName}
    />);

    // Use await waitFor to ensure state updates are completed
    await waitFor(() => {
      expect(screen.getByText('Test Product')).toBeInTheDocument();
      expect(screen.getByText('Test Category')).toBeInTheDocument();
      expect(screen.getByText('$100')).toBeInTheDocument();
      expect(screen.getByText('$50')).toBeInTheDocument();
    });
  });

  // Adjust your tests accordingly
});
