/**
 * @jest-environment jsdom
 */

/* eslint-disable object-curly-newline */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from '@jest/globals';
import QuestionAnswers from '../QuestionAnswers.jsx';
import '@testing-library/jest-dom';

describe('Question and Answers', () => {
  test('QuestionAnswers component should render onto the screen', async () => {
    render(<QuestionAnswers productName="" productId="" />);
    const questionAnswerContainer = screen.getByTestId('qna-container');
    expect(questionAnswerContainer).toBeInTheDocument();
  });
});
