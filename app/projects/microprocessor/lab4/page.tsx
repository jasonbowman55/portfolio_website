import BackLink from '../../../components/ui/BackLink'
import Tag from '../../../components/ui/Tag'
import LinkPreview from '../../../components/ui/LinkPreview'
import Content from './content.mdx'

export default function Lab4Page() {
  return (
    <div className="mx-auto max-w-[100rem] px-4 py-16">
      <BackLink href="/projects/microprocessor">Back to Microprocessor Design</BackLink>

      <p className="eyebrow mb-4">Lab 4 · E155</p>
      <h1 className="font-display text-4xl font-semibold text-ink md:text-5xl">Digital Audio</h1>
      <p className="mt-4 text-lg text-body">
        Driving a speaker with register-level PWM on the STM32L432KC to play &quot;F&uuml;r
        Elise&quot; and &quot;Happy Birthday&quot; &mdash; no CMSIS, just memory-mapped I/O.
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        <Tag>STM32L432KC</Tag>
        <Tag>Memory-Mapped I/O</Tag>
        <Tag>TIM16 PWM</Tag>
        <Tag>Segger</Tag>
      </div>

      <div className="blueprint-frame mt-10 max-w-md overflow-hidden rounded-lg border border-line">
        <img
          src="/images/microprocessor/lab4/circuit_hardware.jpeg"
          alt="Lab 4 hardware"
          className="w-full"
        />
      </div>

      <div className="prose-field mt-10">
        <Content />
      </div>

      <LinkPreview
        href="https://github.com/jasonbowman55/microP-lab4.git"
        className="mt-10 inline-flex items-center gap-2 rounded-lg border border-signal/40 bg-signal-dim px-6 py-3 text-sm text-signal transition hover:border-signal hover:bg-signal/20"
      >
        View Lab 4 on GitHub →
      </LinkPreview>

      <div className="mt-14 flex flex-col gap-3 border-t border-line pt-10 sm:flex-row">
        <a
          href="/projects/microprocessor/lab3"
          className="flex-1 rounded-lg border border-line bg-surface px-6 py-3 text-center font-medium text-ink transition hover:border-signal/50"
        >
          ← Lab 3
        </a>
        <a
          href="/projects/microprocessor"
          className="flex-1 rounded-lg border border-line bg-surface px-6 py-3 text-center font-medium text-ink transition hover:border-signal/50"
        >
          All Labs
        </a>
        <a
          href="/projects/microprocessor/lab5"
          className="flex-1 rounded-lg bg-signal px-6 py-3 text-center font-semibold text-[#17130f] transition hover:bg-signal-hover"
        >
          Lab 5 →
        </a>
      </div>
    </div>
  )
}
