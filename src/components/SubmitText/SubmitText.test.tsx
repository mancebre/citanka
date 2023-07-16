import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import SubmitText from './SubmitText';

describe('SubmitText', () => {
    test('renders the component', () => {
        render(<SubmitText handleSubmit={() => {}} handleReset={()=> {}} />);
        // Assert that the component renders without throwing an error
    });

    test('updates the text when typing in the textarea', () => {
        render(<SubmitText handleSubmit={() => {}} handleReset={()=> {}} />);
        const textarea = screen.getByLabelText('Enter your text here') as HTMLInputElement;
        fireEvent.change(textarea, { target: { value: 'Test text' } });
        expect(textarea.value).toBe('Test text');
    });

    test('calls the handleSubmit function when the submit button is clicked', () => {
        const handleSubmit = jest.fn();
        render(<SubmitText handleSubmit={handleSubmit} handleReset={()=> {}} />);
        const textarea = screen.getByLabelText('Enter your text here') as HTMLInputElement;
        fireEvent.change(textarea, { target: { value: 'Test text' } });
        const submitButton = screen.getByRole('button', { name: 'Submit' });
        fireEvent.click(submitButton);
        expect(handleSubmit).toHaveBeenCalledTimes(1);
        expect(handleSubmit).toHaveBeenCalledWith('Test text');
    });

    test('resets the text when the reset button is clicked', () => {
        render(<SubmitText handleSubmit={() => {}} handleReset={()=> {}} />);
        const textarea = screen.getByLabelText('Enter your text here') as HTMLInputElement;
        fireEvent.change(textarea, { target: { value: 'Test text' } });
        const resetButton = screen.getByRole('button', { name: /reset/i });
        fireEvent.click(resetButton);
        expect(textarea.value).toBe('');
    });
});
