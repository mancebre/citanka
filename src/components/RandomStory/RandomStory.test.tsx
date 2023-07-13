import React from 'react';
import { render, screen } from '@testing-library/react';
import RandomStory from './RandomStory';

test('renders a random Story component', () => {
  render(<RandomStory data-testid="random-story" />);

  const randomStoryElement = screen.getByTestId('random-story');
  expect(randomStoryElement).toBeInTheDocument();
});
