import BackLink from '../../../components/ui/BackLink'
import Tag from '../../../components/ui/Tag'
import LinkPreview from '../../../components/ui/LinkPreview'
import ContentBefore from './content-before.mdx'
import ContentAfter from './content-after.mdx'

export default function ClaremontSantaMonicaPage() {
  return (
    <div className="mx-auto max-w-[100rem] px-4 py-16">
      <BackLink href="/hobbies/annual-challenge">Back to Annual Challenge</BackLink>

      <p className="eyebrow mb-4">Sophomore Year Spring Break · November 2024</p>
      <h1 className="font-display text-4xl font-semibold text-ink md:text-5xl">
        Claremont to Santa Monica &amp; Back
      </h1>
      <p className="mt-4 text-lg text-body">135 miles, two days, zero training.</p>
      <div className="mt-6 flex flex-wrap gap-2">
        <Tag tone="copper">Physical Challenge</Tag>
        <Tag tone="copper">Cycling</Tag>
        <Tag tone="copper">Video</Tag>
      </div>

      <div className="blueprint-frame mt-10 overflow-hidden rounded-lg border border-line">
        <img src="/images/hobbies/map_claremont-sm.jpeg" alt="Our 135-mile route through LA County" className="w-full" />
      </div>

      <div className="prose-field mt-10">
        <ContentBefore />
      </div>

      <LinkPreview
        href="https://youtu.be/lf9WsE66T4Y?si=XobELmKbgYPL-w4h&t=1"
        className="blueprint-frame mt-6 block overflow-hidden rounded-lg border border-line"
      >
        <img src="https://img.youtube.com/vi/lf9WsE66T4Y/0.jpg" alt="Claremont to Santa Monica video" className="w-full" />
      </LinkPreview>
      <p className="mt-3 text-center text-sm italic text-muted">Click to watch the full journey on YouTube</p>

      <div className="prose-field mt-10">
        <ContentAfter />
      </div>
    </div>
  )
}
