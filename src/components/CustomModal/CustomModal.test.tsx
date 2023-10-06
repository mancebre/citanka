import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CustomModal from './CustomModal';

test('renders modal with title and content', () => {
  const title = 'Modal Title';
  const content = 'Modal Content';
  const onClose = jest.fn();

  const { getByText } = render(
    <CustomModal isOpen={true} onClose={onClose} title={title} content={content} />
  );

  // Check if the title and content are rendered
  expect(getByText(title)).toBeInTheDocument();
  expect(getByText(content)).toBeInTheDocument();
});

test('calls onClose when close button is clicked', () => {
  const onClose = jest.fn();

  const { getByLabelText } = render(
    <CustomModal isOpen={true} onClose={onClose} title="Modal Title" content="Modal Content" />
  );

  const closeButton = getByLabelText('close');
  fireEvent.click(closeButton);

  // Check if the onClose function is called when the close button is clicked
  expect(onClose).toHaveBeenCalledTimes(1);
});
