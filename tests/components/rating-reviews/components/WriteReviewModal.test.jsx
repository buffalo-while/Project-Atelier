/* eslint-disable import/no-extraneous-dependencies */
import { render, screen, fireEvent } from '@testing-library/react';
import {
  describe, expect, test,
} from '@jest/globals';
import '@testing-library/jest-dom';
import React from 'react';
import WriteReviewModal from '../../../../src/components/rating-reviews/components/WriteReviewModal.jsx';
import styles from '../../../../src/components/rating-reviews/styles/WriteReviewModal.module.css';

describe('WriteReviewModal', () => {
  const { container } = render(<WriteReviewModal productId="" productName="" metaResults={{ allMetaData: { characteristics: { Comfort: '3' } } }} onClose={() => {}} />);

  test('WriteReviewModal component should render onto the screen', () => {
    expect(container.firstChild.className).toBe(styles.writeReviewPortal);
  });

  test('when form is submitted with no inputs, error message shows', () => {
    render(<WriteReviewModal productId="" productName="" metaResults={{ allMetaData: { characteristics: { Comfort: '3' } } }} onClose={() => {}} />);
    const submitButton = screen.getByTestId('writeReviewSubmit');
    fireEvent.click(submitButton);
    const errorMessage = screen.getByTestId('writeReviewError');
    expect(errorMessage).toBeInTheDocument();
  });

  test('can click radio buttons and inputs', () => {
    let testClose = false;
    render(<WriteReviewModal productId="" productName="" metaResults={{ allMetaData: { characteristics: { Comfort: '3' } } }} onClose={() => { testClose = true; }} />);

    const charRadioButton = screen.getByTestId('Comfort3');
    fireEvent.click(charRadioButton);
    expect(charRadioButton).toBeInTheDocument();

    const yesRadioButton = screen.getByTestId('recommend-yes');
    fireEvent.click(yesRadioButton);
    expect(yesRadioButton).toBeInTheDocument();

    const noRadioButton = screen.getByTestId('recommend-no');
    fireEvent.click(noRadioButton);
    expect(noRadioButton).toBeInTheDocument();

    fireEvent.change(
      screen.getByPlaceholderText('Example: Best purchase ever!'),
      { target: { value: ('a').repeat(30) } },
    );

    fireEvent.change(
      screen.getByPlaceholderText('Why did you like the product or not?'),
      { target: { value: ('a').repeat(60) } },
    );
    expect(screen.getByText('Minimum reached')).toBeInTheDocument();

    fireEvent.change(
      screen.getByPlaceholderText('Example: jackson11!'),
      { target: { value: ('a').repeat(10) } },
    );

    fireEvent.change(
      screen.getByPlaceholderText('Example: jackson11@email.com'),
      { target: { value: 'a@a.a' } },
    );

    const starRadioButton = screen.getByTestId('star3');
    fireEvent.click(starRadioButton);
    expect(starRadioButton).toBeInTheDocument();

    const submitButton = screen.getByTestId('writeReviewSubmit');
    fireEvent.click(submitButton);
    expect(screen.queryByTestId('writeReviewError')).toBeNull();
    expect(testClose);

    fireEvent.change(
      screen.getByTestId('review-photos'),
      {
        target: {
          files: [new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' })],
        },
      },
    );
  });

  // test('WriteReviewModal component should render onto the screen', () => {
  //   expect(container.firstChild.className).toBe(styles.writeReviewPortal);
  // });
});
