import BackLink from '../../../components/ui/BackLink'
import Tag from '../../../components/ui/Tag'
import LinkPreview from '../../../components/ui/LinkPreview'
import Content from './content.mdx'

export default function Lab5Page() {
  return (
    <div className="mx-auto max-w-[100rem] px-4 py-16">
      <BackLink href="/projects/microprocessor">Back to Microprocessor Design</BackLink>

      <p className="eyebrow mb-4">Lab 5 · E155</p>
      <h1 className="font-display text-4xl font-semibold text-ink md:text-5xl">Interrupts</h1>
      <p className="mt-4 text-lg text-body">
        Reading RPM and direction off a DC motor&apos;s quadrature encoders using external
        interrupts on the STM32, printed live to the Segger debug terminal.
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        <Tag>STM32L432KC</Tag>
        <Tag>External Interrupts (EXTI)</Tag>
        <Tag>Quadrature Encoding</Tag>
        <Tag>Oscilloscope Verification</Tag>
      </div>

      <div className="blueprint-frame mt-10 max-w-md overflow-hidden rounded-lg border border-line">
        <img src="/images/microprocessor/lab5/hardware.jpeg" alt="Lab 5 hardware" className="w-full" />
      </div>

      <div className="prose-field mt-10">
        <Content />
      </div>

      <LinkPreview
        href="https://github.com/jasonbowman55/microP-lab5.git"
        className="mt-10 inline-flex items-center gap-2 rounded-lg border border-signal/40 bg-signal-dim px-6 py-3 text-sm text-signal transition hover:border-signal hover:bg-signal/20"
      >
        View Lab 5 on GitHub →
      </LinkPreview>

      <div className="mt-14 flex flex-col gap-3 border-t border-line pt-10 sm:flex-row">
        <a
          href="/projects/microprocessor/lab4"
          className="flex-1 rounded-lg border border-line bg-surface px-6 py-3 text-center font-medium text-ink transition hover:border-signal/50"
        >
          ← Lab 4
        </a>
        <a
          href="/projects/microprocessor"
          className="flex-1 rounded-lg border border-line bg-surface px-6 py-3 text-center font-medium text-ink transition hover:border-signal/50"
        >
          All Labs
        </a>
        <a
          href="/projects/microprocessor/lab6"
          className="flex-1 rounded-lg bg-signal px-6 py-3 text-center font-semibold text-[#17130f] transition hover:bg-signal-hover"
        >
          Lab 6 →
        </a>
      </div>
    </div>
  )
}
