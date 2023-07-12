import React from 'react';
import { render, screen } from '@testing-library/react';
import RandomStory from './randomStory';

test('renders a random story component', () => {
  render(<RandomStory data-testid="random-story" />);

  const randomStoryElement = screen.getByTestId('random-story');
  expect(randomStoryElement).toBeInTheDocument();
});
