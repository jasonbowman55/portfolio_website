import LinkPreview from './ui/LinkPreview'

const RESUME_VIEW_URL =
  'https://drive.google.com/file/d/19213KDBQJlmCxcuwsBsXrRoW5R6eXiIx/view?usp=sharing'
const BOOKING_URL = 'https://calendar.app.google/qJeWnp1q5eKKSXFg7'

export default function Footer() {
  return (
    <footer className="grid-field border-t border-line py-12 px-4">
      <div className="mx-auto max-w-[100rem]">
        <div className="mb-10 grid gap-10 sm:grid-cols-2">
          <div>
            <p className="eyebrow mb-3">Site</p>
            <ul className="space-y-2 text-sm">
              <li><a href="/hobbies" className="text-body hover:text-signal">Hobbies</a></li>
              <li><a href="/references" className="text-body hover:text-signal">References</a></li>
              <li><a href="/about" className="text-body hover:text-signal">About</a></li>
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-3">Contact</p>
            <div className="space-y-2 text-sm">
              <p>
                <a href="mailto:jasonbowman555@gmail.com" className="text-body hover:text-signal">
                  jasonbowman555@gmail.com
                </a>
              </p>
              <p>
                <LinkPreview href={RESUME_VIEW_URL} className="text-body hover:text-signal">
                  Résumé
                </LinkPreview>
              </p>
              <p>
                <LinkPreview href={BOOKING_URL} className="text-body hover:text-signal">
                  Book a meeting
                </LinkPreview>
              </p>
              <div className="flex gap-4 pt-1">
                <LinkPreview href="https://www.linkedin.com/in/jasonbbowman/" className="text-signal hover:text-signal-hover">LinkedIn</LinkPreview>
                <LinkPreview href="https://github.com/jasonbowman55" className="text-signal hover:text-signal-hover">GitHub</LinkPreview>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-line pt-6 text-center text-xs text-muted">
          <p>© {new Date().getFullYear()} Jason Bowman</p>
        </div>
      </div>
    </footer>
  )
}
