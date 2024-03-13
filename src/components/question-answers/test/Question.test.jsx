/**
 * @jest-environment jsdom
 */

/* eslint-disable object-curly-newline */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from '@jest/globals';
import Question from '../Question.jsx';
import '@testing-library/jest-dom';

describe('Question', () => {
  const question = {
    question_body: 'test question',
  };

  test('Question component should render onto the screen', async () => {
    render(<Question question="" productId="" productName="" />);
    const questionContainer = screen.getByTestId('question-container');
    expect(questionContainer).toBeInTheDocument();
  });
  test('Question component should render with the correct question body information', async () => {
    render(<Question question={question} productId="" />);
    const questionBody = screen.getByTestId('question-body');
    expect(questionBody).toHaveTextContent(`Q: ${question.question_body}`);
  });
});
