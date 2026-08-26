import Hero from './components/Hero'
import ProjectGrid from './components/ProjectGrid'

export default function Home() {
  return (
    <div className="mx-auto max-w-[100rem] px-4 py-16">
      <div className="md:grid md:grid-cols-[320px_1fr] md:gap-16">
        <div className="md:sticky md:top-24 md:self-start">
          <Hero />
        </div>

        <div className="mt-14 md:mt-0">
          <ProjectGrid />
        </div>
      </div>
    </div>
  )
}
