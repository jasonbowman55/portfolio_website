import Link from 'next/link'
import PageHeader from '../components/ui/PageHeader'

const hobbies = [
  {
    title: 'Annual Spring Break Challenge',
    description: 'Each spring break, my friends and I take on a new physical and mental challenge — from the 4x4x48 endurance run to a 135-mile bike ride across LA County.',
    image: '/images/hobbies/collin_ket_running.jpeg',
    link: '/hobbies/annual-challenge',
    cta: 'View challenges',
  },
  {
    title: 'Track & Field',
    description: 'A decade-long journey in Track & Field, from 7th grade through college competition — and what an individual sport taught me about pressure, failure, and growth.',
    image: '/images/hobbies/shot.jpeg',
    link: '/hobbies/track-field',
    cta: 'Read more',
  },
]

export default function HobbiesPage() {
  return (
    <div className="mx-auto max-w-[100rem] px-4 py-16">
      <PageHeader
        eyebrow="Off the Clock"
        title="Hobbies & Personal Interests"
        subtitle="Engineering is one part of who I am. These pages are the other part — the pursuits that keep me grounded, challenged, and connected to the world outside the lab."
      />

      <div className="grid gap-6 sm:grid-cols-2">
        {hobbies.map((hobby) => (
          <Link
            key={hobby.title}
            href={hobby.link}
            className="blueprint-frame group flex flex-col overflow-hidden rounded-lg border border-line bg-surface transition hover:border-copper/50 hover:shadow-lg hover:shadow-copper/10"
          >
            <div className="relative h-56 w-full overflow-hidden bg-raised">
              <img
                src={hobby.image}
                alt={hobby.title}
                className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-display text-xl font-semibold text-ink transition group-hover:text-copper">
                {hobby.title}
              </h3>
              <p className="mt-2 flex-1 text-sm text-body">{hobby.description}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-xs text-copper">
                {hobby.cta}
                <span className="transition group-hover:translate-x-1">→</span>
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div className="prose-field mt-16 max-w-3xl border-t border-line pt-10">
        <h2>Why Hobbies Matter</h2>
        <p>
          These pursuits aren't separate from my engineering work — they inform it. The discipline
          from athletics, the problem-solving from physical challenges, and the teamwork from
          collaborative adventures all translate directly into how I approach technical problems.
          They remind me that engineering, at its core, is about understanding systems, adapting
          to constraints, and pushing beyond what seems possible.
        </p>
        <p>
          Whether I'm tuning a PID controller or pushing through mile 100 on a bike, the mindset
          is the same: break down the problem, trust the process, and keep moving forward.
        </p>
      </div>
    </div>
  )
}
