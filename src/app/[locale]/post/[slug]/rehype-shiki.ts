import { createHighlighter } from 'shiki';
import type { Root, Element, Text, ElementContent } from 'hast';
import type { Plugin } from 'unified';

let highlighterPromise: ReturnType<typeof createHighlighter> | null = null;

function getHighlighter() {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighter({
      themes: ['github-dark'],
      langs: ['python', 'javascript', 'typescript', 'bash', 'json', 'yaml', 'dockerfile', 'markdown', 'shell', 'plaintext'],
    });
  }
  return highlighterPromise;
}

const rehypeShiki: Plugin<[], Root> = () => {
  return async (tree: Root) => {
    const highlighter = await getHighlighter();
    const { visit } = await import('unist-util-visit');

    visit(tree, 'element', (node: Element, index, parent) => {
      if (
        node.tagName !== 'pre' ||
        !node.children[0] ||
        (node.children[0] as Element).tagName !== 'code'
      ) {
        return;
      }

      const codeNode = node.children[0] as Element;
      const className = (codeNode.properties?.className as string[]) || [];
      const langClass = className.find((c) => c.startsWith('language-'));
      const lang = langClass ? langClass.replace('language-', '') : 'plaintext';

      const code = (codeNode.children[0] as Text)?.value || '';

      try {
        // Use codeToHast to get valid hast nodes (not raw HTML strings)
        const hast = highlighter.codeToHast(code, {
          lang,
          theme: 'github-dark',
        });

        // The hast root has a single <pre> element — extract it
        const preElement = hast.children[0] as Element;
        if (parent && typeof index === 'number' && preElement) {
          // Add border-radius and border styling
          preElement.properties = {
            ...preElement.properties,
            style: `${(preElement.properties?.style as string) || ''}; border-radius: 12px; border: 1px solid var(--border); padding: 1.25rem; overflow-x: auto; font-size: 0.875rem; line-height: 1.7; margin: 1.5rem 0;`,
          };
          parent.children[index] = preElement as ElementContent;
        }
      } catch {
        // If highlighting fails, leave the node unchanged
      }
    });
  };
};

export default rehypeShiki;
