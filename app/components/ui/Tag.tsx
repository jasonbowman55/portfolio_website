export default function Tag({ children }: { children: React.ReactNode; tone?: 'signal' | 'copper' }) {
  return (
    <span className="text-sm text-muted [&:not(:first-child)]:before:mr-2 [&:not(:first-child)]:before:content-['·']">
      {children}
    </span>
  )
}
