import React from 'react';
import { render, screen } from '@testing-library/react';
import Word from './Word';

describe('Word', () => {
    it('breaks the word correctly', () => {
        const word = 'Тестирање';
        const testId = 'test-id';
        render(<Word word={word} data-testid={testId} />);

        const renderedWordParts = screen.getAllByTestId(testId);
        expect(renderedWordParts).toHaveLength(5);
        expect(renderedWordParts[0]).toHaveTextContent('Те');
        expect(renderedWordParts[1]).toHaveTextContent('сти');
        expect(renderedWordParts[2]).toHaveTextContent('ра');
        expect(renderedWordParts[3]).toHaveTextContent('ње');
    });

    it('applies the correct class for each part', () => {
        const word = 'Тестирање';
        const testId = 'test-id';
        render(<Word word={word} data-testid={testId} />);

        const renderedWordParts = screen.getAllByTestId(testId);
        expect(renderedWordParts[0]).toHaveClass('Light');
        expect(renderedWordParts[1]).toHaveClass('Dark');
    });
});
