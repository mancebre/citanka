import React from 'react';
import { render, screen } from '@testing-library/react';
import ProcessText from './ProcessText';

describe('ProcessText', () => {
  it('breaks the text into lines correctly', () => {
    const text = 'Line 1\nLine 2\nLine 3';
    render(<ProcessText text={text} />);

    const lineElements = screen.getAllByTestId('story-line');
    expect(lineElements).toHaveLength(3);
    expect(lineElements[0]).toHaveTextContent('Line 1');
    expect(lineElements[1]).toHaveTextContent('Line 2');
    expect(lineElements[2]).toHaveTextContent('Line 3');
  });
});
