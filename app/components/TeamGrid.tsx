import LinkPreview from './ui/LinkPreview'

interface TeamMember {
  name: string
  role?: string
  link: string
  image?: string
}

function initials(name: string) {
  return name
    .replace(/\(.*?\)/g, '')
    .trim()
    .split(/\s+/)
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

export default function TeamGrid({ members }: { members: TeamMember[] }) {
  return (
    <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
      {members.map((member) => (
        <LinkPreview
          key={member.name}
          href={member.link}
          className="block rounded-lg border border-line bg-surface p-4 text-center transition hover:border-signal/50"
        >
          {member.image ? (
            <img
              src={member.image}
              alt={member.name}
              className="mx-auto mb-3 h-16 w-16 rounded-full border border-line object-cover"
            />
          ) : (
            <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full border border-line bg-raised font-display text-sm font-semibold text-muted">
              {initials(member.name)}
            </div>
          )}
          <p className="text-sm font-medium text-ink">{member.name}</p>
          {member.role && <p className="mt-0.5 text-xs text-muted">{member.role}</p>}
        </LinkPreview>
      ))}
    </div>
  )
}
