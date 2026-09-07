import BackLink from '../../components/ui/BackLink'
import Tag from '../../components/ui/Tag'
import TeamGrid from '../../components/TeamGrid'
import DocumentGrid from '../../components/DocumentGrid'
import Content from './content.mdx'

const team = [
  { name: 'Jason Bowman (me)', link: 'https://www.linkedin.com/in/jasonbbowman/', image: '/images/headshot.jpeg' },
  { name: 'Jordan Stone', link: 'https://www.linkedin.com/in/jordan-stone-844a4b1b8/' },
  { name: 'Erik Spjut', role: 'Professor', link: 'https://www.hmc.edu/about/news/experts/erik-spjut/' },
]

const documents = [
  {
    title: 'Final Presentation',
    description: 'Slides covering ideation, design, and results.',
    href: 'https://docs.google.com/presentation/d/1_0Llwfu8Jsjl5NIC-cJGMTuoJK3M8C1EhikOfAFxz1I/edit?slide=id.g2678e73fc13_0_3598#slide=id.g2678e73fc13_0_3598',
    cta: 'View presentation →',
  },
  {
    title: 'Final Report',
    description: 'Full technical writeup of the project.',
    href: 'https://docs.google.com/document/d/1vgHfELuwVxcW2uiOUBaa0Wkof7DsADcb6Q87iQl9To8/edit?tab=t.0',
    cta: 'View report →',
  },
]

export default function HighPowerRocketryPage() {
  return (
    <div className="mx-auto max-w-[100rem] px-4 py-16">
      <BackLink href="/">Back to Home</BackLink>

      <p className="eyebrow mb-4">E178 Final Project</p>
      <h1 className="font-display text-4xl font-semibold text-ink md:text-5xl">
        Roll Stabilization in High-Power Model Rockets
      </h1>
      <p className="mt-4 text-lg text-body">
        Active control using a brushless motor and flywheel to counteract rocket rotation during ascent.
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        <Tag>Closed-Loop Control System Design</Tag>
        <Tag>Aerodynamic Modeling Using MATLAB</Tag>
        <Tag>Data Acquisition</Tag>
        <Tag>Power Electronics</Tag>
        <Tag>Mechanical Design</Tag>
      </div>

      <div className="blueprint-frame mt-10 max-w-md overflow-hidden rounded-lg border border-line">
        <img src="/images/hpr/desert.jpeg" alt="Launch site in the desert" className="w-full" />
      </div>

      <div className="prose-field mt-10">
        <Content />
      </div>

      <h2 className="mt-14 font-display text-2xl font-semibold text-ink">The Team</h2>
      <TeamGrid members={team} />

      <h2 className="mt-14 font-display text-2xl font-semibold text-ink">Final Presentation &amp; Report</h2>
      <DocumentGrid documents={documents} />

      <h2 className="mt-14 font-display text-2xl font-semibold text-ink">Flight Test Footage</h2>
      <div className="mt-6 rounded-lg border border-line bg-surface p-4">
        <p className="mb-3 text-sm text-body">
          The completed system in flight, as a supplement to the presentation and report above.
        </p>
        <video src="/videos/high-power-rocketry/flight-test.mov" controls className="w-full rounded bg-black" />
      </div>
    </div>
  )
}
