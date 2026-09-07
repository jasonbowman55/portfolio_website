interface Document {
  title: string
  description: string
  href: string
  cta?: string
}

function DocumentIcon() {
  return (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m1 5H8a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  )
}

export default function DocumentGrid({ documents }: { documents: Document[] }) {
  return (
    <div className="mt-6 grid gap-4 sm:grid-cols-2">
      {documents.map((doc) => (
        <a
          key={doc.title}
          href={doc.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-start gap-4 rounded-lg border border-line bg-surface p-6 transition hover:border-signal/50"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-signal-dim text-signal">
            <DocumentIcon />
          </div>
          <div>
            <h3 className="font-display font-semibold text-ink">{doc.title}</h3>
            <p className="mt-1 text-sm text-body">{doc.description}</p>
            <span className="mt-2 inline-block text-xs text-signal">{doc.cta ?? 'View →'}</span>
          </div>
        </a>
      ))}
    </div>
  )
}
