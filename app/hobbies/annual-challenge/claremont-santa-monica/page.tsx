import BackLink from '../../../components/ui/BackLink'
import Tag from '../../../components/ui/Tag'
import ContentBefore from './content-before.mdx'

export default function ClaremontSantaMonicaPage() {
  return (
    <div className="mx-auto max-w-[100rem] px-4 py-16">
      <BackLink href="/hobbies/annual-challenge">Back to Spring Break Challenges</BackLink>

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

      <a
        href="https://youtu.be/lf9WsE66T4Y?si=XobELmKbgYPL-w4h&t=1"
        target="_blank"
        rel="noopener noreferrer"
        className="group blueprint-frame relative mx-auto mt-10 block max-w-3xl overflow-hidden rounded-lg border border-line"
      >
        <img
          src="/images/hobbies/map_claremont-sm.jpeg"
          alt="Our 135-mile route through LA County"
          className="w-full transition-opacity duration-300 group-hover:opacity-0"
        />
        <img
          src="https://img.youtube.com/vi/lf9WsE66T4Y/0.jpg"
          alt="Claremont to Santa Monica video thumbnail"
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
