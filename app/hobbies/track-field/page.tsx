import BackLink from '../../components/ui/BackLink'
import Content from './content.mdx'

export default function TrackFieldPage() {
  return (
    <div className="mx-auto max-w-[100rem] px-4 py-16">
      <BackLink href="/hobbies">Back to Hobbies</BackLink>

      <p className="eyebrow mb-4">A Decade in Track & Field</p>
      <h1 className="font-display text-4xl font-semibold text-ink md:text-5xl">Sports & Athletics</h1>
      <p className="mt-4 text-lg text-body">What a decade of throwing taught me about pressure, failure, and growth.</p>
      <p className="mt-3 inline-flex items-center gap-1.5 text-xs text-copper">
        <span className="h-1.5 w-1.5 rounded-full bg-copper" />
        Page in progress — more photos and videos coming soon
      </p>

      <div className="blueprint-frame mt-10 max-w-md overflow-hidden rounded-lg border border-line">
        <img src="/images/hobbies/shot.jpeg" alt="Shot put competition" className="w-full" />
      </div>

      <div className="prose-field mt-10">
        <Content />
      </div>

      <h2 className="mt-14 font-display text-2xl font-semibold text-ink">Photos</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="overflow-hidden rounded-lg border border-line">
          <img src="/images/hobbies/track_team.jpeg" alt="CMS Track & Field throws team" className="w-full" />
        </div>
        <div className="overflow-hidden rounded-lg border border-line">
          <img src="/images/hobbies/track_meet_hug.jpg" alt="At a track meet with my partner" className="w-full" />
        </div>
      </div>

      <h2 className="mt-14 font-display text-2xl font-semibold text-ink">Videos</h2>
      <div className="mt-6 overflow-hidden rounded-lg border border-line bg-surface">
        <div className="aspect-video w-full">
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/fl1rQWMDuas"
            title="Track & Field highlights"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {[1, 2, 3, 4].map((n) => (
          <div key={n} className="rounded-lg border border-line bg-surface p-4">
            <p className="mb-3 text-sm font-medium text-ink">Video {n}</p>
            <video src={`/videos/track-field/track${n}.MOV`} controls className="w-full rounded bg-black" />
          </div>
        ))}
      </div>
    </div>
  )
}
