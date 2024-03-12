/**
 * @jest-environment jsdom
 */

/* eslint-disable object-curly-newline */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from '@jest/globals';
import AddAnswer from '../AddAnswer.jsx';
import '@testing-library/jest-dom';

describe('AddAnswer', () => {
  test('AddAnswer component will render onto the screen', async () => {
    render(<AddAnswer question="" product="" />);
    const addAnswerButton = screen.getByTestId('add-answer-modal');
    expect(addAnswerButton).toBeInTheDocument();
  });
});
