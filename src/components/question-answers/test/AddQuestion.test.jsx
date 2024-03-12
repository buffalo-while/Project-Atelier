/**
 * @jest-environment jsdom
 */

/* eslint-disable object-curly-newline */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from '@jest/globals';
import AddQuestion from '../AddQuestion.jsx';
import '@testing-library/jest-dom';

describe('Add Question', () => {
  test('AddQuestion component should render onto the screen', async () => {
    render(<AddQuestion productId="" />);
    const addQuestionButton = screen.getByTestId('add-question-modal');
    expect(addQuestionButton).toBeInTheDocument();
  });
});
