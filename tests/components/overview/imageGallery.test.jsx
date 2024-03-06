/**
* @jest-environment jsdom
*/

import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from '@jest/globals';
import ImageGallery from '../../../src/components/overview/ImageGallery.jsx';
import '@testing-library/jest-dom';



describe('ImageGallery', () => {
const heroImageUrl = 'https://example.com/hero.jpg';
const thumbnails = [
{ thumbnailUrl: 'https://example.com/thumb1.jpg', url: 'https://example.com/image1.jpg' },
{ thumbnailUrl: 'https://example.com/thumb2.jpg', url: 'https://example.com/image2.jpg' },
];

test('renders hero image correctly', () => {
render(<ImageGallery
heroImageUrl={heroImageUrl}
changeHeroFromGallery={() => {}}
thumbnails={thumbnails}
/>);

const heroImage = screen.getByAltText('Hero');
expect(heroImage).toBeInTheDocument();
expect(heroImage.src).toBe(heroImageUrl);

});
});
