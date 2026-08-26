import Link from 'next/link'
import BackLink from '../../components/ui/BackLink'
import Content from './content.mdx'

const challenges = [
  {
    title: '4 x 4 x 48',
    subtitle: 'Freshman Year Spring Break',
    description: 'Run 4 miles every 4 hours for 48 hours. Inspired by David Goggins, my roommates Ket Hollingsworth and Collin Fitzpatrick took this on with their own twist: using the 2-hour breaks to learn something new. My job — film, edit, and find creative ways to wake them up every 4 hours.',
    image: '/images/hobbies/collin_ket_running.jpeg',
    link: '/hobbies/annual-challenge/4x4x48',
    cta: 'Watch the journey',
  },
  {
    title: 'Claremont to Santa Monica & Back',
    subtitle: 'Sophomore Year Spring Break',
    description: '135 miles. Two days. Zero training. We biked from Harvey Mudd to Santa Monica and back, stopping at Caltech, JPL, and UCLA along the way — starting with a sprained ankle, post-swim exhaustion, and a 3-hour pre-ride nap.',
    image: '/images/hobbies/map_claremont-sm.jpeg',
    link: '/hobbies/annual-challenge/claremont-santa-monica',
    cta: 'See the adventure',
  },
]

export default function AnnualChallengePage() {
  return (
    <div className="mx-auto max-w-[100rem] px-4 py-16">
      <BackLink href="/hobbies">Back to Hobbies</BackLink>

      <p className="eyebrow mb-4">Spring Break Tradition</p>
      <h1 className="font-display text-4xl font-semibold text-ink md:text-5xl">
        Annual Spring Break Challenge
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-body">
        What started as a wild idea freshman year has become an annual tradition — not for
        competition or recognition, but to test ourselves, spend time together, and create
        stories we'll tell for years.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {challenges.map((c) => (
          <Link
            key={c.title}
            href={c.link}
            className="blueprint-frame group flex flex-col overflow-hidden rounded-lg border border-line bg-surface transition hover:border-copper/50"
          >
            <div className="relative h-52 w-full overflow-hidden bg-raised">
              <img src={c.image} alt={c.title} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <p className="text-xs text-muted">{c.subtitle}</p>
              <h3 className="mt-1 font-display text-xl font-semibold text-ink transition group-hover:text-copper">{c.title}</h3>
              <p className="mt-3 flex-1 text-sm text-body">{c.description}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-xs text-copper">
                {c.cta}
                <span className="transition group-hover:translate-x-1">→</span>
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div className="prose-field mt-16 max-w-3xl border-t border-line pt-10">
        <Content />
      </div>
    </div>
  )
}
