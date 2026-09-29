// Minimal markdown used by the legal pages (privacy, cookies): **bold**,
// [label](url), and "- " list lines inside a paragraph.

export function renderInline(text: string, linkClass = 'text-[var(--system-orange)] hover:underline'): string {
  // Links first: the Tailwind classes injected below contain "[...]", which
  // the link pattern would otherwise match.
  return text
    .replace(/\[([^\]]*)\]\(([^)]*)\)/g, (_, label: string, href: string) => {
      const external = /^https?:\/\//.test(href) ? ' target="_blank" rel="noopener noreferrer"' : '';
      return `<a href="${href}"${external} class="${linkClass}">${label}</a>`;
    })
    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-[var(--label)] font-semibold">$1</strong>');
}

// Split a paragraph into runs of plain lines and "- " list lines, so a bold
// heading followed by a list renders as a heading + <ul>.
export function groupLines(paragraph: string): { list: boolean; lines: string[] }[] {
  const blocks: { list: boolean; lines: string[] }[] = [];
  for (const line of paragraph.split('\n')) {
    const list = line.startsWith('- ');
    const last = blocks[blocks.length - 1];
    const content = list ? line.slice(2) : line;
    if (last && last.list === list) last.lines.push(content);
    else blocks.push({ list, lines: [content] });
  }
  return blocks;
}
