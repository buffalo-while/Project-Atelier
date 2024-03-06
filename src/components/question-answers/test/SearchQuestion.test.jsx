/**
 * @jest-environment jsdom
 */

/* eslint-disable object-curly-newline */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from '@jest/globals';
import SearchQuestion from '../SearchQuestion.jsx';
import '@testing-library/jest-dom';

describe('Search Question', () => {
  test('SearchQuestion component should render onto the screen', async () => {
    render(<SearchQuestion handleSearchQuestion={() => {}} />);
    const searchQuestionContainer = screen.getByTestId('search-question-container');
    expect(searchQuestionContainer).toBeInTheDocument();
  });

  test('The SearchQuestion component should have the correct placeholder text', async () => {
    render(<SearchQuestion handleSearchQuestion={() => {}} />);
    const placeholderText = screen.getByPlaceholderText('HAVE A QUESTION? SEARCH FOR ANSWERS...');
    expect(placeholderText).toBeInTheDocument();
  });
});
