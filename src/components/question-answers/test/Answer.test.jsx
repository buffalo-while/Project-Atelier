/**
 * @jest-environment jsdom
 */

/* eslint-disable object-curly-newline */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from '@jest/globals';
import Answer from '../Answer.jsx';
import '@testing-library/jest-dom';

describe('Answer', () => {
  test('Answer component should render onto the screen', async () => {
    const answer = {
      answer_id: 1,
      body: 'Mock answer body',
      helpfulness: 0,
      answerer_name: 'Mock answerer',
      date: new Date().toISOString(),
    };
    render(<Answer answer={answer} />);
    const answerContainer = screen.getByTestId('answer-container');
    expect(answerContainer).toBeInTheDocument();
  });
});
