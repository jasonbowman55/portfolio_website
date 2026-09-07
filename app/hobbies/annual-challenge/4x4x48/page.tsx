import BackLink from '../../../components/ui/BackLink'
import Tag from '../../../components/ui/Tag'
import ContentBefore from './content-before.mdx'

export default function FourByFourByFortyEightPage() {
  return (
    <div className="mx-auto max-w-[100rem] px-4 py-16">
      <BackLink href="/hobbies/annual-challenge">Back to Spring Break Challenges</BackLink>

      <p className="eyebrow mb-4">Freshman Year Spring Break · March 2023</p>
      <h1 className="font-display text-4xl font-semibold text-ink md:text-5xl">4 x 4 x 48</h1>
      <p className="mt-4 text-lg text-body">Run 4 miles every 4 hours, for 48 hours.</p>
      <div className="mt-6 flex flex-wrap gap-2">
        <Tag tone="copper">Physical Challenge</Tag>
        <Tag tone="copper">Endurance</Tag>
        <Tag tone="copper">Video</Tag>
      </div>

      <a
        href="https://youtu.be/OFPg18zu_NY?si=sebGKcoNgXRix0mu&t=1"
        target="_blank"
        rel="noopener noreferrer"
        className="group blueprint-frame relative mt-10 block max-w-md overflow-hidden rounded-lg border border-line"
      >
        <img
          src="/images/hobbies/collin_ket_running.jpeg"
          alt="Collin and Ket running"
          className="w-full transition-opacity duration-300 group-hover:opacity-0"
        />
        <img
          src="https://img.youtube.com/vi/OFPg18zu_NY/0.jpg"
          alt="4 x 4 x 48 video thumbnail"
          className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-black/60">
            <svg className="ml-1 h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </a>
      <p className="mt-3 text-center text-sm italic text-muted">Hover to preview · click to watch on YouTube</p>

      <div className="prose-field mt-10">
        <ContentBefore />
      </div>
    </div>
  )
}
