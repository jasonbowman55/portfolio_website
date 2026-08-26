import type { MDXComponents } from 'mdx/types'
import LinkPreview from './app/components/ui/LinkPreview'

// Required by Next.js App Router when using MDX. Headings, paragraphs, lists,
// images, etc. are left as plain HTML elements — the `.prose-field` class
// (see app/globals.css) already styles bare h2/h3/p/ul/img/blockquote, so
// hand-written markdown just works without any extra setup here.
//
// The one override: every markdown link `[text](url)` renders through
// LinkPreview, which shows a hover-preview card for external links and
// behaves like a normal link for internal/mailto ones.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: (props) => <LinkPreview {...props} />,
    ...components,
  }
}
