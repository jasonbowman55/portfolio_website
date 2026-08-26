import PageHeader from '../components/ui/PageHeader'
import LinkPreview from '../components/ui/LinkPreview'

const HMC_URL = 'https://www.hmc.edu/'

const professors = [
  {
    name: 'Professor Albert Dato',
    image: '/images/prof_dato.jpeg',
    email: 'adato@g.hmc.edu',
    bio: 'Albert Dato, PhD, researches the synthesis and applications of nanomaterials. He directs the Energy & Nanomaterials Lab, developing solutions to energy and environmental challenges through advanced materials.',
    myExperience: "Aside from coursework with Prof. Dato in Materials Engineering, he has been my research advisor for almost two years. I've worked on production methods for thin-film nanocomposites of resin combined with graphite and graphene nanomaterials. Working with Prof. Dato has been rewarding — he provides flexibility and independence while staying available for consistent feedback and technical support. During my time in his lab I refined my laboratory skills and worked with equipment including his 4-point probe.",
  },
  {
    name: 'Professor Josh Brake',
    image: '/images/prof_brake.jpeg',
    email: 'jbrake@g.hmc.edu',
    bio: 'Josh Brake is an Assistant Professor in the Engineering Department at Harvey Mudd College, teaching digital electronics, embedded systems, and optics, with a professional background in electrical engineering and optics.',
    myExperience: "My main interaction with Prof. Brake was in his Microprocessor Design & Application class, where I completed embedded systems labs on ARM STM32 MCUs and iCE40 FPGAs and learned bare-metal C and SystemVerilog. My teammate and I later completed Squat Hero, a final project analyzing squat form using the MCU, multiple IMUs, and the FPGA. Prof. Brake's hands-on approach and availability made this class highly effective for developing my embedded systems knowledge.",
  },
  {
    name: 'Professor Erik Spjut',
    image: '/images/prof_spjut.jpeg',
    email: 'spjut@g.hmc.edu',
    bio: 'Erik Spjut, PhD, professor of engineering and Union Oil Company Engineering Design Fellow, has extensive experience in radiative heat transfer, process control, automatic test equipment, and data acquisition.',
    myExperience: 'My interactions with Prof. Spjut center on High Power Rocketry coursework, where we learned construction, simulation, and data analysis for stable rocket flight. For our final project, my teammate and I developed an actively controlled flywheel to counteract rocket rotation during ascent — mechanical design, data capture, UART communication, and PID control tuning. His expertise and availability made him an invaluable resource throughout the class.',
  },
  {
    name: 'Professor Jason Gallicchio',
    image: '/images/prof_gallicchio.jpeg',
    email: 'jason@g.hmc.edu',
    bio: 'Jason Gallicchio, PhD, specializes in experimental cosmology. He researched polarization of the Cosmic Microwave Background at the South Pole Telescope and is interested in fundamental tests of quantum mechanics.',
    myExperience: "Prof. Gallicchio advises my engineering capstone (Clinic) project on humanitarian demining. I act as team lead, managing a six-person team evaluating sensor options and testing RADAR, LiDAR, and multispectral sensing for landmine detection — drone-deployed systems to support demining efforts in conflict zones. He's been instrumental in our project's success, bringing critical thinking to sensor and drone systems.",
  },
]

// Splits "Harvey Mudd College" out of a plain bio string and links it —
// the bios above are plain data, not markdown, so this is the simplest way
// to hyperlink the one recurring phrase without hand-writing JSX per bio.
function linkifyHMC(text: string) {
  const phrase = 'Harvey Mudd College'
  const parts = text.split(phrase)
  if (parts.length === 1) return text
  return parts.flatMap((part, i) =>
    i === 0
      ? [part]
      : [
          <LinkPreview key={i} href={HMC_URL} className="text-signal hover:text-signal-hover">
            {phrase}
          </LinkPreview>,
          part,
        ]
  )
}

export default function ReferencesPage() {
  return (
    <div className="mx-auto max-w-[100rem] px-4 py-16">
      <PageHeader
        eyebrow={
          <LinkPreview href={HMC_URL} className="hover:text-signal">
            Harvey Mudd College
          </LinkPreview>
        }
        title="References"
        subtitle="Professors and mentors from my undergraduate work who can speak to it firsthand."
      />

      <div className="space-y-6">
        {professors.map((prof) => (
          <div key={prof.name} className="rounded-lg border border-line bg-surface p-6 md:p-8">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center text-center md:col-span-1">
                <img
                  src={prof.image}
                  alt={prof.name}
                  className="mb-4 h-40 w-40 rounded-lg border border-line object-cover"
                />
                <h3 className="font-display font-medium text-ink">{prof.name}</h3>
                <a href={`mailto:${prof.email}`} className="mt-1 text-sm text-signal hover:text-signal-hover">
                  {prof.email}
                </a>
              </div>

              <div className="md:col-span-2">
                <div className="mb-5">
                  <p className="eyebrow mb-2">Background</p>
                  <p className="text-sm text-body">{linkifyHMC(prof.bio)}</p>
                </div>
                <div>
                  <p className="eyebrow mb-2">My Experience</p>
                  <p className="text-sm leading-relaxed text-body">{linkifyHMC(prof.myExperience)}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
