import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Story from './story';

describe('Story', () => {
  const mockStory = {
    title: 'Test Story',
    body: 'Lorem ipsum dolor sit amet',
  };
  const mockClicked = jest.fn();

  test('renders story title and body', () => {
    render(<Story story={mockStory} clicked={mockClicked} />);
    const titleElement = screen.getByTestId('story-title');
    const bodyElement = screen.getByTestId('story-body');
    expect(titleElement).toHaveTextContent('Test Story');
    expect(bodyElement).toHaveTextContent('Lorem ipsum dolor sit amet');
  });

  test('calls clicked function on button click', () => {
    render(<Story story={mockStory} clicked={mockClicked} />);
    const buttonElement = screen.getByTestId('story-button');
    fireEvent.click(buttonElement);
    expect(mockClicked).toHaveBeenCalled();
  });
});
