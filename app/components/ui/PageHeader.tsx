export default function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: React.ReactNode
  title: string
  subtitle?: string
}) {
  return (
    <div className="mb-12 max-w-3xl">
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h1 className="font-display text-4xl font-semibold text-ink md:text-5xl">{title}</h1>
      {subtitle && <p className="mt-4 text-lg text-body">{subtitle}</p>}
    </div>
  )
}
