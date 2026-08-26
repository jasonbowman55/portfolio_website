'use client'

import { useState } from 'react'
import { createPortal } from 'react-dom'
import HeroBio from './hero-bio.mdx'
import LinkPreview from './ui/LinkPreview'

const RESUME_FILE_ID = '19213KDBQJlmCxcuwsBsXrRoW5R6eXiIx'
const RESUME_VIEW_URL = `https://drive.google.com/file/d/${RESUME_FILE_ID}/view?usp=sharing`
const RESUME_DOWNLOAD_URL = `https://drive.google.com/uc?export=download&id=${RESUME_FILE_ID}`
const BOOKING_URL = 'https://calendar.app.google/qJeWnp1q5eKKSXFg7'
const LINKEDIN_URL = 'https://www.linkedin.com/in/jasonbbowman/'
const EMAIL = 'jasonbowman555@gmail.com'

const shareResumeHref = `mailto:?subject=${encodeURIComponent(
  "Jason Bowman's Résumé"
)}&body=${encodeURIComponent(
  `Here's Jason Bowman's résumé: ${RESUME_VIEW_URL}\n\nMore about his work: `
)}`

function EnvelopeIcon() {
  return (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  )
}

function DocumentIcon() {
  return (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m1 5H8a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  )
}

function CalendarIcon() {
  return (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  )
}

export default function Hero() {
  const [showResumeModal, setShowResumeModal] = useState(false)

  return (
    <div>
      {/* Contact / résumé / meeting — up top so it's visible immediately */}
      <div className="mb-6 flex flex-wrap gap-2 text-sm">
        <a
          href={`mailto:${EMAIL}`}
          className="inline-flex items-center gap-1.5 rounded-full border border-mail/40 bg-mail-dim px-4 py-1.5 text-mail transition hover:border-mail hover:bg-mail/20"
        >
          <EnvelopeIcon />
          Email me
        </a>
        <button
          onClick={() => setShowResumeModal(true)}
          className="inline-flex items-center gap-1.5 rounded-full border border-resume/40 bg-resume-dim px-4 py-1.5 text-resume transition hover:border-resume hover:bg-resume/20"
        >
          <DocumentIcon />
          Résumé
        </button>
        <LinkPreview
          href={BOOKING_URL}
          className="inline-flex items-center gap-1.5 rounded-full border border-meeting/40 bg-meeting-dim px-4 py-1.5 text-meeting transition hover:border-meeting hover:bg-meeting/20"
        >
          <CalendarIcon />
          Book a meeting
        </LinkPreview>
        <LinkPreview
          href={LINKEDIN_URL}
          className="inline-flex items-center gap-1.5 rounded-full border border-linkedin/40 bg-linkedin-dim px-4 py-1.5 text-linkedin transition hover:border-linkedin hover:bg-linkedin/20"
        >
          <LinkedInIcon />
          LinkedIn
        </LinkPreview>
      </div>

      <img
        src="/images/hiking.jpg"
        alt="Jason Bowman hiking near Lake Louise"
        className="w-full max-w-xs rounded-2xl border border-line shadow-lg"
      />

      <p className="eyebrow mt-6 mb-2">Electrical Engineer</p>
      <h1 className="font-display text-3xl font-semibold text-ink">Jason Bowman</h1>

      <div className="prose-field mt-6">
        <HeroBio />
      </div>

      {/* Résumé Modal — portaled to <body> so it always sits above everything,
          regardless of any ancestor's stacking context (e.g. the sticky sidebar) */}
      {showResumeModal &&
        createPortal(
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4"
            onClick={() => setShowResumeModal(false)}
          >
            <div
              className="max-h-[90vh] w-full max-w-2xl overflow-auto rounded-xl border border-line bg-base"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-line p-6">
                <h2 className="font-display text-2xl font-medium text-ink">Résumé</h2>
                <button
                  onClick={() => setShowResumeModal(false)}
                  aria-label="Close"
                  className="text-xl text-muted hover:text-signal"
                >
                  ✕
                </button>
              </div>
              <div className="p-6">
                <img
                  src="/images/resume.jpeg"
                  alt="Resume preview"
                  className="w-full rounded border border-line"
                />
              </div>
              <div className="flex flex-wrap gap-3 border-t border-line p-6">
                <a
                  href={RESUME_DOWNLOAD_URL}
                  className="inline-block rounded-lg bg-signal px-6 py-3 font-medium text-[#17130f] transition hover:bg-signal-hover"
                >
                  Download PDF
                </a>
                <a
                  href={shareResumeHref}
                  className="inline-block rounded-lg border border-line bg-surface px-6 py-3 font-medium text-ink transition hover:border-signal/50"
                >
                  Email it to someone
                </a>
                <a
                  href={RESUME_VIEW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-lg border border-line bg-surface px-6 py-3 font-medium text-ink transition hover:border-signal/50"
                >
                  Open in Google Drive
                </a>
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  )
}
