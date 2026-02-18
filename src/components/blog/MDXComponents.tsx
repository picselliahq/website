import type { MDXComponents } from 'mdx/types';
import { Children, isValidElement, type ReactNode } from 'react';
import Image from 'next/image';

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

/** Recursively extract plain text from React children (handles bold, italic, links, etc.) */
function extractText(node: ReactNode): string {
  if (typeof node === 'string') return node;
  if (typeof node === 'number') return String(node);
  if (!node) return '';
  if (isValidElement(node)) {
    return extractText((node.props as { children?: ReactNode }).children);
  }
  if (Array.isArray(node)) {
    return node.map(extractText).join('');
  }
  return Children.toArray(node).map(extractText).join('');
}

function createHeading(level: 2 | 3 | 4) {
  const Tag = `h${level}` as const;
  return function Heading({ children }: { children?: React.ReactNode }) {
    const text = extractText(children);
    const id = slugify(text);
    return (
      <Tag id={id} style={{ scrollMarginTop: '6rem' }}>
        <a href={`#${id}`} style={{ color: 'inherit', textDecoration: 'none' }}>
          {children}
        </a>
      </Tag>
    );
  };
}

export const mdxComponents: MDXComponents = {
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),

  a: ({ href, children, ...props }) => {
    const isExternal = href?.startsWith('http');
    return (
      <a
        href={href}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        style={{ color: 'var(--picsellia-green)', textDecoration: 'underline', textUnderlineOffset: '3px' }}
        {...props}
      >
        {children}
      </a>
    );
  },

  img: ({ src, alt }) => {
    if (!src) return null;
    return (
      <span style={{ display: 'block', margin: '2rem 0' }} role="figure">
        <Image
          src={src}
          alt={alt || ''}
          width={800}
          height={450}
          style={{ width: '100%', height: 'auto', borderRadius: '12px', border: '1px solid var(--border)' }}
        />
        {alt && (
          <span style={{ display: 'block', marginTop: '0.5rem', fontSize: '0.875rem', color: 'var(--secondary-label)', textAlign: 'center' }}>
            {alt}
          </span>
        )}
      </span>
    );
  },

  blockquote: ({ children }) => (
    <blockquote
      style={{
        borderLeft: '3px solid var(--picsellia-green)',
        paddingLeft: '1.5rem',
        margin: '1.5rem 0',
        color: 'var(--secondary-label)',
        fontStyle: 'italic',
      }}
    >
      {children}
    </blockquote>
  ),

  pre: ({ children, ...props }) => (
    <pre
      style={{
        backgroundColor: 'var(--secondary-system-background)',
        border: '1px solid var(--border)',
        borderRadius: '12px',
        padding: '1.25rem',
        overflowX: 'auto',
        fontSize: '0.875rem',
        lineHeight: '1.7',
        margin: '1.5rem 0',
      }}
      {...props}
    >
      {children}
    </pre>
  ),

  code: ({ children, ...props }) => {
    // Inline code (not inside <pre>)
    const isInline = typeof children === 'string' && !children.includes('\n');
    if (isInline) {
      return (
        <code
          style={{
            backgroundColor: 'var(--tertiary-system-background)',
            border: '1px solid var(--border)',
            borderRadius: '4px',
            padding: '0.15rem 0.4rem',
            fontSize: '0.85em',
          }}
          {...props}
        >
          {children}
        </code>
      );
    }
    return <code {...props}>{children}</code>;
  },

  table: ({ children }) => (
    <div style={{ overflowX: 'auto', margin: '1.5rem 0' }}>
      <table
        style={{
          width: '100%',
          borderCollapse: 'collapse',
          fontSize: '0.9rem',
        }}
      >
        {children}
      </table>
    </div>
  ),

  th: ({ children }) => (
    <th
      style={{
        textAlign: 'left',
        padding: '0.75rem 1rem',
        borderBottom: '2px solid var(--border)',
        color: 'var(--label)',
        fontWeight: 600,
      }}
    >
      {children}
    </th>
  ),

  td: ({ children }) => (
    <td
      style={{
        padding: '0.75rem 1rem',
        borderBottom: '1px solid var(--border)',
        color: 'var(--secondary-label)',
      }}
    >
      {children}
    </td>
  ),

  hr: () => (
    <hr
      style={{
        border: 'none',
        height: '1px',
        backgroundColor: 'var(--border)',
        margin: '2.5rem 0',
      }}
    />
  ),

  ul: ({ children }) => (
    <ul style={{ paddingLeft: '1.5rem', margin: '1rem 0' }}>
      {children}
    </ul>
  ),

  ol: ({ children }) => (
    <ol style={{ paddingLeft: '1.5rem', margin: '1rem 0' }}>
      {children}
    </ol>
  ),

  li: ({ children }) => (
    <li style={{ marginBottom: '0.5rem', color: 'var(--prose-body)' }}>
      {children}
    </li>
  ),

  p: ({ children }) => (
    <p style={{ margin: '1.25rem 0', lineHeight: '1.8', color: 'var(--prose-body)' }}>
      {children}
    </p>
  ),
};
