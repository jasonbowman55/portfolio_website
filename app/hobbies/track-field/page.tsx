import BackLink from '../../components/ui/BackLink'
import Content from './content.mdx'

export default function TrackFieldPage() {
  return (
    <div className="mx-auto max-w-[100rem] px-4 py-16">
      <BackLink href="/hobbies">Back to Hobbies</BackLink>

      <p className="eyebrow mb-4">A Decade in Track & Field</p>
      <h1 className="font-display text-4xl font-semibold text-ink md:text-5xl">Sports & Athletics</h1>
      <p className="mt-4 text-lg text-body">What a decade of throwing taught me about pressure, failure, and growth.</p>

      <div className="blueprint-frame mt-10 overflow-hidden rounded-lg border border-line">
        <img src="/images/hobbies/shot.jpeg" alt="Shot put competition" className="w-full" />
      </div>

      <div className="prose-field mt-10">
        <Content />
      </div>
    </div>
  )
}
