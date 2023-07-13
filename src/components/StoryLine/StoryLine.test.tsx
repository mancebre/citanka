import React from 'react';
import { render, screen } from '@testing-library/react';
import StoryLine from './StoryLine';

describe('StoryLine', () => {
  test('renders line with words', () => {
    const line = 'This is a test line';
    render(<StoryLine line={line} />);
    const wordElements = screen.getAllByTestId('word');
    expect(wordElements).toHaveLength(5);
    expect(wordElements[0]).toHaveTextContent('This');
    expect(wordElements[1]).toHaveTextContent('is');
    expect(wordElements[2]).toHaveTextContent('a');
    expect(wordElements[3]).toHaveTextContent('test');
    expect(wordElements[4]).toHaveTextContent('line');
  });
});
