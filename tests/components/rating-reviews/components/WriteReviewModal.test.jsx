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

  test('can click a characteristic radio button', () => {
    render(<WriteReviewModal productId="" productName="" metaResults={{ allMetaData: { characteristics: { Comfort: '3' } } }} onClose={() => {}} />);
    const charRadioButton = screen.getByTestId('Comfort3');
    fireEvent.click(charRadioButton);
    expect(charRadioButton).toBeInTheDocument();
  });

  // test('WriteReviewModal component should render onto the screen', () => {
  //   expect(container.firstChild.className).toBe(styles.writeReviewPortal);
  // });
});
