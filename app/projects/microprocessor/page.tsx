import Link from 'next/link'
import BackLink from '../../components/ui/BackLink'
import Tag from '../../components/ui/Tag'
import ProjectCard from '../../components/ProjectCard'
import Content from './content.mdx'

const labs = [
  { title: 'Lab 1: FPGA and MCU Setup', description: 'Introduction to FPGA and microcontroller platforms, setting up development environments for ARM STM32 and the iCE40 FPGA board.', link: '/projects/microprocessor/lab1', image: '/images/microprocessor/lab1/lab1_circuit.jpeg' },
  { title: 'Lab 2: Time-Multiplexed Dual 7-Segment Display', description: 'A dual 7-segment LED display with time-multiplexing, driven by GPIO outputs and timing control.', link: '/projects/microprocessor/lab2', image: '/images/microprocessor/lab2/lab2_circuit.jpeg' },
  { title: 'Lab 3: Keypad Scanner', description: 'A keypad scanner interface detecting and decoding button presses with GPIO inputs and debouncing logic.', link: '/projects/microprocessor/lab3', image: '/images/microprocessor/lab3/hardware.jpeg' },
  { title: 'Lab 4: Digital Audio', description: 'Generating tones, playing audio files, and digital signal processing on embedded hardware.', link: '/projects/microprocessor/lab4', image: '/images/microprocessor/lab4/circuit_hardware.jpeg' },
  { title: 'Lab 5: Interrupts', description: 'Interrupt-driven programming, configuring handlers, and managing concurrent events in real time.', link: '/projects/microprocessor/lab5', image: '/images/microprocessor/lab5/hardware.jpeg' },
  { title: 'Lab 6: Internet of Things and SPI', description: 'SPI communication and an IoT-connected embedded system with wireless capability.', link: '/projects/microprocessor/lab6', image: '/images/microprocessor/lab6/circuit_pic.jpeg' },
  { title: 'Lab 7: Advanced Encryption Standard', description: 'AES encryption implemented on an embedded platform for secure data processing.', link: '/projects/microprocessor/lab7', image: '/images/microprocessor/lab7/lab1_protoboard.jpeg' },
]

export default function MicroprocessorPage() {
  return (
    <div className="mx-auto max-w-[100rem] px-4 py-16">
      <BackLink href="/">Back to Home</BackLink>

      <p className="eyebrow mb-4">E155</p>
      <h1 className="font-display text-4xl font-semibold text-ink md:text-5xl">
        Microprocessor Design &amp; Application
      </h1>
      <div className="mt-6 flex flex-wrap gap-2">
        <Tag>ARM STM32</Tag>
        <Tag>iCE40 FPGA</Tag>
        <Tag>SystemVerilog</Tag>
      </div>

      <div className="prose-field mt-8 max-w-3xl">
        <Content />
      </div>

      <h2 className="mt-14 font-display text-2xl font-semibold text-ink">Laboratory Exercises</h2>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        {labs.map((lab) => (
          <ProjectCard
            key={lab.title}
            title={lab.title}
            description={lab.description}
            image={lab.image}
            link={lab.link}
            ctaLabel="View lab"
          />
        ))}
      </div>

      <Link
        href="/projects/squat-hero"
        className="blueprint-frame mt-10 block rounded-lg border border-signal/40 bg-gradient-to-r from-signal-dim to-copper-dim p-6 transition hover:border-signal"
      >
        <p className="eyebrow mb-2">Capstone Project</p>
        <h3 className="font-display text-2xl font-semibold text-ink">Squat Hero →</h3>
        <p className="mt-2 text-body">
          MCU, IMU sensors, and FPGA combined into real-time squat form and depth feedback — the
          culmination of the course.
        </p>
      </Link>
    </div>
  )
}
