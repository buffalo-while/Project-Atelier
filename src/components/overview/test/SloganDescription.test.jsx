/**
* @jest-environment jsdom
*/

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/';
import { describe, expect, test } from '@jest/globals';
import SloganDescription from '../SloganDescription.jsx';

describe('SloganDescription component tests', ()=> {
  const productMock = {
    slogan: 'Test Slogan',
    description: 'Test Description',
  };

  test('renders without crashing', () => {
    render(<SloganDescription product={productMock} />);
    expect(screen.getByText(productMock.slogan)).toBeInTheDocument();
    expect(screen.getByText(productMock.description)).toBeInTheDocument();
  });
  test('displays the product slogan in italics', () => {
    render(<SloganDescription product={productMock} />);
    const sloganElement = screen.getByText(productMock.slogan);
    expect(sloganElement).toHaveStyle('fontStyle: italic');
  });

  test('displays hardcoded GMO list items', () => {
    render(<SloganDescription product={productMock} />);
    expect(screen.getByText('✔ GMO and Pesticide-Free')).toBeInTheDocument();
    expect(screen.getByText('✔ Made with 100% Genetic Modification')).toBeInTheDocument();
    expect(screen.getByText('✔ This is made up')).toBeInTheDocument();
    expect(screen.getByText('✔ It doesn’t matter')).toBeInTheDocument();
  });
});