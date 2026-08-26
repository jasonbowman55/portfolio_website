import Link from 'next/link'

export default function BackLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group mb-8 inline-flex items-center gap-2 text-xs text-muted transition hover:text-signal"
    >
      <span className="transition group-hover:-translate-x-1">←</span>
      {children}
    </Link>
  )
}
