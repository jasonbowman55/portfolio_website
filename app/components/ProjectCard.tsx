'use client'

interface ProjectCardProps {
  title: string
  description: string
  image?: string
  link: string
  tags?: string[]
  status?: string
  ctaLabel?: string
}

export default function ProjectCard({ title, description, image, link, tags = [], status, ctaLabel }: ProjectCardProps) {
  const external = link.startsWith('http')
  const inactive = link === '#'

  const inner = (
    <div className="blueprint-frame relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-raised">
      {image && (
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      )}

      {/* Always-visible bottom scrim + title, so the project reads before any hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

      {/* Extra darkening on hover so text stays readable over bright images */}
      <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/55" />

      <div className="absolute inset-x-0 bottom-0 p-5">
        <h3 className="font-display text-lg font-semibold text-white">{title}</h3>

        {/* Description + status/CTA only reveal on hover */}
        <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-300 ease-out group-hover:mt-2 group-hover:grid-rows-[1fr] group-hover:opacity-100">
          <div className="overflow-hidden">
            <p className="text-sm text-white/85">{description}</p>
            {tags.length > 0 && <p className="mt-2 text-xs text-white/60">{tags.join(' · ')}</p>}
            {inactive ? (
              <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-copper">
                <span className="h-1.5 w-1.5 rounded-full bg-copper" />
                {status ?? 'In Progress'}
              </span>
            ) : (
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-white">
                {ctaLabel ?? (external ? 'Visit project' : 'View project')}
                <span className="transition group-hover:translate-x-1">→</span>
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  )

  if (inactive) {
    return <div className="group">{inner}</div>
  }

  return (
    <a
      href={link}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="group block"
    >
      {inner}
    </a>
  )
}
