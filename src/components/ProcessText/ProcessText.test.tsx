import React from 'react';
import { render, screen } from '@testing-library/react';
import ProcessText from './ProcessText';

test('renders the processed text correctly', () => {
  const text = 'This is a test text';
  render(<ProcessText text={text} />);
  
  const words = text.split(' ');
  const wordElements = screen.queryAllByTestId('word');
  
  expect(wordElements).toHaveLength(words.length);
  
  words.forEach((word, index) => {
    const wordElement = wordElements[index];
    expect(wordElement).toHaveTextContent(word);
  });
});
