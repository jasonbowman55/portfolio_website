import BackLink from '../../../components/ui/BackLink'
import Tag from '../../../components/ui/Tag'
import LinkPreview from '../../../components/ui/LinkPreview'
import ContentBefore from './content-before.mdx'
import ContentAfter from './content-after.mdx'

export default function FourByFourByFortyEightPage() {
  return (
    <div className="mx-auto max-w-[100rem] px-4 py-16">
      <BackLink href="/hobbies/annual-challenge">Back to Annual Challenge</BackLink>

      <p className="eyebrow mb-4">Freshman Year Spring Break · March 2023</p>
      <h1 className="font-display text-4xl font-semibold text-ink md:text-5xl">4 x 4 x 48</h1>
      <p className="mt-4 text-lg text-body">Run 4 miles every 4 hours, for 48 hours.</p>
      <div className="mt-6 flex flex-wrap gap-2">
        <Tag tone="copper">Physical Challenge</Tag>
        <Tag tone="copper">Endurance</Tag>
        <Tag tone="copper">Video</Tag>
      </div>

      <div className="blueprint-frame mt-10 overflow-hidden rounded-lg border border-line">
        <img src="/images/hobbies/collin_ket_running.jpeg" alt="Collin and Ket running" className="w-full" />
      </div>

      <div className="prose-field mt-10">
        <ContentBefore />
      </div>

      <LinkPreview
        href="https://youtu.be/OFPg18zu_NY?si=sebGKcoNgXRix0mu&t=1"
        className="blueprint-frame mt-6 block overflow-hidden rounded-lg border border-line"
      >
        <img src="https://img.youtube.com/vi/OFPg18zu_NY/0.jpg" alt="4 x 4 x 48 video" className="w-full" />
      </LinkPreview>
      <p className="mt-3 text-center text-sm italic text-muted">Click to watch the full video on YouTube</p>

      <div className="prose-field mt-10">
        <ContentAfter />
      </div>
    </div>
  )
}
