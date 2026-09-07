import PageHeader from '../components/ui/PageHeader'
import Content from './content.mdx'

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-[100rem] px-4 py-16">
      <PageHeader title="About" />

      <div className="prose-field max-w-3xl">
        <Content />
      </div>
    </div>
  )
}
