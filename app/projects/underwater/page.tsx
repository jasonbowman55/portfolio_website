import BackLink from '../../components/ui/BackLink'
import Tag from '../../components/ui/Tag'
import ProjectCard from '../../components/ProjectCard'
import TeamGrid from '../../components/TeamGrid'
import DocumentGrid from '../../components/DocumentGrid'
import ContentIntro from './content-intro.mdx'
import ContentReflections from './content-reflections.mdx'
import ContentTeamNote from './content-team-note.mdx'

const team = [
  { name: 'Jason Bowman (me)', link: 'https://www.linkedin.com/in/jasonbbowman/', image: '/images/headshot.jpeg' },
  { name: 'Rebecca Preis', link: 'https://www.linkedin.com/in/rebecca-preis/' },
  { name: 'Mikayla Mann', link: 'https://www.linkedin.com/in/mikayla-mann/' },
  { name: 'Zhian Zhou', link: 'https://www.linkedin.com/in/zhian-zhou-14ba8b325/' },
]

const labs = [
  { title: 'Lab 1: Going Autonomous', description: 'Implementing autonomous navigation with basic control algorithms.', link: '/projects/underwater/lab1', image: '/images/underwater/lab1.jpeg' },
  { title: 'Lab 2: BEM', description: 'Boundary Element Method for hydrodynamic analysis and vehicle modeling.', link: '/projects/underwater/lab2', image: '/images/underwater/lab2.jpeg' },
  { title: 'Lab 3: Turbidity Using Photodiodes and 555-Timer', description: 'Measuring water turbidity and light absorption with custom sensor circuits.', link: '/projects/underwater/lab3', image: '/images/underwater/lab3.jpeg' },
  { title: 'Lab 4: Temperature', description: 'Integrating temperature sensors for environmental monitoring and compensation.', link: '/projects/underwater/lab4', image: '/images/underwater/lab4.jpeg' },
  { title: 'Lab 5: Acoustics', description: 'Underwater acoustic communication and sonar sensing.', link: '/projects/underwater/lab5', image: '/images/underwater/lab5.jpeg' },
  { title: 'Lab 6: Fluid Dynamics Technical Memorandum', description: 'Fluid dynamics analysis and hydrodynamic optimization.', link: '/projects/underwater/lab6', image: '/images/underwater/lab6.jpeg' },
]

const documents = [
  {
    title: 'Final Report',
    description: 'Full technical report — design process, methodology, results, and analysis.',
    href: 'https://drive.google.com/file/d/10z3bwR1xdG-XAJNYut0mEZHobPQbsdvD/view?usp=sharing',
    cta: 'View on Drive →',
  },
  {
    title: 'Final Presentation',
    description: 'Team presentation summarizing approach, results, and lessons learned.',
    href: 'https://drive.google.com/file/d/1SFoDq-4IOvm13Nju7Mgr_akCRxlvOkGa/view?usp=sharing',
    cta: 'View on Drive →',
  },
]

export default function UnderwaterPage() {
  return (
    <div className="mx-auto max-w-[100rem] px-4 py-16">
      <BackLink href="/">Back to Home</BackLink>

      <p className="eyebrow mb-4">E80 Final Project</p>
      <h1 className="font-display text-4xl font-semibold text-ink md:text-5xl">
        Autonomous Underwater Robot
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-body">
        Photodiode-based RGB light intensity measurement, benchmarked against GoPro footage at
        depths up to 5 meters.
      </p>
      <div className="mt-6 flex flex-wrap gap-2">
        <Tag>Robotics</Tag>
        <Tag>Sensors</Tag>
        <Tag>Team Project</Tag>
      </div>

      <div className="blueprint-frame mt-10 max-w-md overflow-hidden rounded-lg border border-line">
        <img src="/images/robot_underwater.jpeg" alt="Autonomous underwater robot" className="w-full" />
      </div>

      <div className="prose-field mt-10">
        <ContentIntro />
      </div>

      <h2 className="mt-4 font-display text-2xl font-semibold text-ink">The Team</h2>
      <TeamGrid members={team} />
      <div className="prose-field mt-4 text-sm">
        <ContentTeamNote />
      </div>

      <h2 className="mt-14 font-display text-2xl font-semibold text-ink">Laboratory Modules</h2>
      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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

      <h2 className="mt-14 font-display text-2xl font-semibold text-ink">Final Documentation</h2>
      <DocumentGrid documents={documents} />

      <h2 className="mt-14 font-display text-2xl font-semibold text-ink">Video Documentation</h2>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border border-line bg-surface p-4">
          <h3 className="mb-3 font-medium text-ink">Real-Time Data Collection</h3>
          <video src="/videos/underwater/Flub.mp4" controls className="w-full rounded bg-black" />
        </div>
        <div className="rounded-lg border border-line bg-surface p-4">
          <h3 className="mb-3 font-medium text-ink">Deployment Footage</h3>
          <video src="/videos/underwater/Flub_shore.MOV" controls className="w-full rounded bg-black" />
        </div>
      </div>

      <div className="prose-field mt-14 border-t border-line pt-10">
        <ContentReflections />
      </div>
    </div>
  )
}
