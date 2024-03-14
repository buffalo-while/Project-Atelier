/**
* @jest-environment jsdom
*/

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import {
  describe, expect, test, beforeEach,
} from '@jest/globals';
import axios from 'axios';
import AddToCart from '../AddToCart';

describe('AddToCart component', () => {
  const mockSkus = {
    1: { size: 'S', quantity: 10 },
    2: { size: 'M', quantity: 0 },
    3: { size: 'L', quantity: 5 },
  };

  beforeEach(() => {
    axios.post.mockClear();
  });

  test('renders with initial state', () => {
    render(<AddToCart selectedStyleSkus={mockSkus} />);
    expect(screen.getByText('Select Size')).toBeInTheDocument();
    expect(screen.getByText('Qty')).toBeInTheDocument();
    expect(screen.getByLabelText('postToCart')).toBeDisabled();
  });

  test('allows size selection and updates quantities', () => {
    render(<AddToCart selectedStyleSkus={mockSkus} />);
    fireEvent.change(screen.getByLabelText('Add to cart'), { target: { value: 'S' } });
    expect(screen.getByLabelText('Quantity')).not.toBeDisabled();
    expect(screen.getByLabelText('postToCart')).not.toBeDisabled();
  });

  test('submits to cart successfully', async () => {
    axios.post.mockResolvedValue({ data: 'Success' });
    render(<AddToCart selectedStyleSkus={mockSkus} />);

    fireEvent.change(screen.getByLabelText('Add to cart'), { target: { value: 'S' } });
    fireEvent.click(screen.getByLabelText('postToCart'));

    await expect(axios.post).toHaveBeenCalled();
  });

  test('handles submit to cart failure', async () => {
    axios.post.mockRejectedValue(new Error('Failed to add to cart'));
    render(<AddToCart selectedStyleSkus={mockSkus} />);

    fireEvent.change(screen.getByLabelText('Add to cart'), { target: { value: 'S' } });
    fireEvent.click(screen.getByLabelText('postToCart'));

    await expect(axios.post).toHaveBeenCalled();
  });
});
