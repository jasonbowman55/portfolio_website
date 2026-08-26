import ProjectCard from './ProjectCard'
import { engineering, impact } from '../content/projects'

const all = [...engineering, ...impact]

export default function ProjectGrid() {
  return (
    <div>
      <div className="mb-6 flex items-baseline justify-between">
        <h2 className="font-display text-2xl font-semibold text-ink">Projects</h2>
        <span className="text-sm text-muted">{all.length}</span>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {all.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  )
}
