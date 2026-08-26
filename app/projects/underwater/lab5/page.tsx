import Link from 'next/link'
import BackLink from '../../../components/ui/BackLink'
import Tag from '../../../components/ui/Tag'
import LinkPreview from '../../../components/ui/LinkPreview'
import Content from './content.mdx'

export default function Lab5Page() {
  return (
    <div className="mx-auto max-w-[100rem] px-4 py-16">
      <BackLink href="/projects/underwater">Back to Underwater Robot</BackLink>

      <p className="eyebrow mb-4">Lab 5 · E80</p>
      <h1 className="font-display text-4xl font-semibold text-ink md:text-5xl">Acoustics</h1>
      <p className="mt-4 text-lg text-body">
        Underwater acoustic communication and sonar sensing.
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        <Tag>E80</Tag>
        <Tag>Individual Lab</Tag>
      </div>

      <div className="blueprint-frame mt-10 max-w-md overflow-hidden rounded-lg border border-line">
        <img src="/images/underwater/lab5.jpeg" alt="Lab 5: Acoustics" className="w-full" />
      </div>

      <div className="prose-field mt-10">
        <Content />
      </div>

      <LinkPreview
        href="https://drive.google.com/file/d/1S6-E1Udu2Aq7KfW4fAKOh_NWmZMmNDmb/view?usp=sharing"
        className="mt-10 inline-flex items-center gap-2 rounded-lg border border-signal/40 bg-signal-dim px-6 py-3 text-sm text-signal transition hover:border-signal hover:bg-signal/20"
      >
        View full lab report (PDF) →
      </LinkPreview>

      <div className="mt-14 flex flex-col gap-3 border-t border-line pt-10 sm:flex-row">
        <Link
          href="/projects/underwater/lab4"
          className="flex-1 rounded-lg border border-line bg-surface px-6 py-3 text-center font-medium text-ink transition hover:border-signal/50"
        >
          ← Lab 4
        </Link>
        <Link
          href="/projects/underwater"
          className="flex-1 rounded-lg border border-line bg-surface px-6 py-3 text-center font-medium text-ink transition hover:border-signal/50"
        >
          All Labs
        </Link>
        <Link
          href="/projects/underwater/lab6"
          className="flex-1 rounded-lg bg-signal px-6 py-3 text-center font-semibold text-[#17130f] transition hover:bg-signal-hover"
        >
          Lab 6 →
        </Link>
      </div>
    </div>
  )
}
