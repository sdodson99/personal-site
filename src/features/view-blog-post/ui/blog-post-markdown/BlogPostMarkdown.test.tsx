import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BlogPostMarkdown } from './BlogPostMarkdown';

describe('<BlogPostMarkdown />', () => {
  it('should render content', () => {
    render(<BlogPostMarkdown>Hello world!</BlogPostMarkdown>);

    const content = screen.getByText('Hello world!');

    expect(content).toBeInTheDocument();
  });

  it('should render markdown content', () => {
    render(<BlogPostMarkdown># Hello world!</BlogPostMarkdown>);

    const content = screen.getByText('Hello world!');

    expect(content.tagName).toBe('H1');
  });

  it('should render styled code snippets', () => {
    const code = '```javascript\nHello world\n```';
    render(<BlogPostMarkdown>{code}</BlogPostMarkdown>);

    const codeSnippet = screen.getByTestId('code-snippet');

    expect(codeSnippet).toBeInTheDocument();
  });
});
