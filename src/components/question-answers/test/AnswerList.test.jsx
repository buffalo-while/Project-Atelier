/**
 * @jest-environment jsdom
 */

/* eslint-disable object-curly-newline */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from '@jest/globals';
import AnswerList from '../AnswerList.jsx';
import '@testing-library/jest-dom';

describe('AnswerList', () => {
  test('AnswerList component should render onto the screen', async () => {
    render(<AnswerList questionId="" />);
    const answerContainer = screen.getByTestId('answerlist-container');
    expect(answerContainer).toBeInTheDocument();
  });
});
