import BackLink from '../../components/ui/BackLink'
import Tag from '../../components/ui/Tag'
import LinkPreview from '../../components/ui/LinkPreview'
import TeamGrid from '../../components/TeamGrid'
import Content from './content.mdx'

const team = [
  { name: 'Jason Bowman (me)', link: 'https://www.linkedin.com/in/jasonbbowman/', image: '/images/headshot.jpeg' },
  { name: 'Ket Hollingsworth', link: 'https://www.linkedin.com/in/ket-hollingsworth/' },
]

export default function SquatHeroPage() {
  return (
    <div className="mx-auto max-w-[100rem] px-4 py-16">
      <BackLink href="/">Back to Home</BackLink>

      <p className="eyebrow mb-4">E155 Final Project</p>
      <h1 className="font-display text-4xl font-semibold text-ink md:text-5xl">Squat Hero</h1>
      <p className="mt-4 text-lg text-body">
        Real-time squat form and depth feedback, built from an MCU, IMUs, and an FPGA.
      </p>

      <div className="mt-6 flex flex-wrap items-center gap-2">
        <Tag>ARM STM32</Tag>
        <Tag>iCE40 FPGA</Tag>
        <Tag>IMU Sensors</Tag>
        <Tag>Embedded C</Tag>
        <span className="inline-flex items-center gap-1.5 text-xs text-copper">
          <span className="h-1.5 w-1.5 rounded-full bg-copper" />
          Ongoing project
        </span>
      </div>

      <div className="blueprint-frame mt-10 max-w-md overflow-hidden rounded-lg border border-line">
        <img src="/images/full_mcu_imu.jpeg" alt="Squat Hero MCU and IMU hardware" className="w-full" />
      </div>

      <div className="prose-field mt-10">
        <Content />
      </div>

      <h2 className="mt-14 font-display text-2xl font-semibold text-ink">The Team</h2>
      <TeamGrid members={team} />

      <LinkPreview
        href="https://jasonbowman55.github.io/squat_hero_website/"
        className="mt-10 inline-flex items-center gap-2 rounded-lg border border-signal/40 bg-signal-dim px-6 py-3 text-sm text-signal transition hover:border-signal hover:bg-signal/20"
      >
        View full project site →
      </LinkPreview>
    </div>
  )
}
