'use client'

import Link from 'next/link'
import { useState } from 'react'
import LinkPreview from './ui/LinkPreview'

const LINKS = [
  { href: '/', label: 'Home' },
  { href: '/hobbies', label: 'Hobbies' },
  { href: '/references', label: 'Academic References' },
  { href: '/about', label: 'About' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b border-line bg-base/85 backdrop-blur">
      <div className="mx-auto max-w-[100rem] px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="font-display text-lg font-semibold text-ink transition hover:text-signal">
            Jason Bowman
          </Link>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-1 md:flex">
            {LINKS.map((link) => (
              <NavLink key={link.href} href={link.href}>
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Social Icons */}
          <div className="hidden items-center gap-4 md:flex">
            <LinkPreview href="https://www.linkedin.com/in/jasonbbowman/" className="text-muted transition hover:text-signal">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-label="LinkedIn">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </LinkPreview>
            <LinkPreview href="https://github.com/jasonbowman55" className="text-muted transition hover:text-signal">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-label="GitHub">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </LinkPreview>
            <a href="mailto:jasonbowman555@gmail.com" aria-label="Email" className="text-muted transition hover:text-signal">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="inline-flex items-center justify-center rounded-md p-2 text-body hover:bg-surface hover:text-signal md:hidden"
          >
            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-line bg-surface md:hidden">
          <div className="space-y-1 px-4 py-3">
            {LINKS.map((link) => (
              <MobileNavLink key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
                {link.label}
              </MobileNavLink>
            ))}
            <div className="flex items-center gap-5 pt-3">
              <LinkPreview href="https://www.linkedin.com/in/jasonbbowman/" className="text-sm text-signal">LinkedIn</LinkPreview>
              <LinkPreview href="https://github.com/jasonbowman55" className="text-sm text-signal">GitHub</LinkPreview>
              <a href="mailto:jasonbowman555@gmail.com" className="text-sm text-signal">Email</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="rounded-md px-3 py-2 text-sm text-body transition hover:text-signal"
    >
      {children}
    </Link>
  )
}

function MobileNavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) {
  return (
    <Link href={href} onClick={onClick} className="block rounded-md px-2 py-2 text-base font-medium text-body hover:text-signal">
      {children}
    </Link>
  )
}
