import React from 'react';
import styles from './BlogPostMarkdown.module.css';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import javascript from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx';
import markdown from 'react-syntax-highlighter/dist/cjs/languages/prism/markdown';
import bash from 'react-syntax-highlighter/dist/cjs/languages/prism/bash';
import { vscDarkPlus as syntaxStyle } from 'react-syntax-highlighter/dist/cjs/styles/prism';

SyntaxHighlighter.registerLanguage('javascript', javascript);
SyntaxHighlighter.registerLanguage('jsx', jsx);
SyntaxHighlighter.registerLanguage('markdown', markdown);
SyntaxHighlighter.registerLanguage('bash', bash);

type BlogPostMarkdownProps = {
  children: string;
};

export const BlogPostMarkdown = ({ children }: BlogPostMarkdownProps) => (
  <ReactMarkdown
    rehypePlugins={[rehypeRaw]}
    remarkPlugins={[remarkGfm]}
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
      a(props) {
        return <a className="link" {...props} />;
      },
      blockquote(props) {
        return <blockquote className={styles.blockquote} {...props} />;
      },
    }}
  >
    {children}
  </ReactMarkdown>
);
