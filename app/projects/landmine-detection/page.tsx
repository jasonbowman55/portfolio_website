import BackLink from '../../components/ui/BackLink'
import Tag from '../../components/ui/Tag'
import LinkPreview from '../../components/ui/LinkPreview'
import Content from './content.mdx'

export default function LandmineDetectionPage() {
  return (
    <div className="mx-auto max-w-[100rem] px-4 py-16">
      <BackLink href="/">Back to Home</BackLink>

      <p className="eyebrow mb-4">Senior Clinic Project</p>
      <h1 className="font-display text-4xl font-semibold text-ink md:text-5xl">
        Non-Ferrous Landmine Detection
      </h1>
      <p className="mt-4 text-lg text-body">
        Drone-deployed sensing for humanitarian demining, sponsored by{' '}
        <LinkPreview href="https://www.linkedin.com/company/sokil-demining/">
          Sokil
        </LinkPreview>
        .
      </p>

      <div className="mt-6 flex flex-wrap items-center gap-2">
        <Tag tone="copper">RADAR</Tag>
        <Tag tone="copper">LiDAR</Tag>
        <Tag tone="copper">Multispectral</Tag>
        <span className="inline-flex items-center gap-1.5 text-xs text-copper">
          <span className="h-1.5 w-1.5 rounded-full bg-copper" />
          In progress · through May 2025
        </span>
      </div>

      <div className="blueprint-frame mt-10 max-w-md overflow-hidden rounded-lg border border-line">
        <img src="/images/sokilDrone.jpg" alt="Sokil demining drone" className="w-full" />
      </div>

      <div className="prose-field mt-10">
        <Content />
      </div>
    </div>
  )
}
