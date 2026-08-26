import BackLink from '../../components/ui/BackLink'
import Tag from '../../components/ui/Tag'
import LinkPreview from '../../components/ui/LinkPreview'
import Content from './content.mdx'

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

      <h2 className="mt-14 font-display text-2xl font-semibold text-ink">Final Presentation &amp; Report</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <LinkPreview
          href="https://docs.google.com/presentation/d/1_0Llwfu8Jsjl5NIC-cJGMTuoJK3M8C1EhikOfAFxz1I/edit?slide=id.g2678e73fc13_0_3598#slide=id.g2678e73fc13_0_3598"
          className="block rounded-lg border border-line bg-surface p-6 transition hover:border-signal/50"
        >
          <h3 className="font-display font-semibold text-ink">Final Presentation</h3>
          <p className="mt-2 text-sm text-body">Slides covering ideation, design, and results.</p>
          <span className="mt-3 inline-block text-xs text-signal">View presentation →</span>
        </LinkPreview>
        <LinkPreview
          href="https://docs.google.com/document/d/1vgHfELuwVxcW2uiOUBaa0Wkof7DsADcb6Q87iQl9To8/edit?tab=t.0"
          className="block rounded-lg border border-line bg-surface p-6 transition hover:border-signal/50"
        >
          <h3 className="font-display font-semibold text-ink">Final Report</h3>
          <p className="mt-2 text-sm text-body">Full technical writeup of the project.</p>
          <span className="mt-3 inline-block text-xs text-signal">View report →</span>
        </LinkPreview>
      </div>
    </div>
  )
}
