/**
 * @jest-environment jsdom
 */

/* eslint-disable object-curly-newline */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from '@jest/globals';
import MoreAnsweredQuestions from '../MoreAnsweredQuestions.jsx';
import '@testing-library/jest-dom';

describe('More Answered Question Button', () => {
  test('MoreAnsweredQuestions component should render onto the screen', async () => {
    render(<MoreAnsweredQuestions />);
    const button = screen.getByTestId('more-answered-questions-button');
    expect(button).toBeInTheDocument();
  });
});
