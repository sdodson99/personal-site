import React from 'react';
import styles from './BlogPostMarkdown.module.css';
import ReactMarkdown from 'react-markdown';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import javascript from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import { okaidia as syntaxStyle } from 'react-syntax-highlighter/dist/cjs/styles/prism';

SyntaxHighlighter.registerLanguage('javascript', javascript);

type BlogPostMarkdownProps = {
  children: string;
};

export const BlogPostMarkdown = ({ children }: BlogPostMarkdownProps) => (
  <ReactMarkdown
    components={{
      code({
        style: _style,
        node: _node,
        inline,
        className,
        children,
        ...props
      }) {
        const languageMatch = /language-(\w+)/.exec(className || '');

        const shouldSyntaxHighlight = !inline && languageMatch;

        if (!shouldSyntaxHighlight) {
          return (
            <code className={className} {...props}>
              {children}
            </code>
          );
        }

        return (
          <SyntaxHighlighter
            style={syntaxStyle}
            className={styles.codeSnippet}
            language={languageMatch[1]}
            PreTag="div"
            data-testid="code-snippet"
            {...props}
          >
            {String(children).replace(/\n$/, '')}
          </SyntaxHighlighter>
        );
      },
    }}
  >
    {children}
  </ReactMarkdown>
);
